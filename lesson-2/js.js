'use strict';
let money = +prompt('Ваш бюджет на месяц', " "),
    time = prompt('Введите дату в формате YYYY-MM-DD ', " ");

let appData = {
 expenses: {},
 optionalExpenses: null,
 icnome: null,
 savings: false

};
// console.log(appData);
// for (let i = 0; i <2; i++) {
//  let a = prompt("Статья обязательных расходов", ""),
//      b = +prompt("Во сколько это обойдется? ", "");
//  if ( (typeof(a))==="string" && (a != null) && (b !=null) && a != "" && b !="" && a.length<50 ) {
  
//   console.log("done");
//   appData.expenses[a] = b;
  
//  } else {
//   i = -1;
//  }
     
// };

// let i = 0;
// while ( i < 2 ) {
//     i++;
//     let a = prompt("Статья обязательных расходов", ""),
//         b = +prompt("Во сколько это обойдется? ", "");
//     if ( (typeof(a))==="string" && (typeof(a)) != null && (typeof(b)) !=null && a != "" && b !="" && a.length<50 ) {
//        console.log("done-2");
//        appData.expenses[a] = b;
//     } else {
//         i =-1;
//     }
// };
let i = 0;
do {
    
    
    i++;
    let a = prompt("Статья обязательных расходов", ""),
        b = +prompt("Во сколько это обойдется? ", "");
    if ( (typeof(a))==="string" && (a) != null && b !=null && a != "" && b !="" && a.length<50 ) {
        console.log("done-2");
        appData.expenses[a] = b;
    } else {
        i--;
    } 
}
while (i < 2);
  
  
 
appData.budjet = money;
appData.moneyPerDay = appData.budjet/ 30;
alert(" бюджет на день " +appData.moneyPerDay);
console.log(appData);