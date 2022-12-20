//exo 1

const exo1 = document.querySelector('.exo1');
const nbr1 = document.querySelector('.number1');
const nbr2 = document.querySelector('.number2');
const btnMultiply = document.querySelector('.btnMultiply');
const multiplyMessage = document.querySelector('.multiplyMessage');

btnMultiply.addEventListener('click', () => {
  multiplyMessage.innerHTML = `${nbr1.value} multiplier par ${nbr2.value} vaut ${multiply(nbr1.value, nbr2.value)}`;
});

function multiply(num1, num2) {
  return num1 * num2;
}
