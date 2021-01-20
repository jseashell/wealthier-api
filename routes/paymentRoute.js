const express = require('express');
const paymentDao = require('../database/paymentDao');
const userDao = require('../database/userDao');
const { mapUserIdToUserFirstName } = require('../database/userUtils');

const router = express.Router();

router.get('/', async (req, res) => {
    const paymentId = req.query.id;
    const users = await userDao.getAll();
    paymentDao.get(paymentId)
        .then(doc => mapUserIdToUserFirstName(doc, users))
        .then(payment => res.json(payment))
        .catch(error => console.error(error));
});

router.get('/all', async (req, res) => {
    const users = await userDao.getAll();
    paymentDao.getAll()
        .then(docs => mapUserIdToUserFirstName(docs, users))
        .then(payments => res.json(payments))
        .catch(error => console.error(error));
});

module.exports = router;