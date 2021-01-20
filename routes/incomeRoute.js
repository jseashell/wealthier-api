const express = require('express');
const incomeDao = require('../database/incomeDao');
const userDao = require('../database/userDao');
const { mapUserIdToUserFirstName } = require('../database/userUtils');

const router = express.Router();

router.get('/', async (req, res) => {
    const incomeId = req.query.id;
    const users = await userDao.getAll();
    incomeDao.get(incomeId)
        .then(doc => mapUserIdToUserFirstName(doc, users))
        .then(income => res.json(income))
        .catch(error => console.error(error));
});

router.get('/all', async (req, res) => {
    const users = await userDao.getAll();
    incomeDao.getAll()
        .then(docs => mapUserIdToUserFirstName(docs, users))
        .then(incomes => res.json(incomes))
        .catch(error => console.error(error));
});

module.exports = router;