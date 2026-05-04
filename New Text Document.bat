@echo off
chcp 65001 >nul
title DarkLight Project Structure Creator

echo ========================================
echo   DarkLight Team - Structure Creator
echo ========================================
echo.

set PROJECT_NAME=darklight-website

:: حذف پروژه قبلی اگر وجود داشت
if exist "%PROJECT_NAME%" (
    echo [!] Project folder already exists.
    choice /c yn /m "Do you want to delete it and create new one?"
    if errorlevel 2 exit
    echo Deleting existing project...
    rmdir /s /q "%PROJECT_NAME%"
)

echo [1/2] Creating folder structure...
echo.

:: پوشه اصلی
mkdir "%PROJECT_NAME%"
echo   ✓ %PROJECT_NAME%

:: پوشه public
mkdir "%PROJECT_NAME%\public"
echo   ✓ %PROJECT_NAME%\public

:: پوشه src اصلی
mkdir "%PROJECT_NAME%\src"
echo   ✓ %PROJECT_NAME%\src

:: پوشه assets
mkdir "%PROJECT_NAME%\src\assets"
mkdir "%PROJECT_NAME%\src\assets\images"
mkdir "%PROJECT_NAME%\src\assets\fonts"
echo   ✓ %PROJECT_NAME%\src\assets (images, fonts)

:: پوشه components
mkdir "%PROJECT_NAME%\src\components"
mkdir "%PROJECT_NAME%\src\components\Layout"
mkdir "%PROJECT_NAME%\src\components\Background"
mkdir "%PROJECT_NAME%\src\components\News"
mkdir "%PROJECT_NAME%\src\components\UI"
mkdir "%PROJECT_NAME%\src\components\common"
echo   ✓ %PROJECT_NAME%\src\components (Layout, Background, News, UI, common)

:: پوشه contexts
mkdir "%PROJECT_NAME%\src\contexts"
echo   ✓ %PROJECT_NAME%\src\contexts

:: پوشه hooks
mkdir "%PROJECT_NAME%\src\hooks"
echo   ✓ %PROJECT_NAME%\src\hooks

:: پوشه pages
mkdir "%PROJECT_NAME%\src\pages"
echo   ✓ %PROJECT_NAME%\src\pages

:: پوشه styles
mkdir "%PROJECT_NAME%\src\styles"
echo   ✓ %PROJECT_NAME%\src\styles

:: پوشه translations
mkdir "%PROJECT_NAME%\src\translations"
echo   ✓ %PROJECT_NAME%\src\translations

:: پوشه services
mkdir "%PROJECT_NAME%\src\services"
echo   ✓ %PROJECT_NAME%\src\services

:: پوشه utils
mkdir "%PROJECT_NAME%\src\utils"
echo   ✓ %PROJECT_NAME%\src\utils

echo.
echo [2/2] Creating empty files...
echo.

:: ایجاد فایل‌های خالی - Public
type nul > "%PROJECT_NAME%\public\index.html"
type nul > "%PROJECT_NAME%\public\manifest.json"
type nul > "%PROJECT_NAME%\public\robots.txt"
echo   ✓ public files (index.html, manifest.json, robots.txt)

:: ایجاد فایل‌های خالی - src root
type nul > "%PROJECT_NAME%\src\index.js"
type nul > "%PROJECT_NAME%\src\App.jsx"
type nul > "%PROJECT_NAME%\src\App.css"
type nul > "%PROJECT_NAME%\src\AppRoutes.jsx"
echo   ✓ src root files (index.js, App.jsx, App.css, AppRoutes.jsx)

:: ایجاد فایل‌های خالی - Components/Layout
type nul > "%PROJECT_NAME%\src\components\Layout\Header.jsx"
type nul > "%PROJECT_NAME%\src\components\Layout\Footer.jsx"
type nul > "%PROJECT_NAME%\src\components\Layout\Layout.jsx"
type nul > "%PROJECT_NAME%\src\components\Layout\Navbar.jsx"
type nul > "%PROJECT_NAME%\src\components\Layout\Sidebar.jsx"
echo   ✓ Layout components (Header, Footer, Layout, Navbar, Sidebar)

:: ایجاد فایل‌های خالی - Components/Background
type nul > "%PROJECT_NAME%\src\components\Background\ParticleBackground.jsx"
type nul > "%PROJECT_NAME%\src\components\Background\ParticleBackground.css"
type nul > "%PROJECT_NAME%\src\components\Background\AnimatedBackground.jsx"
echo   ✓ Background components (ParticleBackground, AnimatedBackground)

:: ایجاد فایل‌های خالی - Components/News
type nul > "%PROJECT_NAME%\src\components\News\NewsCard.jsx"
type nul > "%PROJECT_NAME%\src\components\News\NewsGrid.jsx"
type nul > "%PROJECT_NAME%\src\components\News\NewsList.jsx"
type nul > "%PROJECT_NAME%\src\components\News\News.css"
echo   ✓ News components (NewsCard, NewsGrid, NewsList)

:: ایجاد فایل‌های خالی - Components/UI
type nul > "%PROJECT_NAME%\src\components\UI\ThemeToggle.jsx"
type nul > "%PROJECT_NAME%\src\components\UI\LanguageToggle.jsx"
type nul > "%PROJECT_NAME%\src\components\UI\Button.jsx"
type nul > "%PROJECT_NAME%\src\components\UI\Card.jsx"
type nul > "%PROJECT_NAME%\src\components\UI\Modal.jsx"
type nul > "%PROJECT_NAME%\src\components\UI\Input.jsx"
type nul > "%PROJECT_NAME%\src\components\UI\Badge.jsx"
echo   ✓ UI components (ThemeToggle, LanguageToggle, Button, Card, Modal, Input, Badge)

:: ایجاد فایل‌های خالی - Components/common
type nul > "%PROJECT_NAME%\src\components\common\Loading.jsx"
type nul > "%PROJECT_NAME%\src\components\common\Error.jsx"
type nul > "%PROJECT_NAME%\src\components\common\EmptyState.jsx"
echo   ✓ Common components (Loading, Error, EmptyState)

:: ایجاد فایل‌های خالی - Contexts
type nul > "%PROJECT_NAME%\src\contexts\ThemeContext.jsx"
type nul > "%PROJECT_NAME%\src\contexts\LanguageContext.jsx"
type nul > "%PROJECT_NAME%\src\contexts\AuthContext.jsx"
echo   ✓ Contexts (ThemeContext, LanguageContext, AuthContext)

:: ایجاد فایل‌های خالی - Hooks
type nul > "%PROJECT_NAME%\src\hooks\useTheme.js"
type nul > "%PROJECT_NAME%\src\hooks\useLanguage.js"
type nul > "%PROJECT_NAME%\src\hooks\useLocalStorage.js"
type nul > "%PROJECT_NAME%\src\hooks\useMediaQuery.js"
echo   ✓ Hooks (useTheme, useLanguage, useLocalStorage, useMediaQuery)

:: ایجاد فایل‌های خالی - Pages
type nul > "%PROJECT_NAME%\src\pages\Home.jsx"
type nul > "%PROJECT_NAME%\src\pages\About.jsx"
type nul > "%PROJECT_NAME%\src\pages\Contact.jsx"
type nul > "%PROJECT_NAME%\src\pages\News.jsx"
type nul > "%PROJECT_NAME%\src\pages\Gallery.jsx"
type nul > "%PROJECT_NAME%\src\pages\Team.jsx"
type nul > "%PROJECT_NAME%\src\pages\NotFound.jsx"
echo   ✓ Pages (Home, About, Contact, News, Gallery, Team, NotFound)

:: ایجاد فایل‌های خالی - Styles
type nul > "%PROJECT_NAME%\src\styles\globals.css"
type nul > "%PROJECT_NAME%\src\styles\themes.css"
type nul > "%PROJECT_NAME%\src\styles\animations.css"
type nul > "%PROJECT_NAME%\src\styles\typography.css"
type nul > "%PROJECT_NAME%\src\styles\responsive.css"
echo   ✓ Styles (globals, themes, animations, typography, responsive)

:: ایجاد فایل‌های خالی - Translations
type nul > "%PROJECT_NAME%\src\translations\fa.json"
type nul > "%PROJECT_NAME%\src\translations\en.json"
echo   ✓ Translations (fa.json, en.json)

:: ایجاد فایل‌های خالی - Services
type nul > "%PROJECT_NAME%\src\services\api.js"
type nul > "%PROJECT_NAME%\src\services\newsService.js"
echo   ✓ Services (api.js, newsService.js)

:: ایجاد فایل‌های خالی - Utils
type nul > "%PROJECT_NAME%\src\utils\constants.js"
type nul > "%PROJECT_NAME%\src\utils\helpers.js"
type nul > "%PROJECT_NAME%\src\utils\validators.js"
echo   ✓ Utils (constants, helpers, validators)

:: ایجاد فایل‌های پروژه - Root
type nul > "%PROJECT_NAME%\package.json"
type nul > "%PROJECT_NAME%\.gitignore"
type nul > "%PROJECT_NAME%\.env"
type nul > "%PROJECT_NAME%\.env.example"
type nul > "%PROJECT_NAME%\README.md"
echo   ✓ Root files (package.json, .gitignore, .env, README.md)

echo.
echo ========================================
echo   Structure Created Successfully! 
echo ========================================
echo.
echo Project: %PROJECT_NAME%
echo.
echo Next steps:
echo   1. cd %PROJECT_NAME%
echo   2. npm init -y  (or copy your package.json)
echo   3. npm install react react-dom react-scripts
echo   4. code .
echo.
echo Happy coding! 

:: باز کردن پوشه پروژه در Explorer
start "" "%PROJECT_NAME%"

pause