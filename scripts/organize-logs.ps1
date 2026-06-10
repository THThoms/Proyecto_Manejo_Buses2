$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $root 'logs'

if (-not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Path $logDir | Out-Null
}

$patterns = @('*.log', '*.err.log', '*.out.log')

$files = Get-ChildItem -Path $root -File -Force | Where-Object {
    foreach ($pattern in $patterns) {
        if ($_.Name -like $pattern) {
            return $true
        }
    }

    return $false
}

foreach ($file in $files) {
    $destination = Join-Path $logDir $file.Name
    Move-Item -Path $file.FullName -Destination $destination -Force
}

Write-Host "Logs organizados en $logDir"
