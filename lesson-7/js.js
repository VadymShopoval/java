function time(){
  let date = new Date(),
    h = ('0' + date.getHours()).slice(-2),
    s = ('0' + date.getSeconds()).slice(-2),
    m = ('0' + date.getMinutes()).slice(-2);
  //let a = ('0' + s).slice(-2);
  //console.log(h + ':' + m + ':' + s);
  document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
  
};
setInterval('time()', 1000);

/* function twoDigits(num) {
  return ('0' + num).slice(-2);
}
console.log(('0' + num).slice(-2); */