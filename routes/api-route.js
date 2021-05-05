// ./routes/api-route.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.session);
  if (req.session.pageViews) {
    req.session.pageViews++;
  } else {
    req.session.pageViews = 1;
  }

  res.send(
    'Wealther API is available. Thanks for visiting for the ' +
      req.session.pageViews +
      ' time!'
  );
});

module.exports = router;
