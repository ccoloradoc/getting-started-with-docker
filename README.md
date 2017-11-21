# Docker Web Project with Docker Compose

## Docker Swarm
```
docker swarm init --advertise-addr=192.168.99.100
```

## Docker stack deploy
```
docker stack deploy -c docker-compose.yml attendance
```

## Docker Services
List services
```
docker service ls
```
List replicas
```
docker service ps attendance_microservice
```
List containers
```
docker container ls -q
```
