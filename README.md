# react-relay-instagram-example

![] (http://i.imgur.com/Hqwsxmq.png)

## Getting Started

After [downloading this example](https://github.com/graphcool-examples/react-relay-instagram-example/archive/master.zip) please follow these steps.

### 1. Create an account

To run this example, please create a [Graphcool](http://graph.cool) account and **copy your endpoint**. This shouldn't take longer than a minute. We promise!

![](https://i.gyazo.com/a0fb8e342ec9844e466cd6dc0a27516d.gif)


### 2. Configure app data and build schema endpoint

Open `package.json` and replace `https://api.graph.cool/relay/v1/__PROJECT_ID__` with your endpoint in the following line:

```js
    "start": "GRAPHQL_ENDPOINT=${GRAPHQL_ENDPOINT:=https://api.graph.cool/relay/v1/__PROJECT_ID__} webpack-dev-server -d --hot --inline --history-api-fallback --no-info --port 3000",
```

This step is needed in order to support Relay. More info can be found here: [babel-plugin-react-relay](https://github.com/graphcool/babel-plugin-react-relay).

### 3. Run the example

You're done configuring the example application. Please run the following command and open [localhost:3000](http://localhost:3000) in your browser. Have fun exploring! 🎉

```sh
yarn && yarn start
# or npm install && npm start
```

## Deploy the example

Instead of running the app locally, you can also deploy it to [Netlify](https://www.netlify.com). Keep your **project endpoint** ready!

```sh
npm install -g netlify-cli
netlify deploy
```

or click the deploy button to see it live.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/graphcool-examples/react-relay-instagram-example)

## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
