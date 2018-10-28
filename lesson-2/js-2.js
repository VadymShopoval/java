let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
];

let date = new Date(),
  nowDay = date.getDay() - 1;
if (nowDay = (-1)) {
  nowDay = 6
}

week.forEach(function (item, index) {

  if (index == nowDay && (index == 5 || index == 6)) {
    document.write("<p>" + "<b>" + "<i>" + item + "</i>" + "</b>" + "</p>")
  } else if (index == nowDay) {
    document.write("<p>" + "<i>" + item + "</i>" + "</p>")
  } else if (index == 5 || index == 6) {
    document.write("<p>" + "<strong>" + item + "</strong>" + "</p>");
  } else {
    document.write("<p>" + item + "</p>")
  }

  console.log(nowDay);

});

let a = [
  "294844390",
  "395845",
  "1057584",
  "730303",
  "5850696",
  "3058565856",
  "70423345632"
];

for (let i = 0; i < a.length; i++) {
  if (a[i][0] == "3" || a[i][0] == "7") {
    console.log(r[i]);
  }
}