// ./routes/api-route.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Wealther API is available');
});

module.exports = router;
