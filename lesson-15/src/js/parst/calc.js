function calc() {
  // Calc
  let persons =  document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

      totalValue.innerHTML = 0;
      persons.addEventListener('input', () => {

        persons.value = persons.value.replace(/[^0-9]/ig, '');
      });
      restDays.addEventListener('input', () => {

        restDays.value = restDays.value.replace(/[^0-9]/ig, '');
      });
      let v = 1;
      function perDaus(persons, restDays) {
        personsSum = +persons.value.replace(/[^0-9\.]/g, '');;
        total = (daysSum + personsSum)* 4000;
        if (persons.value == '' || persons.value == 0) {
          totalValue.innerHTML = 0;
        } else if (restDays.value == '' || restDays.value == 0 ){
           totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total*v;
          console.log(v);
        }
      }
      persons.addEventListener('change', function (){
        perDaus(persons, restDays);
        /* personsSum = +this.value.replace(/[^0-9\.]/g, '');;
        total = (daysSum + personsSum)* 4000;
        if (persons.value == '' || persons.value == 0) {
          totalValue.innerHTML = 0;
        } else if (restDays.value == '' || restDays.value == 0 ){
           totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total*v;
          console.log(v);
        } */
      });
      restDays.addEventListener('change', function () {
        perDaus(restDays, persons);
        /* daysSum = +this.value.replace(/[^0-9\.]/g, '');
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == ''|| restDays.value == 0) {
          totalValue.innerHTML = 0;
        } else if (persons.value == '' || persons.value == 0) {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total*v;
          console.log(v);
          
        } */
      });
      place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
          v = this.options[this.selectedIndex].value;

        } else {
          let a = total;
          
          v = this.options[this.selectedIndex].value;
          totalValue.innerHTML = a * v;
        }
      });
}
module.exports = calc;