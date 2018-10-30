function form() {
  //tabs
   let more = document.querySelector('.more'),
     overlay = document.querySelector('.overlay');


   let body = document.querySelector('body'),
        mor = document.querySelector('.more');

   body.addEventListener('click', function (e) {
     let target = e.target;
     if (target.classList == 'description-btn') {
       
       overlay.style.display = 'block';
       this.classList.add('more-splash');
       document.body.style.overflow = 'hidden';
     }
     if (target.classList.contains('more')) {
       
       overlay.style.display = 'block';
       this.classList.add('more-splash');
       document.body.style.overflow = 'hidden';
     }
     if (target.classList.contains('popup-close')) {
       overlay.style.display = 'none';
       more.classList.remove('more-splash');
       document.body.style.overflow = '';
       //statusMessage.remove();
       clearInput();
       

     }
   });
  // Form
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скроро мы с вами  свяжемся!',
    failure: 'Что-то пошло не так ...'
  };
  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    
    ind = document.getElementById('in'),
    form1 = document.getElementById('form'),
    inputForm1 = form1.getElementsByTagName('input');

  var statusMessage = document.createElement('div');



  statusMessage.classList.add('status');
  input[0].addEventListener('input', () => {
    input[0].value = input[0].value.replace(/[^0-9+()]/ig, '');

  });
  ind.addEventListener('input', () => {

    ind.value = ind.value.replace(/[^0-9+()]/ig, '');
  });
  //PHP
  form.addEventListener('submit', function (event) {

    event.preventDefault();
    //name key
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    let formData = new FormData(form);
    request.send(formData);
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status == 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    /* for (let i = 0; i <input.length; i++) {
      input[i].value = '';
    } */
  });
  function clearInput() {
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';

    }
    statusMessage.innerHTML = ' ';


  }
  
  //JSON form1
    function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
          //name ключ
          elem.appendChild(statusMessage);
          let form1Data = new FormData(elem);

          function postData(data) {
            return new Promise(function (resolve, reject) {
              let request = new XMLHttpRequest();
              request.open('POST', 'server.php');
              request.setRequestHeader('Content-Type', 'applicatiom/json; charset=utf-8');
              request.onreadystatechange = function () {
                if (request.readyState < 4) {
                  resolve()
                } else if (request.readyState === 4) {
                  if (request.status == 200 && request.status < 3) {
                    resolve()
                  } else {
                    reject()
                  }
                }
              }
              request.send(data);
            });
            }
          //end postData
          function clearТ() {
            for (let i = 0; i < inputForm1.length; i++) {
              inputForm1[i].value = '';

            }
            

          }
        function clearIn() {
          setTimeout(statusMessage.remove(), 5000);
        }
          postData(form1Data)
            .then(() => statusMessage.innerHTML = message.loading )
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearТ)
          clearIn();
            
      
          

    });
  }
  sendForm(form1);
}
module.exports = form;