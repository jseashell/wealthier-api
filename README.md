# Wealthier API

 REST API for Wealthier. 

## Table of Contents

* [Scripts](#scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
* [Environment Variables](#environment-variables)
* [Endpoints](#endpoints)
  - [/api](#/api)
  - [/user](#/user)
* [Technologies](#technologies)
* [License](#license)

## Scripts

### npm start

Starts the web server. Hot reloading is enabled via [nodemon](https://github.com/remy/nodemon).

### npm test

Runs unit tests using [Jest](https://github.com/facebook/jest).

## Environment Variables

* ```NODE_ENV``` {_string_} 'development' | 'production'
* ```PORT``` {_number_} port to publish server on
## Endpoints

### /api

/api - Simply checks that the server is up and running

### /user

/user/all - gets all users

/user?id=<user_id> - gets a single user

## Technologies

Bootstrapped with [express-generator](https://github.com/expressjs/express). 

Data persistence is implemented using AWS DynamoDB.

Other technologies:
* [Express Session](https://github.com/expressjs/express)
* [Jest](https://github.com/facebook/jest)
* [Lodash](https://github.com/lodash/lodash)
* [Math.js](https://github.com/josdejong/mathjs)
* [js-joda](https://github.com/js-joda/js-joda)
* [nodemon](https://github.com/remy/nodemon)

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (GNU GPLv3).