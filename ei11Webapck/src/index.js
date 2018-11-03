//window.addEventListener('load')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let form  = require("./parst/form.js"),
    slider = require("./parst/slider.js"),
    tabs   = require("./parst/tabs.js"),
    timer  = require("./parst/timer.js"),
    calc   = require("./parst/calc.js");
    //modal  = require("./parst/modal.js");
 
 
  form();
  
  slider();
  tabs();
  timer();
  calc(); 
  //modal();
 
});