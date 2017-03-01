// =====================================================
// docker hub
// https://docs.docker.com/engine/getstarted/step_six/

// mongo
docker run -d --name mongodb -p 27017:27017 mongo

// camp main server and database
docker build -t trippin:server .
docker tag d1c77763ba5a yoshiori/trippin:tpserver
docker push yoshiori/trippin:tpserver

// Pull your new image
docker pull yoshiori/trippin:tpserver

// linking containers
docker run -d --name database -p 27017:27017 0dffc7177b06
docker run -d -P --name tpserver --link database:database -p 3000:3000 06581ff7e9b8
docker exec -ti ff8a801e3165 /bin/bash


