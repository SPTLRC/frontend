# Image de base
FROM nginx:1.21.4

COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY . /usr/share/nginx/html

EXPOSE 80 8080