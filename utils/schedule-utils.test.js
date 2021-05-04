// ./utils/schedule-utils.test.js

const _ = require('lodash');
const schedule = require('./schedule-utils');
const LocalDate = require('@js-joda/core').LocalDate;

test('schedule.build', () => {
  const startDate = LocalDate.of(1970, 1, 1);

  const debts = [
    createDebt('456', '456', 2000, 'debt 1', 1),
    createDebt('123', '123', 2000, 'debt 0', 0),
    createDebt('789', '789', 2000, 'debt 2', 2),
  ];

  const payments = [
    createPayment('123', '123', 500),
    createPayment('456', '456', 500),
  ];

  const actual = schedule.build(startDate, debts, payments);

  const expected = [
    createScheduleData(0, 'debt 0', startDate, '2000.00', '1000.00', '1000.00'),
    createScheduleData(
      1,
      'debt 0',
      startDate.plusDays(14 * 1),
      '1000.00',
      '1000.00',
      '0.00'
    ),
    createScheduleData(
      2,
      'debt 1',
      startDate.plusDays(14 * 2),
      '2000.00',
      '1000.00',
      '1000.00'
    ),
    createScheduleData(
      3,
      'debt 1',
      startDate.plusDays(14 * 3),
      '1000.00',
      '1000.00',
      '0.00'
    ),
    createScheduleData(
      4,
      'debt 2',
      startDate.plusDays(14 * 4),
      '2000.00',
      '1000.00',
      '1000.00'
    ),
    createScheduleData(
      5,
      'debt 2',
      startDate.plusDays(14 * 5),
      '1000.00',
      '1000.00',
      '0.00'
    ),
  ];

  _.sortBy(actual, (actualData) => actualData.rank);
  _.sortBy(expected, (expectedData) => expectedData.rank);

  expect(actual).toStrictEqual(expected);
});

test('schedule.buildForDebt', () => {
  const debt = createDebt('123', '123', 1000, 'debt 0', 0);
  const startDate = LocalDate.of(1970, 1, 1);
  const paymentAmount = 250.0;

  const actual = schedule.buildForDebt(debt, 0, startDate, paymentAmount);

  const expected = [
    createScheduleData(0, 'debt 0', startDate, '1000.00', '250.00', '750.00'),
    createScheduleData(
      1,
      'debt 0',
      startDate.plusDays(14 * 1),
      '750.00',
      '250.00',
      '500.00'
    ),
    createScheduleData(
      2,
      'debt 0',
      startDate.plusDays(14 * 2),
      '500.00',
      '250.00',
      '250.00'
    ),
    createScheduleData(
      3,
      'debt 0',
      startDate.plusDays(14 * 3),
      '250.00',
      '250.00',
      '0.00'
    ),
  ];

  _.sortBy(actual, (actualData) => actualData.rank);
  _.sortBy(expected, (expectedData) => expectedData.rank);

  expect(actual).toStrictEqual(expected);
});

function createDebt(id, user, value, name, rank) {
  return {
    _id: id,
    user: user,
    value: value,
    name: name,
    rank: rank,
  };
}

function createPayment(id, user, value) {
  return {
    _id: id,
    user: user,
    value: value,
  };
}

function createScheduleData(
  rank,
  name,
  date,
  previousBalance,
  amount,
  nextBalance
) {
  return {
    rank: rank,
    name: name,
    date: date,
    previousBalance: previousBalance,
    paymentAmount: amount,
    nextBalance: nextBalance,
  };
}
