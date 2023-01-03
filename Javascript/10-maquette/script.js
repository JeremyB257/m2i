//Selecteur
const darkMode = document.querySelector('.darkMode');
const header = document.querySelector('header');
const gifts = document.querySelector('#gift');
const navs = header.querySelectorAll('a');
const messageInput = document.querySelector('.messageInput');
const messageBtn = document.querySelector('.messageBtn');
let errMessage = document.createElement('p');
//DATA
const dataGifts = [
  { name: "Pain d'épice", price: '15 €', img: 'img/gift1.png' },
  { name: 'Chapeau du père Noël', price: '22 €', img: 'img/gift2.png' },
  { name: 'Sapin de Noël', price: '48 €', img: 'img/gift3.png' },
  { name: 'Bonhomme de neige', price: '35 €', img: 'img/gift4.png' },
  { name: 'Bâton de bonbon', price: '12 €', img: 'img/gift5.png' },
];
dataGifts.map((gift) => {
  gifts.children[1].innerHTML += `<div class="card">
            <div class="heartDiv">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-heart hidden"></i>
            </div>
            <img src='${gift.img}' alt='${gift.name}' />
            <h3>${gift.price}</h3>
            <p>${gift.name}</p>
          </div>`;
});
const hearts = document.querySelectorAll('.heartDiv');

//EventListener
darkMode.addEventListener('click', dark);
window.addEventListener('scroll', scrollFunction);
for (let heart of hearts) {
  heart.addEventListener('click', fillHeart);
}
messageBtn.addEventListener('click', sendMessage);
//Function

function dark() {
  document.body.classList.toggle('dark');
  darkMode.children[0].classList.toggle('hidden');
  darkMode.children[1].classList.toggle('hidden');
  scrollFunction();
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
  } else if (window.scrollY >= 966 && window.scrollY <= 1566) {
    navs[0].style.color = color;
    navs[1].style.color = '#dc3845';
    navs[2].style.color = color;
    navs[3].style.color = color;
  } else if (window.scrollY >= 1566 && window.scrollY <= 2291) {
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
  this.children[0].classList.toggle('hidden');
  this.children[1].classList.toggle('hidden');
}

function sendMessage() {
  if (messageInput.value) {
    messageInput.value;
    console.log('ici');
  } else {
    errMessage.style.color = 'white';
    errMessage.innerHTML = 'Le message est vide ...';
    messageInput.after(errMessage);
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
