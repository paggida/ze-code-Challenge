![ZeDelivery](assets/logo.png)

<p align="center">The project is a geolocation API that aims to find the closest business partner to deliver the drink to the customer.</p>

## 💻 Technologies used
- NodeJs in API (https://nodejs.org/en/).
- MongoDB in data base (https://www.mongodb.com/).
- Docker for infrastructure (https://www.docker.com/).
- Jest for tests (https://jestjs.io/en/).
- Swagger for documentation (https://swagger.io/)

## ✋🏻 Prerequisite
To execute this project you will need to have the following components in your environment.
### Docker
To activate the application containers you must use the Docker based on your operating system used:
- Windows (https://docs.docker.com/docker-for-windows/install/)
- Mac (https://docs.docker.com/docker-for-mac/install/)
- Ubuntu (https://docs.docker.com/engine/install/ubuntu/)
### Docker-compose
To activate all the interacting containers together, you must use Docker-compose (https://docs.docker.com/compose/install/)
### Package Manager
It'll be responsible for the commands to start the application. You can choose your preference:
- NPM (https://www.npmjs.com/get-npm)
- Yarn (https://classic.yarnpkg.com/en/docs/install)

## 👨‍💻 Running the application
Start the docker service installed in your environment, after completing, depending on which package manager you chose, run the respective command below inside the application's root folder.

    yarn start-docker
or

    npm run start-docker

You can interact with the API through an API client software or through the Swagger documentation page available on the console after the application container starts (```Swagger url: http://localhost:3000/api/v1/doc```).

The application is already started with some registered partners.


## 📝 Tests
With the application running, execute the command below:

    docker exec -it ze_code_prj yarn test

## 📦 Sending to production environment
If you already having an account in a cloud service (AWS, Digitalocean, etc), you can easily make the application available on it through a Docker tool called Docker-Machine (https://docs.docker.com/machine/overview/)
