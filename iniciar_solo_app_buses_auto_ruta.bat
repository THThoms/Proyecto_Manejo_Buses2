@echo off
setlocal EnableExtensions EnableDelayedExpansion
title INICIAR PROYECTO BUSES - AUTO RUTA

REM ============================================================
REM  ESTE .BAT DETECTA AUTOMATICAMENTE SU PROPIA CARPETA
REM  Y EJECUTA TODO DESDE ESA RUTA.
REM
REM  Puedes ejecutarlo con doble clic desde cualquier lado.
REM  Debe estar pegado en la RAIZ del proyecto:
REM  package.json, apps, services, packages, docker-compose.yml
REM ============================================================

REM Ruta exacta donde esta guardado este .bat
set "ROOT=%~dp0"

REM Quitar barra final si existe
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

REM Entrar a la carpeta donde esta el .bat
cd /d "%ROOT%"

set "BUS_PORT=3002"
set "WEB_PORT=3000"
set "BUS_DB=postgresql://admin:rootpassword@localhost:5433/bus_db?schema=public"
set "API_URL=http://127.0.0.1:%BUS_PORT%"
set "FRONTEND_URL=http://localhost:%WEB_PORT%"
set "LOGIN_URL=http://localhost:%WEB_PORT%/login"

echo ============================================================
echo   INICIAR PROYECTO MANEJO BUSES - AUTO RUTA
echo ============================================================
echo.
echo Este .bat se esta ejecutando desde:
echo "%ROOT%"
echo.
echo Carpeta activa actual:
cd
echo.

REM ------------------------------------------------------------
REM VALIDAR UBICACION
REM ------------------------------------------------------------
if not exist "%ROOT%\package.json" (
    echo [ERROR] No encontre package.json en:
    echo "%ROOT%"
    echo.
    echo Pega este .bat en la RAIZ del proyecto.
    echo Debe estar junto a: package.json, apps, services y packages.
    goto FIN
)

if not exist "%ROOT%\services\bus-api\package.json" (
    echo [ERROR] No encontre:
    echo "%ROOT%\services\bus-api\package.json"
    goto FIN
)

if not exist "%ROOT%\apps\frontend-web\package.json" (
    echo [ERROR] No encontre:
    echo "%ROOT%\apps\frontend-web\package.json"
    goto FIN
)

REM ------------------------------------------------------------
REM VERIFICAR DEPENDENCIAS BASICAS
REM ------------------------------------------------------------
echo [1/5] Verificando node_modules...

if not exist "%ROOT%\node_modules" (
    echo [FALTA] node_modules en raiz. Instalando...
    pushd "%ROOT%"
    call npm install --legacy-peer-deps
    if errorlevel 1 (
        popd
        goto ERROR_NPM
    )
    popd
) else (
    echo [OK] node_modules raiz.
)

if not exist "%ROOT%\services\bus-api\node_modules" (
    echo [FALTA] node_modules en bus-api. Instalando...
    pushd "%ROOT%\services\bus-api"
    call npm install --legacy-peer-deps
    if errorlevel 1 (
        popd
        goto ERROR_NPM
    )
    popd
) else (
    echo [OK] node_modules bus-api.
)

if not exist "%ROOT%\apps\frontend-web\node_modules" (
    echo [FALTA] node_modules en frontend-web. Instalando...
    pushd "%ROOT%\apps\frontend-web"
    call npm install --legacy-peer-deps
    if errorlevel 1 (
        popd
        goto ERROR_NPM
    )
    popd
) else (
    echo [OK] node_modules frontend-web.
)

REM ------------------------------------------------------------
REM CREAR ENV SI FALTAN
REM ------------------------------------------------------------
echo.
echo [2/5] Verificando .env...

if not exist "%ROOT%\services\bus-api\.env" (
    echo BUS_DATABASE_URL="%BUS_DB%"> "%ROOT%\services\bus-api\.env"
    echo DATABASE_URL="%BUS_DB%">> "%ROOT%\services\bus-api\.env"
    echo PORT=%BUS_PORT%>> "%ROOT%\services\bus-api\.env"
    echo [OK] services\bus-api\.env creado.
) else (
    echo [OK] services\bus-api\.env existe.
)

REM Se sobrescribe para asegurar que el frontend apunte al bus-api correcto
echo NEXT_PUBLIC_BUS_API_URL=%API_URL%> "%ROOT%\apps\frontend-web\.env.local"
echo [OK] apps\frontend-web\.env.local apunta a %API_URL%

REM ------------------------------------------------------------
REM DOCKER
REM ------------------------------------------------------------
echo.
echo [3/5] Levantando Docker Compose...

if exist "%ROOT%\docker-compose.yml" (
    docker info >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Docker Desktop no esta corriendo.
        echo Abre Docker Desktop y vuelve a ejecutar este archivo.
        goto FIN
    )

    pushd "%ROOT%"
    docker compose up -d
    if errorlevel 1 (
        popd
        echo [ERROR] Fallo docker compose up -d.
        goto FIN
    )
    popd

    echo [OK] Docker listo.
) else (
    echo [AVISO] No encontre docker-compose.yml. Sigo sin Docker.
)

REM ------------------------------------------------------------
REM CERRAR PUERTOS
REM ------------------------------------------------------------
echo.
echo [4/5] Cerrando procesos anteriores en puertos 3000, 3001 y 3002...
call :KILLPORT 3000
call :KILLPORT 3001
call :KILLPORT 3002

timeout /t 2 /nobreak >nul

REM ------------------------------------------------------------
REM ABRIR BACKEND Y FRONTEND DESDE LA RUTA DETECTADA
REM ------------------------------------------------------------
echo.
echo [5/5] Abriendo backend y frontend...

start "BUS API - Puerto %BUS_PORT%" /D "%ROOT%\services\bus-api" cmd /k "echo === BUS API %BUS_PORT% === && echo Ruta: %ROOT%\services\bus-api && set BUS_DATABASE_URL=%BUS_DB%&& set DATABASE_URL=%BUS_DB%&& set PORT=%BUS_PORT%&& npm run dev"

echo Esperando que levante el backend...
timeout /t 6 /nobreak >nul

start "FRONTEND WEB - Puerto %WEB_PORT%" /D "%ROOT%\apps\frontend-web" cmd /k "echo === FRONTEND WEB %WEB_PORT% === && echo Ruta: %ROOT%\apps\frontend-web && set NEXT_PUBLIC_BUS_API_URL=%API_URL%&& npm run dev"

echo Esperando que levante el frontend...
timeout /t 12 /nobreak >nul

REM Detectar si existe login real. Si no existe, abre la raiz del frontend.
set "OPEN_URL=%FRONTEND_URL%"

if exist "%ROOT%\apps\frontend-web\src\app\login\page.tsx" set "OPEN_URL=%LOGIN_URL%"
if exist "%ROOT%\apps\frontend-web\src\app\login\page.jsx" set "OPEN_URL=%LOGIN_URL%"
if exist "%ROOT%\apps\frontend-web\src\pages\login.tsx" set "OPEN_URL=%LOGIN_URL%"
if exist "%ROOT%\apps\frontend-web\pages\login.tsx" set "OPEN_URL=%LOGIN_URL%"

echo Abriendo navegador en:
echo %OPEN_URL%
start "" "%OPEN_URL%"

echo.
echo ============================================================
echo LISTO
echo ============================================================
echo Ruta detectada:
echo "%ROOT%"
echo.
echo Deben quedar abiertas 2 ventanas:
echo - BUS API - Puerto %BUS_PORT%
echo - FRONTEND WEB - Puerto %WEB_PORT%
echo.
echo Frontend abierto:
echo %OPEN_URL%
echo.
echo Si alguna ventana muestra error, mandame captura de ESA ventana.
echo.
goto FIN

:KILLPORT
set "PUERTO=%~1"
for /f "tokens=5" %%A in ('netstat -ano ^| findstr /R /C:":%PUERTO% .*LISTENING"') do (
    echo Cerrando PID %%A en puerto %PUERTO%...
    taskkill /PID %%A /F >nul 2>&1
)
exit /b 0

:ERROR_NPM
echo.
echo [ERROR] Fallo instalando dependencias.
echo Copia el error de arriba y mandamelo.
goto FIN

:FIN
echo.
echo Esta ventana no se cerrara sola.
pause
endlocal
