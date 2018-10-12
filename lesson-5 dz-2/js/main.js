let start = document.getElementById('start'),
  daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  expensesItem = document.getElementsByClassName('expenses-item')[0],
  taG = document.getElementsByTagName('button'),
  lexpensesBtn = taG[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  expensesItemBtn = document.getElementsByTagName('button')[0],
  optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  savings = document.querySelector('#savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  chooseIncome = document.querySelector('.choose-income'),
  dayValue = document.querySelector('.day-value');

console.log(optionalexpensesItem);
console.log(month);
console.log(savings);