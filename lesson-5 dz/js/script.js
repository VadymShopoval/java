let list = document.createElement('li'),
    li = document.getElementsByTagName('li'),
    menu =document.querySelector('.menu'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv');
list.classList.add('menu-item');
list.textContent = 'пятый пункт';
menu.appendChild(list);
menu.insertBefore(li[2],li[1]);

console.log(adv);

document.body.style.backgroundImage = "url(./img/apple_true.jpg)";
title.textContent = 'Мы продаем только подлинную технику Apple';
adv[0].remove();
let promp = prompt('как относится к техник  Apple', ''),
    p = document.getElementById('prompt');
p.textContent = promp;
 