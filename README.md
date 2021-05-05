# Wealthier API

 REST API for Wealthier. 

## Table of Contents

* [Scripts](#scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
* [Endpoints](#endpoints)
  - [/debt](#/debt)
  - [/income](#/income)
  - [/expense](#/expense)
  - [/payment](#/payment)
  - [/schedule](#/debt)
  - [/user](#/user)
* [Technologies](#technologies)
* [License](#license)

## Scripts

### npm start

Starts the web server. Hot reloading is enabled via [nodemon](https://github.com/remy/nodemon).

### npm test

Runs unit tests using [Jest](https://github.com/facebook/jest).

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
* [Jest](https://github.com/facebook/jest)
* [Lodash](https://github.com/lodash/lodash)
* [Math.js](https://github.com/josdejong/mathjs)
* [js-joda](https://github.com/js-joda/js-joda)
* [nodemon](https://github.com/remy/nodemon)

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (GNU GPLv3).