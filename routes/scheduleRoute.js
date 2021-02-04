const express = require('express');
const debtDao = require('../database/debtDao');
const { build } = require('./schedule');
const LocalDate = require("@js-joda/core").LocalDate;

const router = express.Router();

router.get('/', async (req, res) => {
    const startDate = LocalDate.now();
    const debts = await debtDao.getAll();

    // TODO get a "CC Payment" expense category going
    const payments = [{ value: 500 }, { value: 200 }];
    const schedule = build(startDate, debts, payments);
    res.json(schedule);
});

module.exports = router;