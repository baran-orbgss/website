@echo off
python scripts\validate_site.py
if errorlevel 1 exit /b %errorlevel%
echo.
echo Starting local preview at http://localhost:8080
python -m http.server 8080
