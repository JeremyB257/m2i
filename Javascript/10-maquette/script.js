//Selecteur
const darkMode = document.querySelector('.darkMode');

//EventListener
darkMode.addEventListener('click', dark);
window.addEventListener('scroll', scroll);

//Function
function dark() {
  document.body.classList.toggle('dark');
  darkMode.children[0].classList.toggle('hidden');
  darkMode.children[1].classList.toggle('hidden');
}

function scroll() {
  console.log(window.scrollY);
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
