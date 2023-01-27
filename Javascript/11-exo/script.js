/* //Exercice 1

let firstnames = ['alpha', 'bravo', 'charlie', 'echo', 'foxstrot'];

const searchInArray = (array, search) => {
  return array.filter((item) => item.includes(search)).map((name) => name.toUpperCase());
};

console.log(searchInArray(firstnames, 'a'));

//Exercice 2

let timer = document.querySelector('#timer');

setInterval(() => {
  timer.innerHTML = new Date().toLocaleTimeString();
  if (new Date().getSeconds() % 10 == 0) {
    timer.classList.add('timer');
  } else {
    timer.classList.remove('timer');
  }
}, 1000);

//Exercice 3

let input3 = document.querySelector('#input3');
let para3 = document.querySelector('#para3');
let pictureBoxLabel = document.querySelector('#pictureBoxLabel');
let pictureBox = document.querySelector('#pictureBox');

let inputBtn3 = document.querySelector('#inputBtn3');

const validateInput = (e) => {
  para3.innerHTML = `Il vous reste ${10 - e.target.value.length - 1}`;
  if (e.target.value.length >= 9) {
    para3.style.color = 'red';
    inputBtn3.setAttribute('disabled', 'true');
  } else {
    para3.style.color = 'black';
    inputBtn3.setAttribute('disabled', 'false');
  }
};
input3.addEventListener('keydown', validateInput);

pictureBox.addEventListener('change', checkPicture);

function checkPicture(e) {
  if (e.target.checked) {
    pictureBoxLabel.innerHTML = '✓ Photo ajoutée';
  } else {
    pictureBoxLabel.innerHTML = 'Pas de photo';
  }
}
 */

let cookieCountPara = document.querySelector('.cookie-count-p');
let cookieImg = document.querySelector('.cookie-img');
let btnOne = document.querySelector('.btn1');
let btnTwo = document.querySelector('.btn2');
let btnThree = document.querySelector('.btn3');
let btnFour = document.querySelector('.btn4');
let btnOnePrice = document.querySelector('.btnOnePrice');
let btnTwoPrice = document.querySelector('.btnTwoPrice');
let btnThreePrice = document.querySelector('.btnThreePrice');
let btnFourPrice = document.querySelector('.btnFourPrice');

let cookieCount = 0;
let click = 1;
let cBySecond = 0;
let priceBtn1 = 25;
let priceBtn2 = 250;
let priceBtn3 = 50;
let priceBtn4 = 300;

cookieCountPara.innerHTML = cookieCount + `(+${click} / +${cBySecond} s)`;

cookieImg.addEventListener('click', cookieClick);
btnOne.addEventListener('click', buttonOne);
btnTwo.addEventListener('click', buttonTwo);
btnThree.addEventListener('click', buttonThree);
btnFour.addEventListener('click', buttonFour);

function cookieClick() {
  cookieCount += click;
  cookieCountPara.innerHTML = cookieCount.toLocaleString() + `(+${click} / +${cBySecond} s)`;
}

function buttonOne() {
  if (cookieCount >= priceBtn1) {
    cookieCount -= priceBtn1;
    click++;
    priceBtn1 = Math.round(priceBtn1 * 1.1);
    cookieCountPara.innerHTML = cookieCount.toLocaleString() + `(+${click} / +${cBySecond} s)`;
    btnOnePrice.innerHTML = `prix : ${priceBtn1}`;
  }
}

function buttonTwo() {
  if (cookieCount >= priceBtn2) {
    cookieCount -= priceBtn2;
    click += 5;
    priceBtn2 = Math.round(priceBtn2 * 1.2);
    cookieCountPara.innerHTML = cookieCount.toLocaleString() + `(+${click} / +${cBySecond} s)`;
    btnTwoPrice.innerHTML = `prix : ${priceBtn2}`;
  }
}

function buttonThree() {
  if (cookieCount >= priceBtn3) {
    cookieCount -= priceBtn3;
    cBySecond++;
    priceBtn3 = Math.round(priceBtn3 * 1.2);
    cookieCountPara.innerHTML = cookieCount.toLocaleString() + `(+${click} / +${cBySecond} s)`;
    btnThreePrice.innerHTML = `prix : ${priceBtn3}`;
  }
}

function buttonFour() {
  if (cookieCount >= priceBtn4) {
    cookieCount -= priceBtn4;
    cBySecond += 5;
    priceBtn4 = Math.round(priceBtn4 * 1.3);
    cookieCountPara.innerHTML = cookieCount.toLocaleString() + `(+${click} / +${cBySecond} s)`;
    btnFourPrice.innerHTML = `prix : ${priceBtn4}`;
  }
}

let interval = setInterval(() => {
  cookieCount += cBySecond;
  cookieCountPara.innerHTML = cookieCount.toLocaleString() + `(+${click} / +${cBySecond} s)`;
}, 1000);
