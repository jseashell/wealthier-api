const express = require('express');
const debtDao = require('../database/debtDao');
const userDao = require('../database/userDao');
const { mapUserIdToUserFirstName } = require('../database/userUtils');

const router = express.Router();

router.get('/', async (req, res) => {
    const debtId = req.query.id;
    const users = await userDao.getAll();
    debtDao.get(debtId)
        .then(doc => mapUserIdToUserFirstName(doc, users))
        .then(debt => res.json(debt))
        .catch(error => console.error(error));
});

router.get('/all', async (req, res) => {
    const users = await userDao.getAll();
    debtDao.getAll()
        .then(docs => mapUserIdToUserFirstName(docs, users))
        .then(debts => res.json(debts))
        .catch(error => console.error(error));
});

module.exports = router;