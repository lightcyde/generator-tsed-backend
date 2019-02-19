# Ts.ED backend generator

Generates a new backend project including express, Ts.ED, mocha and chai.

## Installation

First, install **Yeoman** and **generator-tsed-backend** using npm (we assume you have
pre-installed node.js).

```
npm install -g yo
npm install -g @vortech-digital-pioneers/generator-tsed-backend
```

## Usage

Generate your new project:

```
yo tsed-backend [appName] [--demo]
```

Arguments are used for the following:
- **appName**
  - specifies the name of your application
  - the folder containing the files will also be called like this
- **--demo**
  - specifies if demo content (controller/service) should be generated when starting the project

Generate a new controller:

```
yo tsed-backend:controller [controllerName]
```

Generate a new service:

```
yo tsed-backend:service [controllerName]
```


## Getting To Know Yeoman

Yeoman has a heart of gold.\
Yeoman is a person with feelings and opinions, but is very easy to work with.\
Yeoman can be too opinionated at times but is easily convinced not to be.\
Feel free to learn more about Yeoman.
