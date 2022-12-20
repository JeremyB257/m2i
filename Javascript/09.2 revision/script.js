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

//exo 3 - bissextile

function bissextile(year) {
  if (year % 100 == 0 && year % 400 !== 0) {
    return `${year} n'est pas une année bissextile`;
  } else if (year % 4 == 0) {
    return `${year} est une année bissextile`;
  } else {
    return `${year} n'est pas une année bissextile`;
  }
}

//exo 4 - palindrome

function palindrom(word) {
  if (word.split('').reverse().join('') == word) {
    return `${word} est un palindrome`;
  } else {
    return `${word} n'est pas un palindrome`;
  }
}

//exo 5 - anagramme

function anagram(word1, word2) {
  if (word1.toLowerCase().split('').sort().join('') == word2.toLowerCase().split('').sort().join('')) {
    return `Ce sont des annagrames`;
  } else {
    return `Ce ne sont pas des annagrames`;
  }
}

//exo 6 - dé

const exo6 = document.querySelector('.exo6');
const dice = document.querySelector('.dice');
const btnDice = document.querySelector('.btnDe');

let count = 0;
btnDice.addEventListener('click', () => {
  let diceInterval = setInterval(() => {
    dice.innerHTML = `&#x268${randNum()}`;
    count++;
    if (count >= 10) {
      clearInterval(diceInterval);
      count = 0;
    }
  }, 100);
});

function randNum() {
  return Math.floor(Math.random() * (5 - 0 + 1));
}
