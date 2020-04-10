var menuBtn = document.querySelector('.menu');
var menu = document.querySelector('.mobileNav');
console.log(menu);
menuBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
});
