# Используем образ с PHP 8.2 FPM
FROM php:8.2-fpm

# Устанавливаем необходимые пакеты для Nginx и PHP
RUN apt-get update && apt-get install -y \
    nginx \
    && rm -rf /var/lib/apt/lists/*

# Копируем конфигурационный файл Nginx в контейнер
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Копируем файлы проекта в директорию /var/www/html
COPY . /var/www/html
COPY .env /var/www/html

# Устанавливаем рабочую директорию
WORKDIR /var/www/html

# Открываем порт 80 для веб-сервера Nginx
EXPOSE 80

# Запускаем Nginx и PHP-FPM
CMD nginx -g 'daemon off;' && php-fpm
