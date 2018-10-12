let start = document.getElementById('start'),
  daybudgetValue = document.getElementsByClassName('daybudget-value'),
  levelValue = document.getElementsByClassName('level-value'),
  expensesValue = document.getElementsByClassName('expenses-value'),
  optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
  incomeValue = document.getElementsByClassName('income-value'),
  monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
  yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
  expensesItem = document.getElementsByClassName('expenses-item'),
  taG = document.getElementsByTagName('button'),
  lexpensesBtn = taG[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  optionalexpensesItem = document.querySelectorAll('optionalexpenses-item'),
  savings = document.querySelector('.savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  cmonth = document.querySelector('.month'),
  dayValue = document.querySelector('.day-value');

console.log(lexpensesBtn);
console.log(start);