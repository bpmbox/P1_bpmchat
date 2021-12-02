FROM php:8.0.10
WORKDIR /app
COPY . /app

RUN docker-php-ext-install pdo pdo_mysql sockets
RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer update
RUN composer install

EXPOSE 8080
