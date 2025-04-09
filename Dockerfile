FROM php:8.3-apache

RUN apt update && \
    apt upgrade -y && \
    apt install -y vim nano curl wget links telnet

RUN docker-php-ext-install mysqli

WORKDIR /var/www/html

COPY . .

EXPOSE 8081

