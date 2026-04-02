@echo off
setlocal enabledelayedexpansion

:: VENOM - ADB Hotspot Toggle
:: Opens Android hotspot settings via ADB

echo.
echo =====================================
echo   ADB Hotspot Toggle
echo =====================================
echo.

:: Check if adb exists
where adb >nul 2>&1
if errorlevel 1 (
    echo [ERROR] adb not found in PATH
    echo.
    echo Install Android Platform Tools or add to PATH:
    echo https://developer.android.com/tools/releases/platform-tools
    pause
    exit /b 1
)

:: Check if device is connected
echo [1/3] Checking for devices...
adb devices | findstr "device$" >nul
if errorlevel 1 (
    echo [ERROR] No device found
    echo.
    echo Make sure:
    echo - USB debugging is ON
    echo - Phone is connected
    echo - Authorized on phone popup
    pause
    exit /b 1
)
echo [OK] Device found

:: Try direct settings open (universal method)
echo.
echo [2/3] Opening hotspot settings...
adb shell am start -a android.intent.action.MAIN -n com.android.settings/.TetherSettings >nul 2>&1

if errorlevel 1 (
    echo [WARN] Direct settings path failed, trying alternative...
    adb shell am start -a android.settings.WIRELESS_SETTINGS >nul 2>&1
)

echo [OK] Settings opened on phone

:: Instructions
echo.
echo [3/3] Toggle the hotspot on your phone now
echo.
echo =====================================
echo   Done! Toggle hotspot on device
echo =====================================
echo.
pause
