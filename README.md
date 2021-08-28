# BreedFindingApplication

simple app to find the 5 top popular cats that are child frindly, stranger friendly and dog frindly that share the same wwighting

# classes

1. server : to estabils the express service, this application includes only one service
2. index: each service is accessed by index modules
3. findBreedingServiceWorkflow: to structure the workflow of the service
4. getCatBreedsData: to make a secure connection to the cat apis and pull out the cat data
5. digestCatBreedsData: tp process the cat data and return the top 5 cat breeds that are child friendly, dog friendly and stranger friendly that share the same weighting

# How to run the server application

1. git clone the appliction
2. cd into the api folder
3. run npm i
4. run node server.js
