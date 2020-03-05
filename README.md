# GraphQL Apollo Link Rest - Example

Example to usage GraphQL in a React app to consume a rest API exposed by [graphql-java-demo](https://github.com/npalm/graphql-java-demo/tree/rest-service).

## Setup

```
docker run -d --name graphql-java-demo --rm -p 8080:8080 npalm/graphql-java-demo:rest-service
```
Next start the JavaScript App
```
yarn && yarn start
```