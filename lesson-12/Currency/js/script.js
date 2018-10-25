
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');
function postData(data) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('readystatechange', function () {
        
            if (request.readyState < 4) {
                resolve()
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 3) {
                    let data = JSON.parse(request.response);
                    console.log(data);
                } else {
                    reject()
                }
            }
        });
    });
};
inputRub.addEventListener('input', () => {
    postData()
        .then(() => {
            console.log('ok request.readyState < 4 ')
        })
        .then(() => {
            
            

            inputUsd.value = inputRub.value / data.usd;
        })

        .catch(() => {
            
            inputUsd.value = "Что-то пошло не так!";
        })
    
       
});

