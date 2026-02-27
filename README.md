# Portfolio — Denis Isaev

Modern portfolio site built with **Laravel** and **Vue 3** (Vite). Data is taken from the resume and stored in config; works are added via code (no admin panel).

## Stack

- Laravel 12
- Vue 3 + Vue Router
- Vite 7
- Tailwind CSS 4

## Run locally

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install --legacy-peer-deps
npm run dev
```

In another terminal:

```bash
php artisan serve
```

Open http://localhost:8000

## Adding a new work

Edit `config/portfolio.php` and add an entry to the `works` array:

```php
[
    'slug' => 'my-project',           // URL: /works/my-project
    'title' => 'Project Name',
    'subtitle' => 'Laravel, Vue.js',
    'year' => '2024',
    'description' => 'Full description of the project...',
    'tech' => ['Laravel', 'Vue.js', 'MySQL'],
    'url' => 'https://example.com',   // optional live link
    'screenshots' => [
        ['src' => '/images/work1.png', 'alt' => 'Main screen'],
    ],
    'video_url' => null,  // optional: YouTube embed or Google Drive (see below)
],
```

**Видео в работе (`video_url`):**

- **YouTube:** скопируй ссылку «Встроить» — в ней уже формат `https://www.youtube.com/embed/VIDEO_ID`. Либо из ссылки вида `youtube.com/watch?v=VIDEO_ID` подставь в `https://www.youtube.com/embed/VIDEO_ID`.
- **Google Drive:**
  1. Залей видео на Google Drive.
  2. ПКМ по файлу → **Поделиться** → **Доступ по ссылке** → «Все, у кого есть ссылка».
  3. Скопируй ссылку вида `https://drive.google.com/file/d/ABC123xyz/view?usp=sharing`.
  4. Для вставки в портфолио замени в ней **`/view`** на **`/preview`** и укажи в конфиге:
     `'video_url' => 'https://drive.google.com/file/d/ABC123xyz/preview'`
     (подставь свой `ABC123xyz` — ID файла из ссылки).
```

Screenshots can be URLs or paths to files in `public/` (e.g. `public/images/works/...`).

## Adding a certificate

1. Put the certificate image in `public/images/certificates/` (e.g. `laravel-bootcamp.png`).
2. In `config/portfolio.php`, the `certificates` array already has `image` paths. **Current expected filenames** (save screenshots from LinkedIn/Coursera with these names):
   - `01-php-oop.png` — PHP: Object-Oriented Programming
   - `02-php-debugging.png` — Advanced PHP: Debugging Techniques
   - `03-php-pagination.png` — PHP Techniques: Pagination
   - `04-linkedin-learning.png` — LinkedIn Learning (generic)
   - `05-php-user-auth.png` — PHP: User Authentication
   - `06-php-secure-websites.png` — PHP: Creating Secure Websites
   - `07-php-files-directories.png` — PHP Techniques: Working with Files and Directories
   - `08-php-functional.png` — Functional Programming with PHP
   - `09-php-testing-legacy.png` — PHP: Testing Legacy Applications
   - `10-coursera-laravel-php.png` — Master Full-Stack Web Development with Laravel & PHP

To add a **new** certificate, add an entry to the `certificates` array:

```php
[
    'title' => 'Laravel Bootcamp',
    'description' => 'Completed Laravel Bootcamp course: routing, Eloquent, Blade, authentication.',
    'image' => '/images/certificates/laravel-bootcamp.png',
    'year' => '2024',
    'issuer' => 'Laracasts',
],
```

- `title` — name of the certificate/course (required).
- `description` — short description (optional).
- `image` — path from site root, e.g. `/images/certificates/name.png` (optional; if omitted, a placeholder is shown).
- `year` — year received (optional).
- `issuer` — issuing organization (optional).

## Routes

- `/` — Home (hero, about, skills, experience, education, works preview, contact)
- `/works` — List of all works
- `/works/{slug}` — Single work (description, video, screenshots)
- `/certificates` — Certificates (image + description per item)

## Build for production

```bash
npm run build
```

Laravel will serve assets from `public/build/` when `APP_ENV=production` or when the build manifest exists.

---

## Пошаговая публикация на GitHub Pages

Инструкция от создания репозитория до открытия портфолио в браузере.

---

### Шаг 1. Создать репозиторий на GitHub

1. Откройте [github.com](https://github.com) и войдите в аккаунт.
2. Нажмите **"+"** в правом верхнем углу → **New repository**.
3. Заполните:
   - **Repository name** — например, `portfolio` (адрес будет `https://ВАШ_ЛОГИН.github.io/portfolio/`).
   - **Description** — по желанию.
   - **Public**.
   - **НЕ** ставьте галочки "Add a README", "Add .gitignore", "Choose a license" — репозиторий должен быть пустым.
4. Нажмите **Create repository**.

---

### Шаг 2. Инициализировать Git в проекте (если ещё не сделано)

В терминале в папке проекта:

```bash
cd /Users/denis/Sites/portfolio
git init
git add .
git commit -m "Initial commit: Laravel + Vue portfolio"
```

---

### Шаг 3. Подключить удалённый репозиторий и отправить код

Подставьте вместо `ВАШ_ЛОГИН` и `portfolio` свои значения:

```bash
git remote add origin https://github.com/ВАШ_ЛОГИН/portfolio.git
git branch -M main
git push -u origin main
```

При запросе логина/пароля используйте [Personal Access Token](https://github.com/settings/tokens) (классический токен с правом `repo`) или настройте [SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

---

### Шаг 4. Включить GitHub Pages в настройках репозитория

1. В репозитории откройте **Settings** (вкладка сверху).
2. Слева выберите **Pages** (раздел "Code and automation").
3. В блоке **Build and deployment**:
   - **Source** выберите **GitHub Actions** (не "Deploy from a branch").
4. Сохранять отдельно не нужно — выбора источника достаточно.

---

### Шаг 5. Запустить деплой

После пуша в `main` workflow запускается сам. Можно подождать или запустить вручную:

1. Откройте вкладку **Actions** в репозитории.
2. Слева выберите workflow **Deploy to GitHub Pages**.
3. Справа нажмите **Run workflow** → **Run workflow**.
4. Дождитесь зелёной галочки у последнего запуска (обычно 1–3 минуты).

---

### Шаг 6. Открыть портфолио в браузере

- **Project page** (репозиторий `portfolio`):  
  **https://ВАШ_ЛОГИН.github.io/portfolio/**  
  Обязательно с `/` в конце при первом заходе.

- **User page** (если настраивали деплой из репозитория `USERNAME.github.io`):  
  **https://ВАШ_ЛОГИН.github.io/**

Сайт может появиться не сразу; при первом деплое подождите 1–2 минуты и обновите страницу.

---

### Если что-то пошло не так

| Проблема | Что проверить |
|----------|----------------|
| 404 при открытии сайта | В Settings → Pages источник должен быть **GitHub Actions**. Подождать 2–3 минуты после деплоя. |
| Белый экран, не грузятся стили/скрипты | URL должен совпадать с базой приложения. Для project page — путь вида `/portfolio/`, не без имени репозитория. В workflow в шаге "Build for GitHub Pages" переменная `VITE_BASE_URL` должна быть `/${{ github.event.repository.name }}/`. |
| Ошибка в Actions | Откройте упавший run → красный шаг. Часто: не установлены зависимости (`composer install` / `npm ci`) или не найден скрипт `build:pages` в `package.json`. |
| Сайт открывается, но при переходе по ссылкам 404 | В `dist/` после сборки должен быть файл **404.html** (копия `index.html`). Workflow копирует его командой `cp dist/index.html dist/404.html`. |

---

### Дальнейшие изменения

После правок в коде:

```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

После пуша в `main` снова запустится workflow и обновится сайт на GitHub Pages (обычно через 1–2 минуты).

---

### Справка: базовый URL и локальная сборка

- **User/org page** (`https://USERNAME.github.io/`): в `.github/workflows/deploy-pages.yml` в шаге "Build for GitHub Pages" замените `VITE_BASE_URL: /${{ github.event.repository.name }}/` на `VITE_BASE_URL: /`.
- Проверить статическую сборку локально: `npm run build:pages`, затем `npx serve dist` — откроется папка `dist/` как сайт.
