//window.addEventListener('load')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');

    }
  }
  info.addEventListener('click', function(event){
    let target =event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  //timer
  let deadline = '2018-10-30';
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        // Math.floor округля
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t / 1000/60) % 60),
        hours = Math.floor((t / (1000 * 60*60)));
        //  hour = Math.floor((t / 1000 / 60/60) % 24),
        //d = Math.floor((t / (1000 * 60 * 60*24)));
    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  }
  function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = ('0' + t.hours).slice(-2);
      minutes.textContent = ('0' + t.minutes).slice(-2);
      seconds.textContent = ('0' + t.seconds).slice(-2);
     
      if (t.total<= 0) {
        console.log('t.total<= 0');
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }
  setClock('timer', deadline);
  // Modal
  
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay');
      

  let body = document.querySelector('body'),
      mor = document.querySelector('.more');
      
  body.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList == 'description-btn') {
      console.log('class');
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
    if (target.classList.contains('more')) {
      console.log('butto');
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    }
    if (target.classList.contains('popup-close')) {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    }
  });
  // Form
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скроро мы с вами  свяжемся!',
    failure: 'Что-то пошло не так ...'
  };
  let form = document.querySelector('.main-form'),
      input =form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

      statusMessage.classList.add('status');
  //PHP
  form.addEventListener('submit', function(event){
    event.preventDefault();
    //name key
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    console.log(request);
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    console.log(request);
    console.log(form);
    let formData = new FormData(form);
    console.log(formData);
    console.log(request.send(formData));
    request.send(formData);
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState ===4 && request.status ==200) {
        statusMessage.innerHTML = message.success;
      }else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i <input.length; i++) {
      input[i].value = '';
    }
  //});
  //JSON
/*   form.addEventListener('submit', function (event) {
    event.preventDefault();
    //name ключ
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'applicatiom/json; charset=utf-8');

  

    let formData = new FormData(form);
    let obj = {};
    //JSON
    formData.forEach(function(value, key){
      obj[key] = value;
    });
    console.log(obj);
    let json =JSON.stringify(obj);
    console.log(obj);
    request.send(json);
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    } */
  });
});