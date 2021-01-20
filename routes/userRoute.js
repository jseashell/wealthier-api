const express = require('express');
const userDao = require('../database/userDao');

const router = express.Router();

router.get('/', async (req, res) => {
    const userId = req.query.id;
    userDao.get(userId)
        .then(user => res.json(user))
        .catch(error => console.error(error));
});

router.get('/all', async (req, res) => {
    userDao.getAll()
        .then(users => res.json(users))
        .catch(error => console.error(error));
});

module.exports = router;