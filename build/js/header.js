const headerMobileBtn = document.querySelector('.header-mobile__btn');
headerMobileBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('active');
});
