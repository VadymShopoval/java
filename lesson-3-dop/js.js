let s = "урок - 3 - был слишком легким";
console.log(s.length);
console.log(ucFirst(s));
function ucFirst(str) {
 // только пустая строка в логическом контексте даст false
 if (!str) return str;

 return str[0].toUpperCase() + str.slice(1);
}
//2
console.log(s.replace(/- /g, ' '));
//3
let ss = "урок - 3 - был слишком легким";
console.log(s);
for (let a = 0; a < 7; a++) {
 console.log(ss[a]);
 console.log(2);
}