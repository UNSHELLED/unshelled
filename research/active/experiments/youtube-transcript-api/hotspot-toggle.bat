@echo off
setlocal enabledelayedexpansion

:: Check argument
if "%1"=="off" goto OFF
if "%1"=="on" goto ON
if "%1"=="" goto MENU

:MENU
cls
echo =====================================
echo   Hotspot Toggle
echo =====================================
echo.
echo [1] Turn ON
echo [2] Turn OFF
echo [3] Exit
echo.
set /p choice="Select: "
if "%choice%"=="1" goto ON
if "%choice%"=="2" goto OFF
exit

:ON
echo.
echo Turning hotspot ON...
adb shell su -c "service call connectivity 33 i32 0"
echo.
echo Done! Hotspot should be enabled.
pause
exit /b 0

:OFF
echo.
echo Turning hotspot OFF...
adb shell su -c "service call connectivity 33 i32 1"
echo.
echo Done! Hotspot should be disabled.
pause
exit /b 0
