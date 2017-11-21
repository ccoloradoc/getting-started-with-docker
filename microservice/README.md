# Docker Web Project

## Docker build
```
docker build -t microservice .
```

## Docker run
```
docker run --name=micro_1 -d -v ~/<root>/getting-started-docker/microservice:/microservice -p 80:80 microservice
```

## Docker exec

```
docker exec -it micro_1 /bin/bash
```
