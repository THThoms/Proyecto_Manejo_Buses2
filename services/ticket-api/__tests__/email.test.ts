// US23: tests de emailService.
//
// El módulo cachea el transporter en el primer getTransporter(). Usamos
// jest.isolateModules para re-importar y resetear ese cache entre tests.

const sendMailMock = jest.fn();
jest.mock('nodemailer', () => ({
  __esModule: true,
  createTransport: jest.fn(() => ({ sendMail: sendMailMock })),
}));

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'log').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('emailService (US23) - modo stub', () => {
  // NODE_ENV='test' viene desde setup.ts => transporter siempre null.

  it('enviarConfirmacion sin destinatario → no llama sendMail', async () => {
    await jest.isolateModulesAsync(async () => {
      const mod = await import('../src/services/emailService');
      await mod.enviarConfirmacion(123);
      expect(sendMailMock).not.toHaveBeenCalled();
    });
  });

  it('enviarConfirmacion con destinatario → en modo test sigue stub (sin SMTP real)', async () => {
    await jest.isolateModulesAsync(async () => {
      const mod = await import('../src/services/emailService');
      await mod.enviarConfirmacion(123, 'cliente@example.com');
      expect(sendMailMock).not.toHaveBeenCalled();
    });
  });

  it('enviarRechazo incluye el motivo en el HTML', async () => {
    // Forzamos modo SMTP saliendo de NODE_ENV='test' temporal.
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'u';
    process.env.SMTP_PASS = 'p';
    try {
      sendMailMock.mockResolvedValue({ accepted: ['cliente@x.com'] });
      await jest.isolateModulesAsync(async () => {
        const mod = await import('../src/services/emailService');
        await mod.enviarRechazo(99, 'Comprobante ilegible', 'cliente@x.com');
        expect(sendMailMock).toHaveBeenCalled();
        const args = sendMailMock.mock.calls[0][0];
        expect(args.to).toBe('cliente@x.com');
        expect(args.html).toContain('Comprobante ilegible');
        expect(args.subject).toContain('#99');
      });
    } finally {
      process.env.NODE_ENV = oldEnv;
      delete process.env.SMTP_HOST;
      delete process.env.SMTP_PORT;
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;
    }
  });

  it('enviarAprobacion llama sendMail cuando hay SMTP', async () => {
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'u';
    process.env.SMTP_PASS = 'p';
    try {
      sendMailMock.mockResolvedValue({});
      await jest.isolateModulesAsync(async () => {
        const mod = await import('../src/services/emailService');
        await mod.enviarAprobacion(55, 'cliente@x.com');
        expect(sendMailMock).toHaveBeenCalled();
        expect(sendMailMock.mock.calls[0][0].subject).toContain('aprobada');
      });
    } finally {
      process.env.NODE_ENV = oldEnv;
      delete process.env.SMTP_HOST;
      delete process.env.SMTP_PORT;
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;
    }
  });

  it('enviarResetPassword arma link con APP_PUBLIC_URL y token urlencoded', async () => {
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'u';
    process.env.SMTP_PASS = 'p';
    process.env.APP_PUBLIC_URL = 'https://app.example.com';
    try {
      sendMailMock.mockResolvedValue({});
      await jest.isolateModulesAsync(async () => {
        const mod = await import('../src/services/emailService');
        await mod.enviarResetPassword('user@x.com', 'María', 'abc.def.ghi');
        expect(sendMailMock).toHaveBeenCalled();
        const html = sendMailMock.mock.calls[0][0].html;
        expect(html).toContain('https://app.example.com/reset-password?token=abc.def.ghi');
        expect(html).toContain('María');
      });
    } finally {
      process.env.NODE_ENV = oldEnv;
      delete process.env.SMTP_HOST;
      delete process.env.SMTP_PORT;
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;
      delete process.env.APP_PUBLIC_URL;
    }
  });

  it('si sendMail lanza, no propaga el error (mantiene flujo de compra/aprobación)', async () => {
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'u';
    process.env.SMTP_PASS = 'p';
    try {
      sendMailMock.mockRejectedValue(new Error('SMTP timeout'));
      await jest.isolateModulesAsync(async () => {
        const mod = await import('../src/services/emailService');
        // No debe lanzar.
        await expect(mod.enviarConfirmacion(7, 'a@b.com')).resolves.toBeUndefined();
      });
    } finally {
      process.env.NODE_ENV = oldEnv;
      delete process.env.SMTP_HOST;
      delete process.env.SMTP_PORT;
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;
    }
  });

  it('escapa HTML del motivo para evitar inyección', async () => {
    const oldEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'u';
    process.env.SMTP_PASS = 'p';
    try {
      sendMailMock.mockResolvedValue({});
      await jest.isolateModulesAsync(async () => {
        const mod = await import('../src/services/emailService');
        await mod.enviarRechazo(1, '<script>alert(1)</script>', 'a@b.com');
        const html = sendMailMock.mock.calls[0][0].html;
        expect(html).not.toContain('<script>alert(1)</script>');
        expect(html).toContain('&lt;script&gt;');
      });
    } finally {
      process.env.NODE_ENV = oldEnv;
      delete process.env.SMTP_HOST;
      delete process.env.SMTP_PORT;
      delete process.env.SMTP_USER;
      delete process.env.SMTP_PASS;
    }
  });
});
