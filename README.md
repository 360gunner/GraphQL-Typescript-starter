The project was created for learning purposes.

The project was created using the "express-generator-node-typescript-apollo-graphql-mongo-cli" cli.

The cli mainly gives you a starter GraphQL project with TypeScript.

The GraphQL project has 2 schemas (User and Book) and it has some queries and mutations for them.

There was one problem when creating the project with the cli which was related to the mongoose models, I corrected it.

I made the GraphQL subscription configuration and an example of its implementation (userCreated) and also added the docker configuration for the project so that we can start it with mongodb using docker-compose directly.

To run the project first install Docker on your PC and then run this command in the root folder of the project : docker-compose -f "docker-compose.yml" up  --build