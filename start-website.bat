@echo off
echo Starting Anniversary Website...
echo.
echo Make sure Node.js is installed first!
echo If you get an error, install Node.js from https://nodejs.org/
echo.
pause
echo.
echo Installing dependencies...
npm install
echo.
echo Starting the website...
echo The website will open at http://localhost:5000
echo Password: ourlove2024
echo.
echo Press Ctrl+C to stop the website
npm run dev
pause