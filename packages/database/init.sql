-- =======================================================
-- 1. CREACIÓN DE LAS BASES DE DATOS (MICROSERVICIOS)
-- =======================================================
CREATE DATABASE auth_db;
CREATE DATABASE bus_db;
CREATE DATABASE ticket_db;
CREATE DATABASE ms_pagos;

-- =======================================================
-- 2. MICROSERVICIO: AUTH & USUARIOS (auth_db)
-- =======================================================
\c auth_db;

CREATE TYPE EstadoUsuario AS ENUM ('ACTIVO', 'INACTIVO');
CREATE TYPE EstadoRolUsuario AS ENUM ('ACTIVO', 'INACTIVO');
CREATE TYPE NombreRol AS ENUM ('ADMIN', 'OFICIAL', 'OFICINISTA', 'DUENO', 'PASAJERO', 'SOPORTE');
CREATE TYPE NombrePermiso AS ENUM ('ESCANEAR_QR', 'VER_TURNO', 'VER_ASIENTOS', 'VENDER_BOLETO', 'VER_REPORTES', 'GESTIONAR_BUSES', 'PAGAR_DUENOS', 'GESTIONAR_USUARIOS', 'COMPRAR_BOLETO', 'VER_MIS_BOLETOS', 'VER_MIS_PAGOS', 'VER_TOTAL_VIAJES', 'ALERTA_GPS', 'VER_RECLAMOS', 'GESTIONAR_RECLAMOS', 'APROBAR_TRANSFERENCIA', 'VENDER_BOLETO_OFICINA', 'VER_PAGOS_PENDIENTES', 'ANULAR_BOLETO');

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    estado EstadoUsuario DEFAULT 'ACTIVO',
    creado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nombre NombreRol UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE permisos (
    id SERIAL PRIMARY KEY,
    nombre NombrePermiso UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE usuario_roles (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    rol_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    asignado_por INTEGER,
    asignado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expira_en TIMESTAMP(3),
    estado EstadoRolUsuario DEFAULT 'ACTIVO',
    UNIQUE(usuario_id, rol_id)
);

CREATE TABLE rol_permisos (
    id SERIAL PRIMARY KEY,
    rol_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    permiso_id INTEGER NOT NULL REFERENCES permisos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE(rol_id, permiso_id)
);

CREATE TABLE sesiones (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    token TEXT UNIQUE NOT NULL,
    expira_en TIMESTAMP(3) NOT NULL,
    dispositivo TEXT
);

-- =======================================================
-- 3. MICROSERVICIO: OPERACIONES & FLOTA (bus_db)
-- =======================================================
\c bus_db;

CREATE TYPE EstadoGeneral AS ENUM ('ACTIVO', 'INACTIVO');
CREATE TYPE EstadoBus AS ENUM ('ACTIVO', 'MANTENIMIENTO', 'INACTIVO');
CREATE TYPE EstadoTurno AS ENUM ('PENDIENTE', 'EN_RUTA', 'COMPLETADO', 'CANCELADO');
CREATE TYPE TipoAsiento AS ENUM ('NORMAL', 'VIP', 'DISCAPACIDAD');
CREATE TYPE EstadoAsientoTurno AS ENUM ('DISPONIBLE', 'RESERVADO', 'OCUPADO', 'VACIO');
CREATE TYPE DiaSemana AS ENUM ('LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM');
CREATE TYPE TipoConfiguracion AS ENUM ('TEXTO', 'NUMERO', 'COLOR', 'URL');

-- Original + campos agregados: logo_url, cuenta_bancaria, banco, telefono, email (US01)
CREATE TABLE cooperativas (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    ruc TEXT UNIQUE NOT NULL,
    logo_url TEXT,
    cuenta_bancaria TEXT,
    banco TEXT,
    telefono TEXT,
    email TEXT,
    estado EstadoGeneral DEFAULT 'ACTIVO'
);

CREATE TABLE duenos (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    cedula TEXT UNIQUE NOT NULL,
    telefono TEXT,
    cuenta_bancaria TEXT,
    banco TEXT,
    estado EstadoGeneral DEFAULT 'ACTIVO'
);

-- Original + campos agregados: numero_disco, foto_url (US02)
CREATE TABLE buses (
    id SERIAL PRIMARY KEY,
    cooperativa_id INTEGER NOT NULL REFERENCES cooperativas(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    dueno_id INTEGER NOT NULL REFERENCES duenos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    numero_disco INTEGER,
    placa TEXT UNIQUE NOT NULL,
    marca TEXT NOT NULL,
    carroceria TEXT NOT NULL,
    modelo TEXT NOT NULL,
    anio INTEGER NOT NULL,
    capacidad INTEGER NOT NULL,
    color TEXT,
    foto_url TEXT,
    estado EstadoBus DEFAULT 'ACTIVO'
);

CREATE TABLE choferes (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    cedula TEXT UNIQUE NOT NULL,
    telefono TEXT,
    licencia TEXT UNIQUE NOT NULL,
    tipo_licencia TEXT NOT NULL,
    estado EstadoGeneral DEFAULT 'ACTIVO'
);

CREATE TABLE rutas (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    origen TEXT NOT NULL,
    destino TEXT NOT NULL,
    duracion_min INTEGER NOT NULL,
    precio_pasaje DECIMAL(10, 2) NOT NULL
);

CREATE TABLE paradas (
    id SERIAL PRIMARY KEY,
    ruta_id INTEGER NOT NULL REFERENCES rutas(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    nombre TEXT NOT NULL,
    orden INTEGER NOT NULL,
    latitud DECIMAL(10, 8) NOT NULL,
    longitud DECIMAL(11, 8) NOT NULL,
    metros_alerta INTEGER NOT NULL DEFAULT 500
);

-- Original + campos agregados: resolucion_ant, estado (US03)
CREATE TABLE frecuencias (
    id SERIAL PRIMARY KEY,
    ruta_id INTEGER NOT NULL REFERENCES rutas(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    bus_id INTEGER NOT NULL REFERENCES buses(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    dia_semana DiaSemana NOT NULL,
    hora_salida TEXT NOT NULL,
    hora_llegada TEXT NOT NULL,
    resolucion_ant TEXT,
    estado EstadoGeneral DEFAULT 'ACTIVO'
);

CREATE TABLE turnos (
    id SERIAL PRIMARY KEY,
    bus_id INTEGER NOT NULL REFERENCES buses(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    ruta_id INTEGER NOT NULL REFERENCES rutas(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    chofer_id INTEGER NOT NULL REFERENCES choferes(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    fecha DATE NOT NULL,
    hora_inicio TEXT NOT NULL,
    hora_fin TEXT,
    estado EstadoTurno DEFAULT 'PENDIENTE'
);

CREATE TABLE asientos (
    id SERIAL PRIMARY KEY,
    bus_id INTEGER NOT NULL REFERENCES buses(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    numero INTEGER NOT NULL,
    fila TEXT,
    tipo TipoAsiento DEFAULT 'NORMAL',
    estado EstadoGeneral DEFAULT 'ACTIVO',
    UNIQUE(bus_id, numero)
);

CREATE TABLE asiento_turnos (
    id SERIAL PRIMARY KEY,
    turno_id INTEGER NOT NULL REFERENCES turnos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    asiento_id INTEGER NOT NULL REFERENCES asientos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    boleto_id INTEGER,
    estado EstadoAsientoTurno DEFAULT 'DISPONIBLE',
    UNIQUE(turno_id, asiento_id)
);

-- NUEVO (US17): Tracking GPS en tiempo real del bus
CREATE TABLE ubicaciones_bus (
    id SERIAL PRIMARY KEY,
    turno_id INTEGER NOT NULL REFERENCES turnos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    latitud DECIMAL(10, 8) NOT NULL,
    longitud DECIMAL(11, 8) NOT NULL,
    velocidad DECIMAL(5, 2),
    registrado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- NUEVO (US22): Configuración visual de la plataforma
CREATE TABLE configuracion_app (
    id SERIAL PRIMARY KEY,
    clave TEXT UNIQUE NOT NULL,
    valor TEXT NOT NULL,
    tipo TipoConfiguracion DEFAULT 'TEXTO',
    actualizado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Datos iniciales de configuración
INSERT INTO configuracion_app (clave, valor, tipo) VALUES
    ('nombre_empresa', 'Sistema de Transporte', 'TEXTO'),
    ('color_primario', '#1E40AF', 'COLOR'),
    ('color_secundario', '#3B82F6', 'COLOR'),
    ('logo_url', '', 'URL'),
    ('telefono_soporte', '', 'TEXTO'),
    ('email_soporte', '', 'TEXTO'),
    ('redes_sociales', '{}', 'TEXTO'),
    ('radio_alerta_metros', '500', 'NUMERO');

-- =======================================================
-- 4. MICROSERVICIO: VENTAS & PAGOS (ticket_db)
-- =======================================================
\c ticket_db;

CREATE TYPE CanalVenta AS ENUM ('APP', 'WEB', 'OFICIAL', 'OFICINISTA');
CREATE TYPE EstadoCompra AS ENUM ('PENDIENTE', 'CONFIRMADA', 'ANULADA');
CREATE TYPE EstadoBoleto AS ENUM ('PENDIENTE', 'VIGENTE', 'UTILIZADO', 'EXPIRADO', 'ANULADO');
CREATE TYPE MetodoPago AS ENUM ('TARJETA', 'TRANSFERENCIA', 'EFECTIVO');
CREATE TYPE EstadoPago AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO');
CREATE TYPE EstadoTransferencia AS ENUM ('PENDIENTE', 'APROBADO', 'RECHAZADO');
CREATE TYPE EstadoAprobacion AS ENUM ('APROBADO', 'RECHAZADO');
CREATE TYPE CanalEfectivo AS ENUM ('BUS', 'OFICINA');
CREATE TYPE ResultadoEscaneo AS ENUM ('APROBADO', 'RECHAZADO');
CREATE TYPE EstadoBoletoParada AS ENUM ('PENDIENTE', 'ALERTADO', 'BAJADO');
CREATE TYPE TipoTarifa AS ENUM ('NORMAL', 'TERCERA_EDAD', 'DISCAPACIDAD', 'MENOR');
CREATE TYPE TipoAlerta AS ENUM ('CHOFER', 'PASAJERO');
CREATE TYPE EstadoAlertaParada AS ENUM ('PENDIENTE', 'ENVIADA', 'LEIDA');

CREATE TABLE compras (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL,
    frecuencia_id INTEGER NOT NULL,
    fecha_viaje DATE NOT NULL,
    cantidad INTEGER NOT NULL DEFAULT 1,
    total DECIMAL(10, 2) NOT NULL,
    canal CanalVenta NOT NULL,
    estado EstadoCompra DEFAULT 'PENDIENTE',
    creado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Original + campos agregados: asiento_numero, asiento_tipo, ruta_nombre (US08)
CREATE TABLE boletos (
    id SERIAL PRIMARY KEY,
    compra_id INTEGER NOT NULL REFERENCES compras(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    uuid_qr TEXT UNIQUE NOT NULL,
    cedula_pasajero TEXT NOT NULL,
    nombre_pasajero TEXT NOT NULL,
    asiento_numero INTEGER,
    asiento_tipo TEXT,
    ruta_nombre TEXT,
    tipo_tarifa TipoTarifa DEFAULT 'NORMAL',
    estado EstadoBoleto DEFAULT 'PENDIENTE',
    expira_en TIMESTAMP(3) NOT NULL,
    creado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pagos_pasajero (
    id SERIAL PRIMARY KEY,
    compra_id INTEGER UNIQUE NOT NULL REFERENCES compras(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    monto DECIMAL(10, 2) NOT NULL,
    metodo MetodoPago NOT NULL,
    estado EstadoPago DEFAULT 'PENDIENTE',
    pagado_en TIMESTAMP(3)
);

CREATE TABLE pagos_tarjeta (
    id SERIAL PRIMARY KEY,
    pago_id INTEGER UNIQUE NOT NULL REFERENCES pagos_pasajero(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    ultimos_4 TEXT NOT NULL,
    marca TEXT NOT NULL,
    referencia_pasarela TEXT NOT NULL
);

CREATE TABLE pagos_transferencia (
    id SERIAL PRIMARY KEY,
    pago_id INTEGER UNIQUE NOT NULL REFERENCES pagos_pasajero(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    banco TEXT NOT NULL,
    referencia TEXT NOT NULL,
    comprobante_url TEXT,
    estado EstadoTransferencia DEFAULT 'PENDIENTE'
);

CREATE TABLE aprobaciones (
    id SERIAL PRIMARY KEY,
    pago_transferencia_id INTEGER UNIQUE NOT NULL REFERENCES pagos_transferencia(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    oficinista_id INTEGER NOT NULL,
    estado EstadoAprobacion NOT NULL,
    observacion TEXT,
    revisado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pagos_efectivo (
    id SERIAL PRIMARY KEY,
    pago_id INTEGER UNIQUE NOT NULL REFERENCES pagos_pasajero(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    vendedor_id INTEGER NOT NULL,
    monto_recibido DECIMAL(10, 2) NOT NULL,
    cambio DECIMAL(10, 2) NOT NULL,
    canal_venta CanalEfectivo NOT NULL,
    turno_id INTEGER
);

CREATE TABLE escaneos (
    id SERIAL PRIMARY KEY,
    boleto_id INTEGER UNIQUE NOT NULL REFERENCES boletos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    oficial_id INTEGER NOT NULL,
    bus_id INTEGER NOT NULL,
    turno_id INTEGER NOT NULL,
    resultado ResultadoEscaneo NOT NULL,
    escaneado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE boleto_paradas (
    id SERIAL PRIMARY KEY,
    boleto_id INTEGER UNIQUE NOT NULL REFERENCES boletos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    parada_origen_id INTEGER NOT NULL,
    parada_destino_id INTEGER NOT NULL,
    estado EstadoBoletoParada DEFAULT 'PENDIENTE'
);

-- NUEVO (US09): Control anti-fraude por cedula (max 1 descuento en 24h)
CREATE TABLE registro_descuentos (
    id SERIAL PRIMARY KEY,
    cedula TEXT NOT NULL,
    boleto_id INTEGER UNIQUE NOT NULL REFERENCES boletos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    tipo_tarifa TipoTarifa NOT NULL,
    aplicado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_registro_descuentos_cedula_fecha ON registro_descuentos(cedula, aplicado_en);

-- NUEVO (US17/US18): Alertas diferenciadas CHOFER y PASAJERO
CREATE TABLE alertas_parada (
    id SERIAL PRIMARY KEY,
    turno_id INTEGER NOT NULL,
    parada_id INTEGER NOT NULL,
    boleto_parada_id INTEGER REFERENCES boleto_paradas(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    tipo TipoAlerta NOT NULL,
    estado EstadoAlertaParada DEFAULT 'PENDIENTE',
    creado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =======================================================
-- 5. MICROSERVICIO: PAGOS & LIQUIDACIONES (ms_pagos)
-- NUEVO: No existia en repo original
-- =======================================================
\c ms_pagos;

CREATE TYPE EstadoLiquidacion AS ENUM ('GENERADA', 'PAGADA');
CREATE TYPE EstadoPagoCooperativa AS ENUM ('PENDIENTE', 'PROCESADO', 'COMPLETADO', 'FALLIDO');

-- Registro de ingresos por cada viaje/turno completado
CREATE TABLE ingresos_viaje (
    id SERIAL PRIMARY KEY,
    turno_id INTEGER UNIQUE NOT NULL,
    bus_id INTEGER NOT NULL,
    cooperativa_id INTEGER NOT NULL,
    dueno_id INTEGER NOT NULL,
    ruta_nombre TEXT NOT NULL,
    fecha DATE NOT NULL,
    total_pasajeros INTEGER NOT NULL,
    ingreso_tarjeta DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ingreso_transferencia DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ingreso_efectivo_bus DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ingreso_efectivo_oficina DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ingreso_total DECIMAL(12, 2) NOT NULL,
    registrado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_ingresos_viaje_cooperativa ON ingresos_viaje(cooperativa_id, fecha);
CREATE INDEX idx_ingresos_viaje_dueno ON ingresos_viaje(dueno_id, fecha);

-- Liquidación mensual por cooperativa
CREATE TABLE liquidaciones (
    id SERIAL PRIMARY KEY,
    cooperativa_id INTEGER NOT NULL,
    periodo_inicio DATE NOT NULL,
    periodo_fin DATE NOT NULL,
    total_boletos INTEGER NOT NULL,
    total_recaudado DECIMAL(12, 2) NOT NULL,
    comision_plataforma DECIMAL(12, 2) NOT NULL,
    neto_a_pagar DECIMAL(12, 2) NOT NULL,
    estado EstadoLiquidacion DEFAULT 'GENERADA',
    generado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Detalle de liquidación desglosado por bus/dueño
CREATE TABLE liquidacion_detalles (
    id SERIAL PRIMARY KEY,
    liquidacion_id INTEGER NOT NULL REFERENCES liquidaciones(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    dueno_id INTEGER NOT NULL,
    bus_id INTEGER NOT NULL,
    total_viajes INTEGER NOT NULL,
    total_boletos INTEGER NOT NULL,
    monto_recaudado DECIMAL(12, 2) NOT NULL,
    comision DECIMAL(12, 2) NOT NULL,
    neto_a_pagar DECIMAL(12, 2) NOT NULL
);

-- Registro de pagos realizados a cooperativas/dueños
CREATE TABLE pagos_cooperativa (
    id SERIAL PRIMARY KEY,
    liquidacion_id INTEGER,
    cooperativa_id INTEGER NOT NULL,
    dueno_id INTEGER,
    monto DECIMAL(12, 2) NOT NULL,
    referencia TEXT,
    banco TEXT,
    cuenta_destino TEXT,
    estado EstadoPagoCooperativa DEFAULT 'PENDIENTE',
    pagado_en TIMESTAMP(3),
    registrado_en TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);