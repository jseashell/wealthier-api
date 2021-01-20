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

### /debt

/debt/all - gets all rows from the Debt table

/debt?id=<debt_id> - gets a single row from the Debt table by the row's primary key

### /income

/income/all - gets all rows from the Income table

/income?id=<debt_id> - gets a single row from the Income table by the row's primary key

### /expense

/expense/all - gets all rows from the Expense table

/expense?id=<debt_id> - gets a single row from the Expense table by the row's primary key

### /payment

/payment/all - gets all rows from the Payment table

/payment?id=<debt_id> - gets a single row from the Payment table by the row's primary key

### /schedule

/schedule - gets a debt payment schedule based on bi-weekly income, debt, expenses, and debt payments.

### /user

/user/all - gets all rows from the User table

/user?id=<debt_id> - gets a single row from the User table by the row's primary key

## Technologies

Bootstrapped with [express-generator](https://github.com/expressjs/express). 

Data persistence implemented using MongoDB

Other technologies:
* [Jest](https://github.com/facebook/jest)
* [Lodash](https://github.com/lodash/lodash)
* [Math.js](https://github.com/josdejong/mathjs)
* [js-joda](https://github.com/js-joda/js-joda)
* [nodemon](https://github.com/remy/nodemon)

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (GNU GPLv3).