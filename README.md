# react-relay-instagram-example

* [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
* [Relay](https://facebook.github.io/relay/): Powerful GraphQL client developed by Facebook
* [Graphcool](https://www.graph.cool): Flexible backend platform combining GraphQL + AWS Lambda

## Example ([Live demo](https://demo-react-relay-instagram-example.netlify.com) & [GraphQL Playground](https://api.graph.cool/relay/v1/cj1erhgba0uxi0109k14mdght))

![](http://imgur.com/3S6fUeI.gif)

## Quickstart

For more information on how to get started [refer to the full react-relay-instagram tutorial](https://www.graph.cool/docs/quickstart/react-relay-instagram-example).

### 1. Clone example repository

```sh
git clone https://github.com/graphcool-examples/react-relay-instagram-example.git
cd react-relay-instagram-example
```

### 2. Create GraphQL API with [`graphcool`](https://www.npmjs.com/package/graphcool)

```sh
# Install Graphcool CLI
npm install -g graphcool

# Create a new project based on the Instagram schema
graphcool init --url graph.cool/schema/instagram 
```

This creates a GraphQL API for the following schema:

```graphql
type Post {
  description: String!
  imageUrl: String!
}
```

### 3. Connect the app with your GraphQL API

Copy the `Simple API` endpoint into `package.json` replacing `__SIMPLE_API_ENDPOINT__` in the following line:

```js
"start": "GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:=__SIMPLE_API_ENDPOINT__} webpack-dev-server -d --hot --inline --history-api-fallback --no-info --port 3000",
```

The line will look similar to this afterwards:

```js
"start": "GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:=https://api.graph.cool/simple/v1/abcdefghijklmnop} webpack-dev-server -d --hot --inline --history-api-fallback --no-info --port 3000",
```


### 4. Install depdendencies & run locally

```sh
yarn install
yarn start # open http://localhost:3000 in your browser
```

## Next steps

* [Advanced GraphQL features](x)
* [Authentication & Permissions](x)
* [Implementing business logic with serverless functions](x)


## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
