const session = require('express-session');

exports.newSession = () => {
  return session({
    secret: 'todo', // TODO generate UUID
    name: 'wealthier',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 900000, // 15 minutes
    },
  });
};
