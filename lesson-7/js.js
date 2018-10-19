let date = new Date(),
    h = date.getHours(),
    s = date.getSeconds(),
    m = date.getMinutes();

let a = '0' + s.slice(-2);

console.log(h + ':'+ m +':'+ s);
/* function twoDigits(num) {
  return ('0' + num).slice(-2);
}
console.log(('0' + num).slice(-2); */