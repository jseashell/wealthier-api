const express = require('express');
const expenseDao = require('../database/expenseDao');
const userDao = require('../database/userDao');
const { mapUserIdToUserFirstName } = require('../database/userUtils');

const router = express.Router();

router.get('/', async (req, res) => {
    const expenseId = req.query.id;
    const users = await userDao.getAll();
    expenseDao.get(expenseId)
        .then(doc => mapUserIdToUserFirstName(doc, users))
        .then(expense => res.json(expense))
        .catch(error => console.error(error));
});

router.get('/all', async (req, res) => {
    const users = await userDao.getAll();
    expenseDao.getAll()
        .then(docs => mapUserIdToUserFirstName(docs, users))
        .then(expenses => res.json(expenses))
        .catch(error => console.error(error));
});

module.exports = router;