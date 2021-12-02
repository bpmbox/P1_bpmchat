## Getting Started

First, run the development server:

```bash
composer install
```

Copy file ".env.example" and change name to ".env" and input database|mail config

```bash
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan db:seed
php artisan serve --host=localhost --port=8080
```
