FROM php:8.4-fpm

RUN  apt update \
  && apt install -y unzip vim \
  && pecl install xdebug \
  && docker-php-ext-enable xdebug \
  && docker-php-ext-install pdo_mysql
