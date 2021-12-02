## Description:

- The project contains `docker-compose.yml` and a couple of helper scripts:

	- `docker-compose.yml` (all our services: web, backend, db are described here)
	- `start-backend.sh` (starts nodejs app)
	- `wait-for-it.sh` (imported from https://github.com/vishnubob/wait-for-it)


## Run services:

1. Install docker compose (https://docs.docker.com/compose/install/)

2. Move to `docker` folder. All next steps should be done from this folder.
	- `cd docker`

3. Make executables from `wait-for-it.sh` and `start-backend.sh`:
	- `chmod +x start-backend.sh && chmod +x wait-for-it.sh`


4. Download dependend projects for services. In our case wee also need `singup-react`.

5. Review the docker-compose.yml file. Make sure that all services have Dockerfiles. Only db service doesn't require a Dockerfile. I've created docker branches for user-management-template-backend and sing-app-react projects. You should switch to them before running `docker-compose up`. 

6. Make sure you have needed ports (see them in `ports`) available on your local machine.

7. Start services:
	- With an empty database `rm -rf data && docker-compose up`
	- With a stored (from previus runs) database data `docker-compose up`

8. Check http://localhost:3000

9. Stop services:
	- Just press `Ctr+C`
