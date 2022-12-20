//exo 1

const nbr1 = document.querySelector('.number1');
const nbr2 = document.querySelector('.number2');
const btnMultiply = document.querySelector('.btnMultiply');
const multiplyMessage = document.querySelector('.multiplyMessage');

btnMultiply.addEventListener('click', () => {
  multiplyMessage.innerHTML = `${nbr1.value ? nbr1.value : 0} multiplier par ${
    nbr2.value ? nbr2.value : 0
  } vaut ${multiply(nbr1.value, nbr2.value)}`;
});

function multiply(num1 = 0, num2 = 0) {
  return num1 * num2;
}

//exo 2

const age = document.querySelector('.age');
const calcAgeBtn = document.querySelector('.calcAge');
const calcAgeMessage = document.querySelector('.calcAgeMessage');

calcAgeBtn.addEventListener('click', () => {
  calcAgeMessage.innerHTML = `${calcAge(age.value)} jours`;
});

function calcAge(age = 0) {
  return 365 * age;
}
