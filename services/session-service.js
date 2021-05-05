const session = require('express-session');
const { v4: uuidv4 } = require('uuid');

exports.newSession = () => {
  return session({
    secret: uuidv4(),
    name: 'wealthier',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 900000, // 15 minutes
    },
  });
};
