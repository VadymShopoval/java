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
        appData.moneyPerDay = (appData.budjet/ 30).toFixed(1);
        //toFixed(1); Округление значения после запятой на 1 знак и retun строку
        alert(" бюджет на день " +appData.moneyPerDay);
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
    chooseOptExpenses: function () {
        appData.optionalExpenses = {};
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", ""),
                b = +prompt("Во сколько это обойдется? ", "");
            if ((typeof (a)) === "string" && isNaN(b) === false && (a != null) && (b != null) && a != "" && b != "" && a.length < 50) {
                console.log("Статья необязательных расходов?");
                appData.optionalExpenses[a] = b;
            } else {
                i--;
            }
        }
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
        if ((typeof (items)) === "string" && (items != null && items != "")){
            appData.icnome = items.split(', ');
            appData.icnome.push(prompt('Может что-то еще?'));
            appData.icnome.sort();  
        } else {
            appData.chooseIncome();
        }
        appData.icnome.forEach(function (i) {
            console.log('Способы доп. заработка: ' +i  );
        });
    },
    appDataKey: function() {
    	for (let key in appData) {
    	    console.log('Наша программа включает в себя данные: ' +key);
    	    //получайм ключи мисива
    	}
    }
};
appData.chooseIncome();


console.log(appData);

