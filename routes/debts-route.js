// ./routes/debts-route.js

const express = require('express');
const { mapUserIdToUserFirstName } = require('../utils/user-utils');

const router = express.Router();

router.get('/', async (req, res) => {
  const debtId = req.query.id;
  // const users = await userDao.getAll();
  // debtDao.get(debtId)
  //     .then(doc => mapUserIdToUserFirstName(doc, users))
  //     .then(debt => res.json(debt))
  //     .catch(error => console.error(error));
});

router.get('/all', async (req, res) => {
  // const users = await userDao.getAll();
  // debtDao.getAll()
  //     .then(docs => mapUserIdToUserFirstName(docs, users))
  //     .then(debts => res.json(debts))
  //     .catch(error => console.error(error));
});

module.exports = router;
