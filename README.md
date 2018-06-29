# Node.js - Express, MongoDB, ES2017 REST API Boilerplate

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Build Status](https://travis-ci.org/ridhamtarpara/express-es8-rest-boilerplate.svg?branch=master)](https://travis-ci.org/ridhamtarpara/express-es8-rest-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/ridhamtarpara/express-es8-rest-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/ridhamtarpara/express-es8-rest-boilerplate?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ridhamtarpara/express-es8-rest-boilerplate.svg)](https://greenkeeper.io/)


## Features
 - Uses [yarn](https://yarnpkg.com)
 - No transpilers, just vanilla javascript with ES2017 latest features like Async/Await
 - Express + MongoDB ([Mongoose](http://mongoosejs.com/))
 - CORS enabled and uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
 - Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
 - Request validation with [joi](https://github.com/hapijs/joi)
 - Consistent coding styles with [editorconfig](http://editorconfig.org)
 - Gzip compression with [compression](https://github.com/expressjs/compression)
 - Linting with [eslint](http://eslint.org)
 - Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com) and [sinon](http://sinonjs.org)
 - Code coverage with [istanbul](https://istanbul.js.org) and [coveralls](https://coveralls.io)
 - Git hooks with [husky](https://github.com/typicode/husky)
 - Logging with [morgan](https://github.com/expressjs/morgan)
 - Authentication and Authorization with [passport](http://passportjs.org)
 - Rate limiting with [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
 - API documentation generation with [apidoc](http://apidocjs.com)
 - [Docker](https://www.docker.com/) support
 - Continuous integration support with [travisCI](https://travis-ci.org)
 - Monitoring with [pm2](https://github.com/Unitech/pm2)

 > Take a demo at http://13.58.200.57:3000/docs/

## Prerequisites
 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

1. Clone the repo and make it yours:

```bash
git clone https://github.com/ridhamtarpara/express-es8-rest-boilerplate node-api
cd node-api
rm -rf .git
```

2. Install dependencies:

```bash
yarn
```

3. Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
yarn dev
```

## Running in Production

```bash
yarn start
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint:fix

# lint and watch for changes
yarn lint:watch
```

## Test

```bash
# run all tests with Mocha
yarn test

# run unit tests
yarn test:unit

# run integration tests
yarn test:integration

# run all tests and watch for changes
yarn test:watch

# open nyc test coverage reports
yarn coverage
```

## Validate

```bash
# run lint and tests
yarn validate
```

## Logs

```bash
# show logs in production
pm2 logs
```

## Documentation

```bash
# generate and open api documentation
yarn docs
```

## Docker

```bash
# run container locally
yarn docker:dev
or
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

# run container in production
yarn docker:prod
or
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# run tests
yarn docker:test
or
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
```

## Deploy

Set your server ip:

```bash
DEPLOY_SERVER=127.0.0.1
```

Replace my Docker username with yours:

```bash
nano deploy.sh
```

Run deploy script:

```bash
yarn deploy
or
sh ./deploy.sh
```

## Rate Limit Configuration
Change configuration in `.env` file
