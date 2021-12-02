FROM node:14.15
WORKDIR /frontend
COPY ./frontend .
RUN yarn install && yarn run build && rm -rf ./node_modules

FROM php:8.0.10

RUN docker-php-ext-install pdo pdo_mysql sockets
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /backend
COPY ./backend .
COPY --from=0 /frontend/build /backend/public

RUN composer update
RUN composer install

CMD php artisan key:generate && php artisan jwt:secret && php artisan migrate && php artisan db:seed && php artisan serve --host=0.0.0.0 --port=8080
