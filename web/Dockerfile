FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/www/portal

WORKDIR /var/www/portal

ADD ./src /var/www/portal

CMD nginx -g "daemon off;"

EXPOSE 80
