// ./utils/schedule-utils.js

const _ = require('lodash');
const { round } = require('mathjs');

exports.build = (startDate, debts, payments) => {
  debts = _.sortBy(debts, (debt) => debt.rank);

  const sumPayments = _.map(payments, (payment) => payment.value).reduce(
    (a, b) => a + b,
    0
  ); // TODO break up payments by user

  const paymentSchedule = [];

  let date = startDate;
  let rank = 0;
  for (let i = 0; i < debts.length; i++) {
    const debtSpecificSchedule = this.buildForDebt(
      debts[i],
      rank,
      date,
      sumPayments
    );

    _.each(debtSpecificSchedule, (scheduleItem) =>
      paymentSchedule.push(scheduleItem)
    );

    rank += debtSpecificSchedule.length;
    date = date.plusDays(14 * debtSpecificSchedule.length);
  }

  return paymentSchedule;
};

exports.buildForDebt = (debt, startRank, startDate, paymentAmount) => {
  const schedule = [];

  const numberOfPayments = Math.ceil(debt.value / paymentAmount);

  let previousBalance = debt.value;
  let previousDate = startDate;

  for (let i = 0; i < numberOfPayments; i++) {
    let nextDate;
    if (i == 0) nextDate = startDate;
    else nextDate = previousDate.plusDays(14);

    let nextBalance = previousBalance - paymentAmount;
    nextBalance = nextBalance < 0 ? 0 : nextBalance; // if nextBalance is negative, round it to zero.

    schedule.push({
      rank: startRank++,
      name: debt.name,
      date: nextDate,
      previousBalance: round(previousBalance, 2).toFixed(2),
      paymentAmount: round(paymentAmount, 2).toFixed(2),
      nextBalance: round(nextBalance, 2).toFixed(2),
    });

    previousDate = nextDate;
    previousBalance = nextBalance;
  }

  return schedule;
};
