//Selecteur
const darkMode = document.querySelector('.darkMode');
const header = document.querySelector('header');
const hearts = document.querySelectorAll('.heartDiv');

//EventListener
darkMode.addEventListener('click', dark);
window.addEventListener('scroll', scrollFunction);
for (let heart of hearts) {
  heart.addEventListener('click', fillHeart);
}

//Function
function dark() {
  document.body.classList.toggle('dark');
  darkMode.children[0].classList.toggle('hidden');
  darkMode.children[1].classList.toggle('hidden');
}

function scrollFunction() {
  if (window.scrollY == 0) header.style.boxShadow = 'none';
  if (window.scrollY > 50) header.style.boxShadow = ' 0 0 15px 0 rgba(0,0,0,0.2)';
}

function fillHeart() {
  this.children[0].classList.toggle('hidden');
  this.children[1].classList.toggle('hidden');
}

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
