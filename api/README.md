# Instalación

`` pip install -r requirements.txt

`` python manage.py migrate

`` python manage.pu runserver


# Ejecución de tests

   python manage.py test

# Configuración NginX

``` 
location / {
      if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Methods' 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Access-Control-Allow-Headers,Authorization';
        add_header 'Access-Control-Expose-Headers' 'Authorization';
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
      }
      if ($request_method = 'POST') {
        add_header 'Access-Control-Allow-Methods' 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Access-Control-Allow-Headers,Authorization';
        add_header 'Access-Control-Expose-Headers' 'Authorization';
      }
      if ($request_method = 'GET') {
        add_header 'Access-Control-Allow-Methods' 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Access-Control-Allow-Headers,Authorization';
        add_header 'Access-Control-Expose-Headers' 'Authorization';
      }
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $remote_addr;
      proxy_set_header Host $http_host;
      proxy_set_header Access-Control-Allow-Methods 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
      proxy_set_header Access-Control-Allow-Headers 'Access-Control-Allow-Headers,Authorization';
      proxy_set_header Access-Control-Expose-Headers 'Authorization';
      proxy_pass http://127.0.0.1:8000;
   }
```


