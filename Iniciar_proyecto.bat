@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
title INICIAR PROYECTO - MANEJO DE BUSES

REM ============================================================
REM  Iniciar_proyecto.bat
REM  - Detecta la raiz del repo automaticamente.
REM  - Intenta instalar Node.js y Docker Desktop si faltan.
REM  - Instala dependencias del monorepo.
REM  - Levanta PostgreSQL con Docker.
REM  - Sincroniza Prisma para bus-api y ticket-api.
REM  - Si la base de buses esta vacia, carga datos minimos.
REM  - Arranca bus-api, ticket-api, frontend-web y frontend-pwa.
REM  - Guarda logs en /logs y espera a que los servicios respondan.
REM
REM  Uso:
REM    Doble clic -> flujo completo
REM    Iniciar_proyecto.bat --solo-validar
REM    Iniciar_proyecto.bat --sin-navegador
REM ============================================================

set "VALIDATE_ONLY=0"
set "NO_BROWSER=0"

if /I "%~1"=="--solo-validar" set "VALIDATE_ONLY=1"
if /I "%~1"=="--sin-navegador" set "NO_BROWSER=1"

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
cd /d "%ROOT%" || goto :FATAL

set "BUS_PORT=3002"
set "TICKET_PORT=3003"
set "WEB_PORT=3010"
set "PWA_PORT=3011"

set "BUS_DB_URL=postgresql://admin:rootpassword@localhost:5433/bus_db?schema=public"
set "TICKET_DB_URL=postgresql://admin:rootpassword@localhost:5433/ticket_db?schema=public"
set "BUS_API_URL=http://localhost:%BUS_PORT%"
set "TICKET_API_URL=http://localhost:%TICKET_PORT%"
set "WEB_URL=http://localhost:%WEB_PORT%"
set "PWA_URL=http://localhost:%PWA_PORT%"
set "FRONTEND_URL=%WEB_URL%"
set "UPLOAD_DIR=./uploads/comprobantes"
set "MAX_UPLOAD_BYTES=5242880"
set "STRIPE_SECRET_KEY=sk_test_placeholder"
set "STRIPE_WEBHOOK_SECRET=whsec_placeholder"

set "LOG_DIR=%ROOT%\logs"
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%" >nul 2>&1

for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMdd-HHmmss"') do set "STAMP=%%I"

call :REFRESH_KNOWN_PATHS

echo ============================================================
echo   INICIAR PROYECTO - MANEJO DE BUSES
echo ============================================================
echo.
echo [INFO] Raiz detectada: "%ROOT%"
echo [INFO] Modo validacion: %VALIDATE_ONLY%
echo [INFO] Omitir navegador: %NO_BROWSER%
echo.

call :CHECK_ROOT || goto :FATAL
call :ENSURE_TOOL node "Node.js" "OpenJS.NodeJS.LTS" || goto :FATAL
call :ENSURE_TOOL npm "npm" "OpenJS.NodeJS.LTS" || goto :FATAL
call :ENSURE_TOOL powershell "PowerShell" "" || goto :FATAL
call :ENSURE_DOCKER || goto :FATAL

call :STOP_PORT %BUS_PORT%
call :STOP_PORT %TICKET_PORT%
call :STOP_PORT %WEB_PORT%
call :STOP_PORT %PWA_PORT%

call :INSTALL_DEPENDENCIES || goto :FATAL
call :ORGANIZE_OLD_LOGS
call :WRITE_ENV_FILES || goto :FATAL
call :SYNC_PRISMA || goto :FATAL
call :SEED_BUS_IF_EMPTY || goto :FATAL

if "%VALIDATE_ONLY%"=="1" goto :VALIDATION_OK

call :START_SERVICES || goto :FATAL
call :WAIT_URL "%BUS_API_URL%/health" "bus-api" 90 || goto :FATAL
call :WAIT_URL "%TICKET_API_URL%/health" "ticket-api" 90 || goto :FATAL
call :WAIT_URL "%WEB_URL%" "frontend-web" 120 || goto :FATAL
call :WAIT_URL "%PWA_URL%" "frontend-pwa" 120 || goto :FATAL

if not "%NO_BROWSER%"=="1" start "" "%WEB_URL%"

echo.
echo ============================================================
echo [OK] Proyecto inicializado correctamente.
echo ============================================================
echo.
echo Servicios levantados:
echo   - bus-api:      %BUS_API_URL%/health
echo   - ticket-api:   %TICKET_API_URL%/health
echo   - frontend-web: %WEB_URL%
echo   - frontend-pwa: %PWA_URL%
echo.
echo Logs:
echo   %LOG_DIR%
echo.
goto :FIN_OK

:VALIDATION_OK
echo.
echo [OK] Validacion base completada. El script no encontro errores estructurales.
goto :FIN_OK

:CHECK_ROOT
if not exist "%ROOT%\package.json" (
  echo [ERROR] No se encontro package.json en la raiz detectada.
  exit /b 1
)
if not exist "%ROOT%\docker-compose.yml" (
  echo [ERROR] No se encontro docker-compose.yml.
  exit /b 1
)
if not exist "%ROOT%\services\bus-api\package.json" (
  echo [ERROR] No se encontro services\bus-api\package.json.
  exit /b 1
)
if not exist "%ROOT%\services\ticket-api\package.json" (
  echo [ERROR] No se encontro services\ticket-api\package.json.
  exit /b 1
)
if not exist "%ROOT%\apps\frontend-web\package.json" (
  echo [ERROR] No se encontro apps\frontend-web\package.json.
  exit /b 1
)
if not exist "%ROOT%\apps\frontend-pwa\package.json" (
  echo [ERROR] No se encontro apps\frontend-pwa\package.json.
  exit /b 1
)
if not exist "%ROOT%\packages\database\prisma\bus-schema.prisma" (
  echo [ERROR] No se encontro packages\database\prisma\bus-schema.prisma.
  exit /b 1
)
if not exist "%ROOT%\packages\database\prisma\ticket-schema.prisma" (
  echo [ERROR] No se encontro packages\database\prisma\ticket-schema.prisma.
  exit /b 1
)
exit /b 0

:REFRESH_KNOWN_PATHS
if exist "%ProgramFiles%\nodejs\node.exe" set "PATH=%ProgramFiles%\nodejs;%PATH%"
if exist "%ProgramFiles%\Docker\Docker\resources\bin\docker.exe" set "PATH=%ProgramFiles%\Docker\Docker\resources\bin;%PATH%"
exit /b 0

:ENSURE_TOOL
where %~1 >nul 2>&1
if not errorlevel 1 exit /b 0

echo [WARN] %~2 no esta instalado o no esta en PATH.
if "%~3"=="" (
  echo [ERROR] %~2 es obligatorio y este script no puede instalarlo automaticamente.
  exit /b 1
)

call :INSTALL_WITH_WINGET "%~2" "%~3" || exit /b 1
call :REFRESH_KNOWN_PATHS
where %~1 >nul 2>&1
if errorlevel 1 (
  echo [ERROR] %~2 sigue sin estar disponible despues de intentar instalarlo.
  exit /b 1
)
echo [OK] %~2 listo.
exit /b 0

:INSTALL_WITH_WINGET
where winget >nul 2>&1
if errorlevel 1 (
  echo [ERROR] winget no esta disponible para instalar %~1 automaticamente.
  echo         Instala %~1 manualmente y vuelve a ejecutar este archivo.
  exit /b 1
)

echo [INFO] Intentando instalar %~1 con winget...
winget install --exact --id %~2 --silent --accept-package-agreements --accept-source-agreements
if errorlevel 1 (
  echo [ERROR] No se pudo instalar %~1 con winget.
  exit /b 1
)
exit /b 0

:ENSURE_DOCKER
where docker >nul 2>&1
if errorlevel 1 (
  echo [WARN] Docker no esta instalado o no esta en PATH.
  call :INSTALL_WITH_WINGET "Docker Desktop" "Docker.DockerDesktop" || exit /b 1
  call :REFRESH_KNOWN_PATHS
)

docker compose version >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Docker esta instalado pero docker compose no esta disponible.
  exit /b 1
)

docker info >nul 2>&1
if not errorlevel 1 (
  echo [OK] Docker listo.
  exit /b 0
)

echo [INFO] Docker Desktop no esta corriendo. Intentando abrirlo...
call :START_DOCKER_DESKTOP
call :WAIT_DOCKER 180 || exit /b 1
echo [OK] Docker listo.
exit /b 0

:START_DOCKER_DESKTOP
if exist "%ProgramFiles%\Docker\Docker\Docker Desktop.exe" (
  start "" "%ProgramFiles%\Docker\Docker\Docker Desktop.exe"
  exit /b 0
)
if exist "%LocalAppData%\Programs\Docker\Docker\Docker Desktop.exe" (
  start "" "%LocalAppData%\Programs\Docker\Docker\Docker Desktop.exe"
  exit /b 0
)
echo [WARN] No se encontro Docker Desktop.exe en las rutas comunes.
exit /b 0

:WAIT_DOCKER
set "WAIT_DOCKER_SECONDS=%~1"
echo [INFO] Esperando a que Docker termine de iniciar...
for /L %%N in (1,1,%WAIT_DOCKER_SECONDS%) do (
  docker info >nul 2>&1
  if not errorlevel 1 exit /b 0
  timeout /t 1 /nobreak >nul
)
echo [ERROR] Docker no estuvo listo a tiempo.
exit /b 1

:INSTALL_DEPENDENCIES
echo.
echo [1/6] Instalando dependencias del monorepo...
call npm install --no-fund --no-audit
if errorlevel 1 (
  echo [WARN] npm install fallo. Verificando cache y reintentando...
  call npm cache verify >nul 2>&1
  call npm install --legacy-peer-deps --no-fund --no-audit
  if errorlevel 1 (
    echo [ERROR] No se pudieron instalar las dependencias.
    exit /b 1
  )
)
echo [OK] Dependencias listas.
exit /b 0

:ORGANIZE_OLD_LOGS
if exist "%ROOT%\scripts\organize-logs.ps1" (
  powershell -ExecutionPolicy Bypass -File "%ROOT%\scripts\organize-logs.ps1" >nul 2>&1
)
exit /b 0

:WRITE_ENV_FILES
echo.
echo [2/6] Generando archivos .env locales...

> "%ROOT%\services\bus-api\.env" (
  echo # Generado por Iniciar_proyecto.bat
  echo PORT=%BUS_PORT%
  echo BUS_DATABASE_URL=%BUS_DB_URL%
  echo DATABASE_URL=%BUS_DB_URL%
)

> "%ROOT%\services\ticket-api\.env" (
  echo # Generado por Iniciar_proyecto.bat
  echo PORT=%TICKET_PORT%
  echo TICKET_DATABASE_URL=%TICKET_DB_URL%
  echo BUS_API_URL=%BUS_API_URL%
  echo FRONTEND_URL=%FRONTEND_URL%
  echo UPLOAD_DIR=%UPLOAD_DIR%
  echo MAX_UPLOAD_BYTES=%MAX_UPLOAD_BYTES%
  echo STRIPE_SECRET_KEY=%STRIPE_SECRET_KEY%
  echo STRIPE_WEBHOOK_SECRET=%STRIPE_WEBHOOK_SECRET%
)

> "%ROOT%\apps\frontend-web\.env.local" (
  echo # Generado por Iniciar_proyecto.bat
  echo NEXT_PUBLIC_BUS_API_URL=%BUS_API_URL%
  echo NEXT_PUBLIC_TICKET_API_URL=%TICKET_API_URL%
)

> "%ROOT%\apps\frontend-pwa\.env.local" (
  echo # Generado por Iniciar_proyecto.bat
  echo NEXT_PUBLIC_BUS_API_URL=%BUS_API_URL%
  echo NEXT_PUBLIC_TICKET_API_URL=%TICKET_API_URL%
  echo NEXT_PUBLIC_FRONTEND_WEB_URL=%WEB_URL%
)

if not exist "%ROOT%\services\ticket-api\uploads\comprobantes" mkdir "%ROOT%\services\ticket-api\uploads\comprobantes" >nul 2>&1
echo [OK] Archivos .env actualizados.
exit /b 0

:SYNC_PRISMA
echo.
echo [3/6] Levantando PostgreSQL con Docker...
docker compose up -d
if errorlevel 1 (
  echo [ERROR] docker compose up -d fallo.
  exit /b 1
)
echo [OK] Docker listo.

echo.
echo [4/6] Sincronizando Prisma y base de datos...
call npm run db:push --workspace @proyecto-saas/bus-api
if errorlevel 1 (
  echo [ERROR] Fallo bus-api db:push.
  exit /b 1
)

call npm run generate --workspace @proyecto-saas/bus-api
if errorlevel 1 (
  echo [ERROR] Fallo bus-api generate.
  exit /b 1
)

call npm run db:push --workspace @proyecto-saas/ticket-api
if errorlevel 1 (
  echo [ERROR] Fallo ticket-api db:push.
  exit /b 1
)

call npm run generate --workspace @proyecto-saas/ticket-api
if errorlevel 1 (
  echo [ERROR] Fallo ticket-api generate.
  exit /b 1
)

echo [OK] Prisma sincronizado.
exit /b 0

:SEED_BUS_IF_EMPTY
echo.
echo [5/6] Verificando datos base de bus-api...
set "TURNO_COUNT="
set "COUNT_SCRIPT=%TEMP%\bus-turno-count-%RANDOM%-%RANDOM%.cjs"
> "%COUNT_SCRIPT%" echo const { PrismaClient } = require(process.argv[2]);
>> "%COUNT_SCRIPT%" echo const prisma = new PrismaClient();
>> "%COUNT_SCRIPT%" echo prisma.turno.count().then(function(count){ console.log(count); }).catch(function(error){ console.error(error); process.exit(1); }).finally(function(){ prisma.$disconnect(); });

for /f %%I in ('node "%COUNT_SCRIPT%" "%ROOT%\packages\database\prisma\generated\bus-client"') do set "TURNO_COUNT=%%I"
del "%COUNT_SCRIPT%" >nul 2>&1

if not defined TURNO_COUNT (
  echo [ERROR] No se pudo verificar el estado de la base de buses.
  exit /b 1
)

if "%TURNO_COUNT%"=="0" (
  echo [INFO] La base de buses esta vacia. Cargando datos minimos...
  pushd "%ROOT%\services\bus-api"
  call npx ts-node src/simple-seed.ts
  set "SEED_ERROR=%ERRORLEVEL%"
  popd
  if not "%SEED_ERROR%"=="0" (
    echo [ERROR] Fallo la carga de datos minimos de bus-api.
    exit /b 1
  )
  echo [OK] Datos minimos cargados.
) else (
  echo [OK] Ya existen datos en bus-api. Seed omitido.
)
exit /b 0

:START_SERVICES
echo.
echo [6/6] Iniciando servicios...

set "BUS_LOG=%LOG_DIR%\bus-api-%STAMP%.log"
set "BUS_ERR_LOG=%LOG_DIR%\bus-api-%STAMP%.err.log"
set "TICKET_LOG=%LOG_DIR%\ticket-api-%STAMP%.log"
set "TICKET_ERR_LOG=%LOG_DIR%\ticket-api-%STAMP%.err.log"
set "WEB_LOG=%LOG_DIR%\frontend-web-%STAMP%.log"
set "WEB_ERR_LOG=%LOG_DIR%\frontend-web-%STAMP%.err.log"
set "PWA_LOG=%LOG_DIR%\frontend-pwa-%STAMP%.log"
set "PWA_ERR_LOG=%LOG_DIR%\frontend-pwa-%STAMP%.err.log"

start "BUS API - %BUS_PORT%" powershell -NoLogo -NoExit -ExecutionPolicy Bypass -Command "Set-Location -LiteralPath '%ROOT%'; Write-Host '=== BUS API %BUS_PORT% ==='; npm run dev --workspace @proyecto-saas/bus-api 2> '%BUS_ERR_LOG%' | Tee-Object -FilePath '%BUS_LOG%' -Append"
timeout /t 2 /nobreak >nul

start "TICKET API - %TICKET_PORT%" powershell -NoLogo -NoExit -ExecutionPolicy Bypass -Command "Set-Location -LiteralPath '%ROOT%'; Write-Host '=== TICKET API %TICKET_PORT% ==='; npm run dev --workspace @proyecto-saas/ticket-api 2> '%TICKET_ERR_LOG%' | Tee-Object -FilePath '%TICKET_LOG%' -Append"
timeout /t 2 /nobreak >nul

start "FRONTEND WEB - %WEB_PORT%" powershell -NoLogo -NoExit -ExecutionPolicy Bypass -Command "Set-Location -LiteralPath '%ROOT%'; Write-Host '=== FRONTEND WEB %WEB_PORT% ==='; npm run dev --workspace @proyecto-saas/frontend-web 2> '%WEB_ERR_LOG%' | Tee-Object -FilePath '%WEB_LOG%' -Append"
timeout /t 2 /nobreak >nul

start "FRONTEND PWA - %PWA_PORT%" powershell -NoLogo -NoExit -ExecutionPolicy Bypass -Command "Set-Location -LiteralPath '%ROOT%'; Write-Host '=== FRONTEND PWA %PWA_PORT% ==='; npm run dev --workspace @proyecto-saas/frontend-pwa 2> '%PWA_ERR_LOG%' | Tee-Object -FilePath '%PWA_LOG%' -Append"
timeout /t 2 /nobreak >nul

echo [OK] Procesos lanzados.
exit /b 0

:WAIT_URL
set "WAIT_TARGET=%~1"
set "WAIT_NAME=%~2"
set "WAIT_SECONDS=%~3"
echo [INFO] Esperando a %WAIT_NAME%...
for /L %%N in (1,1,%WAIT_SECONDS%) do (
  powershell -NoProfile -Command "$ProgressPreference='SilentlyContinue'; try { $res = Invoke-WebRequest -UseBasicParsing '%WAIT_TARGET%' -TimeoutSec 3; if ($res.StatusCode -ge 200 -and $res.StatusCode -lt 500) { exit 0 } else { exit 1 } } catch { exit 1 }" >nul 2>&1
  if not errorlevel 1 (
    echo [OK] %WAIT_NAME% respondio en %WAIT_TARGET%
    exit /b 0
  )
  timeout /t 1 /nobreak >nul
)
echo [ERROR] %WAIT_NAME% no respondio a tiempo: %WAIT_TARGET%
exit /b 1

:STOP_PORT
set "TARGET_PORT=%~1"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":%TARGET_PORT% .*LISTENING"') do (
  echo [INFO] Cerrando PID %%P en puerto %TARGET_PORT%...
  taskkill /PID %%P /F >nul 2>&1
)
exit /b 0

:FATAL
echo.
echo ============================================================
echo [ERROR] No se pudo inicializar el proyecto.
echo ============================================================
echo Revisa los logs en: %LOG_DIR%
echo.
pause
endlocal
exit /b 1

:FIN_OK
echo.
echo Puedes volver a ejecutar este archivo cuando lo necesites.
echo.
pause
endlocal
exit /b 0
