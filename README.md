## Installation

This POC requires [Node.js](https://nodejs.org/) v12+ to run.
Install the dependencies to start the server.

```sh
clone the project
cd project_directory
npm i
npm start
```

> I've included .env file in the repo to make the installation process straightforward. However, I am well aware that putting .env in source control is not a good idea.

## End To End Testing With Cypress

Please use the command below to install cypress globally.

```sh
npx install cypress --force
```

After that, you may run the command below to run e2e testcases. Assuming you've already set up your project's dependencies.

```sh
npx test
```
