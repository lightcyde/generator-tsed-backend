[![Build Status](https://travis-ci.org/vortech-digital-pioneers/generator-tsed-backend.svg?branch=master)](https://travis-ci.org/vortech-digital-pioneers/generator-tsed-backend)

# Ts.ED backend generator

_Mirror of **@vortech-digital-pioneers/generator-tsed-backend**, since scoped packages are not
yet being supported by yeoman's registry as well as the offline interpreter. The original scoped
package will be updated when support for scoped packages is given by yeoman, until this happens,
be welcomed right here, where you stand._

Generates a new backend project including express, Ts.ED, mocha and chai.

## Installation

First, install **Yeoman** and **generator-tsed-backend** using npm (we assume you have
pre-installed node.js).

```
npm install -g yo
npm install -g generator-tsed-backend
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
- **--noDemo**
  - specifies that no demo content will be generated

Generate a new controller:

```
yo tsed-backend:controller [controllerName]
```

Generate a new service:

```
yo tsed-backend:service [serviceName]
```


## Getting To Know Yeoman

Yeoman has a heart of gold.\
Yeoman is a person with feelings and opinions, but is very easy to work with.\
Yeoman can be too opinionated at times but is easily convinced not to be.\
Feel free to learn more about Yeoman.
