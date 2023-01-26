//Exercice 1

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
