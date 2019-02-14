# env-node-backend-base

This project is a base for developing a backend application that exposes a RESTful API built with **TypeScript**, **express.js** and **[Ts.ed](http://tsed.io/)**.

Further, testing is enabled by the usage of **[mocha](https://mochajs.org/)** and **[chai](https://chaijs.com/)**.

## Getting started

Install dependencies (add `--scripts-prepend-node-path` option to eliminate warnings)

```sh
npm install --scripts-prepend-node-path
```

## Running

The project is being run with **[ts-node](https://www.npmjs.com/package/ts-node)**, a TypeScript node.js interpreter via

```sh
npm start
```

The development mode can be started with

```sh
npm run start:dev
```

This starts ts-node in watch mode and immediately restarts the server when file changes are recognized.

The url, where your backend can be reached, will be printed in your console but the following endpoints can be reached
with the initial configuration:

- **<url>/rest** - lists all endpoints
- **<url>/hello** - prints 'Hello World!' and shows basic usage of controllers and unit tests (template.controller.spec.ts)
- **<url>/api-docs/swagger.json** - a documentation of all endpoints in **json** format
- **<url>/api-docs** - a HTML representation of the endpoint documentation

## Testing

Testing can be done by executing

```sh
npm test
```

This will print the results of your tests in your console and create a coverage folder with a HTML report of your code
coverage.

## Configuration

The **server.config.json** file, sitting in your project root, is used for configuration of the express server.
The default version of this file is the following:

```json
{
  "http_port": 8090,
  "https_port": 8443,
  "private_key_path": "",
  "ssl_cert_path": "",
  "passPhrase": ""
}
```

Be sure to adapt this file to your means and provide the necessary information when configuring HTTPS support.

## Deployment

Deployment to the server is currently done by simply copying everything of relevance to the wanted server.
Make sure to adjust the contents of the **config** property in **package.json** to fit the server's properties
(ssh keyfile, username, server url and deployment path).

At a later stage, this process should be automated by a deployment file for **[pm2](https://pm2.io/runtime/)**.

```json
{
  ...
  "config": {
    "keyfile": ".pem file",
    "user": "username",
    "server": "server url",
    "deployPath": "e.g. ~/backend/"
  },
  ...
}
```
