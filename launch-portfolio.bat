@echo off
title Yassa Ashraf - Personal Technology Portfolio
cd /d "C:\Users\Yassa\Desktop\My Portfolio"
echo =====================================================================
echo   Yassa Ashraf Albir - Personal Technology Portfolio
echo   Starting Next.js Server on http://localhost:3000 ...
echo =====================================================================
echo.
timeout /t 2 /nobreak >nul
start "" http://localhost:3000
npm.cmd run dev
pause

