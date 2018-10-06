'use strict';
let money = +prompt('Ваш бюджет на месяц', " "),
    time = prompt('Введите дату в формате YYYY-MM-DD ', " ");
    
    

console.log(money);
console.log(time);
let appData = {
    expenses : {},
    optionalExpenses: null,
    icnome : null,
    savings : false

};


appData.expenses["Money"]= money;
appData.moneY = money;
appData.timeData = time;
console.log(appData);

let ans1 = prompt("Статья обязательных расходов", ""),
    ans2 = +prompt("Во сколько это обойдется? ", ""),
    ans3 = prompt("Статья обязательных расходов", ""),
    ans4 = +prompt("Во сколько это обойдется? ", "");
appData.expenses[ans1] = ans2;
appData.expenses[ans3] = ans4;
console.log(appData);
let mone1 = money/30;
console.log(mone1);
prompt("бюджет на 1 день ", mone1);