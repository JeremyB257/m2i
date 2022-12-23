//Selecteur
const darkMode = document.querySelector('.darkMode');
const header = document.querySelector('header');

//EventListener
darkMode.addEventListener('click', dark);
window.addEventListener('scroll', scrollFunction);

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
