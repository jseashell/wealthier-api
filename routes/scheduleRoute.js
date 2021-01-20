const express = require('express');
const debtDao = require('../database/debtDao');
const paymentDao = require('../database/paymentDao');
const { build } = require('./schedule');
const LocalDate = require("@js-joda/core").LocalDate;

const router = express.Router();

router.get('/', async (req, res) => {
    const startDate = LocalDate.now();
    const debts = await debtDao.getAll();
    const payments = await paymentDao.getAll();
    const schedule = build(startDate, debts, payments);
    res.json(schedule);
});

module.exports = router;