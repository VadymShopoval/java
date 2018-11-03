/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//window.addEventListener('load')\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n  'use strict';\r\n  let form  = __webpack_require__(/*! ./parst/form.js */ \"./src/parst/form.js\"),\r\n    slider = __webpack_require__(/*! ./parst/slider.js */ \"./src/parst/slider.js\"),\r\n    tabs   = __webpack_require__(/*! ./parst/tabs.js */ \"./src/parst/tabs.js\"),\r\n    timer  = __webpack_require__(/*! ./parst/timer.js */ \"./src/parst/timer.js\"),\r\n    calc   = __webpack_require__(/*! ./parst/calc.js */ \"./src/parst/calc.js\");\r\n    //modal  = require(\"./parst/modal.js\");\r\n \r\n \r\n  form();\r\n  \r\n  slider();\r\n  tabs();\r\n  timer();\r\n  calc(); \r\n  //modal();\r\n \r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parst/calc.js":
/*!***************************!*\
  !*** ./src/parst/calc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\r\n  // Calc\r\n  let persons =  document.querySelectorAll('.counter-block-input')[0],\r\n      restDays = document.querySelectorAll('.counter-block-input')[1],\r\n      place = document.getElementById('select'),\r\n      totalValue = document.getElementById('total'),\r\n      personsSum = 0,\r\n      daysSum = 0,\r\n      total = 0;\r\n\r\n  totalValue.innerHTML = 0;\r\n  persons.addEventListener('input', () => {\r\n\r\n    persons.value = persons.value.replace(/[^0-9]/ig, '');\r\n  });\r\n  restDays.addEventListener('input', () => {\r\n\r\n    restDays.value = restDays.value.replace(/[^0-9]/ig, '');\r\n  });\r\n  let v = 1;\r\n  function perDaus(persons, restDays) {\r\n    personsSum = +persons.value.replace(/[^0-9]/g, '');\r\n    total = (daysSum + personsSum)* 4000;\r\n    if (persons.value == '' || persons.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else if (restDays.value == '' || restDays.value == 0 ){\r\n        totalValue.innerHTML = 0;\r\n    } else {\r\n      totalValue.innerHTML = total*v;\r\n      \r\n    }\r\n  }\r\n  persons.addEventListener('change', function (){\r\n    perDaus(persons, restDays);\r\n    /* personsSum = +this.value.replace(/[^0-9\\.]/g, '');;\r\n    total = (daysSum + personsSum)* 4000;\r\n    if (persons.value == '' || persons.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else if (restDays.value == '' || restDays.value == 0 ){\r\n        totalValue.innerHTML = 0;\r\n    } else {\r\n      totalValue.innerHTML = total*v;\r\n      console.log(v);\r\n    } */\r\n  });\r\n  restDays.addEventListener('change', function () {\r\n    perDaus(restDays, persons);\r\n    /* daysSum = +this.value.replace(/[^0-9\\.]/g, '');\r\n    total = (daysSum + personsSum) * 4000;\r\n    if (restDays.value == ''|| restDays.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else if (persons.value == '' || persons.value == 0) {\r\n      totalValue.innerHTML = 0;\r\n    } else {\r\n      totalValue.innerHTML = total*v;\r\n      console.log(v);\r\n      \r\n    } */\r\n  });\r\n  place.addEventListener('change', function () {\r\n    if (restDays.value == '' || persons.value == '') {\r\n      totalValue.innerHTML = 0;\r\n      v = this.options[this.selectedIndex].value;\r\n\r\n    } else {\r\n      let a = total;\r\n      \r\n      v = this.options[this.selectedIndex].value;\r\n      totalValue.innerHTML = a * v;\r\n    }\r\n  });\r\n}\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/parst/calc.js?");

/***/ }),

/***/ "./src/parst/form.js":
/*!***************************!*\
  !*** ./src/parst/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\r\n  //tabs\r\n   let more = document.querySelector('.more'),\r\n     overlay = document.querySelector('.overlay');\r\n\r\n\r\n   let body = document.querySelector('body'),\r\n        mor = document.querySelector('.more');\r\n\r\n   body.addEventListener('click', function (e) {\r\n     let target = e.target;\r\n     if (target.classList == 'description-btn') {\r\n       \r\n       overlay.style.display = 'block';\r\n       this.classList.add('more-splash');\r\n       document.body.style.overflow = 'hidden';\r\n     }\r\n     if (target.classList.contains('more')) {\r\n       \r\n       overlay.style.display = 'block';\r\n       this.classList.add('more-splash');\r\n       document.body.style.overflow = 'hidden';\r\n     }\r\n     if (target.classList.contains('popup-close')) {\r\n       overlay.style.display = 'none';\r\n       more.classList.remove('more-splash');\r\n       document.body.style.overflow = '';\r\n       //statusMessage.remove();\r\n       clearInput();\r\n       \r\n\r\n     }\r\n   });\r\n  // Form\r\n  let message = {\r\n    loading: 'Загрузка...',\r\n    success: 'Спасибо! Скроро мы с вами  свяжемся!',\r\n    failure: 'Что-то пошло не так ...'\r\n  };\r\n  let form = document.querySelector('.main-form'),\r\n    input = form.getElementsByTagName('input'),\r\n    \r\n    ind = document.getElementById('in'),\r\n    form1 = document.getElementById('form'),\r\n    inputForm1 = form1.getElementsByTagName('input');\r\n\r\n  var statusMessage = document.createElement('div');\r\n\r\n\r\n\r\n  statusMessage.classList.add('status');\r\n  input[0].addEventListener('input', () => {\r\n    input[0].value = input[0].value.replace(/[^0-9+()]/ig, '');\r\n\r\n  });\r\n  ind.addEventListener('input', () => {\r\n\r\n    ind.value = ind.value.replace(/[^0-9+()]/ig, '');\r\n  });\r\n  //PHP\r\n  form.addEventListener('submit', function (event) {\r\n\r\n    event.preventDefault();\r\n    //name key\r\n    form.appendChild(statusMessage);\r\n\r\n    let request = new XMLHttpRequest();\r\n    \r\n    request.open('POST', 'server.php');\r\n    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n    \r\n    let formData = new FormData(form);\r\n    request.send(formData);\r\n    request.addEventListener('readystatechange', function () {\r\n      if (request.readyState < 4) {\r\n        statusMessage.innerHTML = message.loading;\r\n      } else if (request.readyState === 4 && request.status == 200) {\r\n        statusMessage.innerHTML = message.success;\r\n      } else {\r\n        statusMessage.innerHTML = message.failure;\r\n      }\r\n    });\r\n\r\n    /* for (let i = 0; i <input.length; i++) {\r\n      input[i].value = '';\r\n    } */\r\n  });\r\n  function clearInput() {\r\n    for (let i = 0; i < input.length; i++) {\r\n      input[i].value = '';\r\n\r\n    }\r\n    statusMessage.innerHTML = ' ';\r\n\r\n\r\n  }\r\n  \r\n  //JSON form1\r\n    function sendForm(elem) {\r\n    elem.addEventListener('submit', function (event) {\r\n      event.preventDefault();\r\n          //name ключ\r\n          elem.appendChild(statusMessage);\r\n          let form1Data = new FormData(elem);\r\n\r\n          function postData(data) {\r\n            return new Promise(function (resolve, reject) {\r\n              let request = new XMLHttpRequest();\r\n              request.open('POST', 'server.php');\r\n              request.setRequestHeader('Content-Type', 'applicatiom/json; charset=utf-8');\r\n              request.onreadystatechange = function () {\r\n                if (request.readyState < 4) {\r\n                  resolve()\r\n                } else if (request.readyState === 4) {\r\n                  if (request.status == 200 && request.status < 3) {\r\n                    resolve()\r\n                  } else {\r\n                    reject()\r\n                  }\r\n                }\r\n              }\r\n              request.send(data);\r\n            });\r\n            }\r\n          //end postData\r\n          function clearТ() {\r\n            for (let i = 0; i < inputForm1.length; i++) {\r\n              inputForm1[i].value = '';\r\n\r\n            }\r\n            \r\n\r\n          }\r\n        \r\n          postData(form1Data)\r\n            .then(() => statusMessage.innerHTML = message.loading )\r\n            .then(() => statusMessage.innerHTML = message.success)\r\n            .catch(() => statusMessage.innerHTML = message.failure)\r\n            .then(clearТ)\r\n          \r\n      \r\n          \r\n\r\n    });\r\n  }\r\n  sendForm(form1);\r\n}\r\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/parst/form.js?");

/***/ }),

/***/ "./src/parst/slider.js":
/*!*****************************!*\
  !*** ./src/parst/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\r\n   //slider\r\n  let slideIndex =1,\r\n      slides = document.querySelectorAll('.slider-item'),\r\n      prev = document.querySelector('.prev'),\r\n      next = document.querySelector('.next'),\r\n      dotsWrap = document.querySelector('.slider-dots'),\r\n      dots = document.querySelectorAll('.dot');\r\n  showSlides(slideIndex);\r\n  function showSlides(n) {\r\n    if (n> slides.length) {\r\n      slideIndex = 1;\r\n    }\r\n    if (n < 1) {\r\n      slideIndex = slides.length;\r\n    }\r\n    //es6\r\n    slides.forEach((item)=> item.style.display ='none');\r\n    /* for (let i = 0; i< slides.length; i++ ){\r\n      slides[i].style.display = 'none'\r\n    } */\r\n    dots.forEach((item) => item.classList.remove('dot-active'));\r\n    slides[slideIndex - 1].style.display = 'block';\r\n    dots[slideIndex - 1].classList.add('dot-active');\r\n  }\r\n  function plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n  }\r\n  function currentSlide(n) {\r\n    showSlides(slideIndex =n);\r\n  }\r\n  prev.addEventListener('click', function () {\r\n    plusSlides(-1);\r\n  });\r\n  next.addEventListener('click', function () {\r\n    plusSlides(1);\r\n  });\r\n  dotsWrap.addEventListener('click', function (event) {\r\n    for(let i = 0; i < dots.length + 1; i++) {\r\n      if(event.target.classList.contains('dot') && event.target == dots[i-1]) {\r\n        currentSlide(i);\r\n      }\r\n    }\r\n  });\r\n}\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/parst/slider.js?");

/***/ }),

/***/ "./src/parst/tabs.js":
/*!***************************!*\
  !*** ./src/parst/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\r\n  let tab = document.querySelectorAll('.info-header-tab'),\r\n    info = document.querySelector('.info-header'),\r\n    tabContent = document.querySelectorAll('.info-tabcontent');\r\n  function hideTabContent(a) {\r\n    for (let i = a; i < tabContent.length; i++) {\r\n      tabContent[i].classList.remove('show');\r\n      tabContent[i].classList.add('hide');\r\n    }\r\n  }\r\n  hideTabContent(1);\r\n  function showTabContent(b) {\r\n    if (tabContent[b].classList.contains('hide')) {\r\n      tabContent[b].classList.remove('hide');\r\n      tabContent[b].classList.add('show');\r\n\r\n    }\r\n  }\r\n  info.addEventListener('click', function(event){\r\n    let target =event.target;\r\n    if (target && target.classList.contains('info-header-tab')) {\r\n      for (let i = 0; i < tab.length; i++) {\r\n        if (target == tab[i]) {\r\n          hideTabContent(0);\r\n          showTabContent(i);\r\n          break;\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/parst/tabs.js?");

/***/ }),

/***/ "./src/parst/timer.js":
/*!****************************!*\
  !*** ./src/parst/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n  //timer\r\n  let deadline = '2018-11-10';\r\n\r\n  function getTimeRemaining(endtime) {\r\n    let t = Date.parse(endtime) - Date.parse(new Date()),\r\n      // Math.floor округля\r\n      seconds = Math.floor((t / 1000) % 60),\r\n      minutes = Math.floor((t / 1000 / 60) % 60),\r\n      hours = Math.floor((t / (1000 * 60 * 60)));\r\n    //  hour = Math.floor((t / 1000 / 60/60) % 24),\r\n    //d = Math.floor((t / (1000 * 60 * 60*24)));\r\n    return {\r\n      'total': t,\r\n      'hours': hours,\r\n      'minutes': minutes,\r\n      'seconds': seconds\r\n    };\r\n  }\r\n\r\n  function setClock(id, endtime) {\r\n    let timer = document.getElementById(id),\r\n      hours = timer.querySelector('.hours'),\r\n      minutes = timer.querySelector('.minutes'),\r\n      seconds = timer.querySelector('.seconds'),\r\n      timeInterval = setInterval(updateClock, 1000);\r\n\r\n    function updateClock() {\r\n      let t = getTimeRemaining(endtime);\r\n      hours.textContent = ('0' + t.hours).slice(-2);\r\n      minutes.textContent = ('0' + t.minutes).slice(-2);\r\n      seconds.textContent = ('0' + t.seconds).slice(-2);\r\n\r\n      if (t.total <= 0) {\r\n        console.log('t.total<= 0');\r\n        clearInterval(timeInterval);\r\n        hours.textContent = '00';\r\n        minutes.textContent = '00';\r\n        seconds.textContent = '00';\r\n      }\r\n    }\r\n  }\r\n  setClock('timer', deadline);\r\n}\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/parst/timer.js?");

/***/ })

/******/ });