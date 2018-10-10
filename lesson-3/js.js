'use strict';
let money, time;
function start(){
    money = +prompt('Ваш бюджет на месяц', " ");
    time = prompt('Введите дату в формате YYYY-MM-DD ', " ");
    //isNaN(money) возращайт true когда попадйть не числа
    while(isNaN(money) || money =='' ||money ==null){
        money = +prompt('Ваш бюджет на месяц', " ");
    }
}
start();


let appData = {
 expenses: {},
 optionalExpenses: null,
 icnome: null,
 savings: true

};

function chooseExpenses() {
    for (let i = 0; i <2; i++) {
        let a = prompt("Статья обязательных расходов", ""),
            b = +prompt("Во сколько это обойдется? ", "");
        console.log(((isNaN(b))) +' tet');
        if ((typeof (a)) === "string" && isNaN(b) ===false && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
    
}
chooseExpenses();
function detectDayBudget() {
    appData.budjet = money;
    appData.moneyPerDay = (appData.budjet/ 30).toFixed(1);
    //toFixed(1); Округление значения после запятой на 1 знак и retun строку
    alert(" бюджет на день " +appData.moneyPerDay);
    
}
function detectLevel() {
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
}
function chooseOptExpenses() {
    appData.optionalExpenses = {};
    for (let i = 0; i <3; i++) {
        let a = prompt("Статья необязательных расходов?", ""),
        b = +prompt("Во сколько это обойдется? ", "");
        if ((typeof (a)) === "string" && isNaN(b) === false && (a != null) && (b !=null) && a != "" && b !="" && a.length<50 ) {
            console.log("Статья необязательных расходов?");
            appData.optionalExpenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseOptExpenses();
detectDayBudget();
function checkSavings() {
    for (let i = 0; i < 1; i++) {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений", ""),
                percent = +prompt("Под какой процент?", "");
            if (isNaN(save) === false && isNaN(percent) === false && (save != null) && (percent != null) && save != "" && percent != "") {
                console.log("доход в месяц с вашего депозита");
                appData.monthIncome = save / 100 / 12 * percent;
                alert("доход в месяц с вашего депозита: " + appData.monthIncome);
            } else {
                i--;
            }
        }
    }
}
checkSavings();
console.log(appData);