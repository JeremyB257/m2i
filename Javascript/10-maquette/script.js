//Selecteur
const darkMode = document.querySelector('.dark-mode');
const header = document.querySelector('header');
const gifts = document.querySelector('#gift');
const navs = header.querySelectorAll('a');
const menu = header.querySelector('.menu');
const menuBar = header.querySelector('.menu-bar');
const messageInput = document.querySelector('.messageInput');
const messageBtn = document.querySelector('.messageBtn');
const messageConfirm = document.querySelector('.messageConfirm');

//DATA
const dataGifts = [
  {name: "Pain d'épice", price: '15 €', img: 'img/gift1.png'},
  {name: 'Chapeau du père Noël', price: '22 €', img: 'img/gift2.png'},
  {name: 'Sapin de Noël', price: '48 €', img: 'img/gift3.png'},
  {name: 'Bonhomme de neige', price: '35 €', img: 'img/gift4.png'},
  {name: 'Bâton de bonbon', price: '12 €', img: 'img/gift5.png'},
];
dataGifts.map(gift => {
  gifts.children[1].innerHTML += `<div class="card">
      <i class="fa-regular fa-heart"></i>
      <img src="${gift.img}" alt="${gift.name}" />
      <h3>${gift.price}</h3>
      <p>${gift.name}</p>
    </div>`;
});

const hearts = document.querySelectorAll('.fa-heart');

//EventListener
darkMode.addEventListener('click', dark);
menuBar.addEventListener('click', responsiveMenu);
messageBtn.addEventListener('click', sendMessage);
window.addEventListener('scroll', scrollFunction);
for (let heart of hearts) {
  heart.addEventListener('click', fillHeart);
}

//Function

function dark() {
  document.body.classList.toggle('dark');
  darkMode.classList.toggle('fa-sun');
  darkMode.classList.toggle('fa-moon');
  scrollFunction();
}

function responsiveMenu() {
  menu.classList.toggle('hidden');
  menu.classList.toggle('show');
  menuBar.classList.toggle('fa-bars');
  menuBar.classList.toggle('fa-xmark');
}

function scrollFunction() {
  if (window.scrollY == 0) {
    toUp.style.display = 'none';
    header.style.boxShadow = 'none';
  }
  if (window.scrollY > 50) header.style.boxShadow = ' 0 0 15px 0 rgba(0,0,0,0.2)';
  if (window.scrollY > 300) toUp.style.display = 'block';
  let color = '';
  document.body.classList.contains('dark') ? (color = 'white') : (color = 'black');
  if (window.scrollY <= 500) {
    navs[0].style.color = '#dc3845';
    navs[1].style.color = color;
    navs[2].style.color = color;
    navs[3].style.color = color;
  } else if (window.scrollY >= 966 && window.scrollY < 1566) {
    navs[0].style.color = color;
    navs[1].style.color = '#dc3845';
    navs[2].style.color = color;
    navs[3].style.color = color;
  } else if (window.scrollY >= 1566 && window.scrollY < 2291) {
    navs[0].style.color = color;
    navs[1].style.color = color;
    navs[2].style.color = '#dc3845';
    navs[3].style.color = color;
  } else if (window.scrollY >= 2291) {
    navs[0].style.color = color;
    navs[1].style.color = color;
    navs[2].style.color = color;
    navs[3].style.color = '#dc3845';
  }
}

function fillHeart() {
  this.classList.toggle('fa-regular');
  this.classList.toggle('fa-solid');
}

function sendMessage() {
  if (messageInput.value) {
    messageConfirm.textContent = `Votre message "${messageInput.value}" est envoyé`;
  } else {
    messageConfirm.textContent = `Le message est vide ...`;
  }
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

if (window.innerWidth < 768) {
  menu.classList.add('hidden');
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768 && !menu.classList.contains('show')) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
});
