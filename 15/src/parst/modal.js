function modal() {
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
      statusMessage.innerHTML = 'ура';
    }
  });
}
module.exports = modal;