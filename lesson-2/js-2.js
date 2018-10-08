let week = ["понедельник", 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
console.log(week[0])
for (let i = 1, wek = 0; i < 8; i++) {

 console.log(i);
 if (wek == 0) {
  document.write(week[wek].italics() + "</br>");
  console.log("b");
 } else if (wek < 5) {
  document.write(week[wek] + "</br>");
  console.log("bold");
 } else {
  if (wek > 4) {
   console.log("italics");
   document.write(week[wek].bold(), "</br>");
  }
 }
 wek++;
};

let arr = [4566, 56537, 14846, 75464, 35456, 7547, 3];
for (let a = 0; a < 7; a++) {
 number = arr[a];
 console.log(number);
 if () {};

};