export default function form() {
  // Form
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скроро мы с вами  свяжемся!',
    failure: 'Что-то пошло не так ...'
  };
  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    ind = document.getElementById('in'),
    form1 = document.getElementById('form');



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
    console.log(request);
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    console.log(request);
    console.log(form);
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
          function clearInput() {
            for (let i = 0; i <input.length; i++) {
            input[i].value = '';
            } 
          }
          postData(form1Data)
            .then(() => statusMessage.innerHTML = message.loading )
            .then(()=> {
              overlay.style.display = 'block';
              overlay.style.display = 'none';
              statusMessage.innerHTML = 'ура';
            })
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput)
          

    });
  }
  sendForm(form1);
}
//module.exports = form;