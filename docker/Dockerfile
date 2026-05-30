FROM php:8.4-fpm

RUN  apt update \
  && apt install -y unzip vim \
  && pecl install xdebug \
  && docker-php-ext-enable xdebug \
  && docker-php-ext-install pdo_mysql \
  && curl -sS https://getcomposer.org/installer -o composer-setup.php \
  && php composer-setup.php --install-dir=/usr/local/bin --filename=composer
