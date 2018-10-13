
'use strict';
let start = document.getElementById('start'),
  daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  expensesItem = document.getElementsByClassName('expenses-item'),
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
  budgetValue = document.querySelector('.budget-value'),
  dayValue = document.querySelector('.day-value');

console.log(optionalexpensesItem);
console.log(month);
console.log(savings);

let money, time;

start.addEventListener('click', function(){
  time = prompt('Введите дату в формате YYYY-MM-DD ', '');
  money = +prompt('Ваш бюджет на месяц', '');
  //isNaN(money) возращайт true когда попадйть не числа
  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц', '');
  }
  appData.budjet = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  //1970год
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() +1;
  dayValue.value = new Date(Date.parse(time)).getDay();

});
expensesItemBtn.addEventListener('click', function(){
  let sum =0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
      b = expensesItem[++i].value;
    console.log(((isNaN(b))) + ' tet');
    if ((typeof (a)) === "string" && isNaN(b) === false && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      // +b число
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

lexpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let opt = optionalexpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    console.log(optionalexpensesValue);
  }
});


let appData = {
  expenses: {},
  optionalExpenses: {},
  icnome: null,
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Статья обязательных расходов", ""),
        b = +prompt("Во сколько это обойдется? ", "");
      console.log(((isNaN(b))) + ' tet');
      if ((typeof (a)) === "string" && isNaN(b) === false && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.budjet = money;
    appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
    //toFixed(1); Округление значения после запятой на 1 знак и retun строку
    alert(" бюджет на день " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
    console.log(appData.moneyPerDay);
  },
  
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений", ""),
        percent = +prompt("Под какой процент?", "");
      if (isNaN(save) === false && isNaN(percent) === false && (save != null) && (percent != null) && save != "" && percent != "") {
        console.log("доход в месяц с вашего депозита");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("доход в месяц с вашего депозита: " + appData.monthIncome);
      }
    }
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    if ((typeof (items)) === "string" && (items != null && items != "")) {
      appData.icnome = items.split(', ');
      appData.icnome.push(prompt('Может что-то еще?'));
      appData.icnome.sort();
    } else {
      appData.chooseIncome();
    }
    appData.icnome.forEach(function (i) {
      console.log('Способы доп. заработка: ' + i);
    });
  },
};


function appDataKey(appData) {
  for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
    //получайм ключи мисива
  }
};

console.log(appData);

