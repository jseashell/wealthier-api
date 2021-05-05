// ./routes/user-route.js

const express = require('express');
const { getItem, scan } = require('../services/aws-service');

const router = express.Router();

router.get('/', async (req, res) => {
  const userId = req.query.id;
  getItem(userId)
    .then((user) => res.json(user))
    .catch((error) => console.error(error));
});

router.get('/all', async (req, res) => {
  scan()
    .then((users) => res.json(users))
    .catch((error) => console.error(error));
});

module.exports = router;
