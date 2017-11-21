# Docker Web Project

## Docker build
```
docker build -t front .
```

## Docker run
```
docker run --name=front_1 -d -v ~/<root>/getting-started-docker/web/src:/var/www/portal -p 80:80 front
```

## Docker exec

```
docker exec -it front_1 /bin/bash
```
