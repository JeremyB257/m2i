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
