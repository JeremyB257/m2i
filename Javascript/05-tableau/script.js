// Les tableau en JS
let firstnames = ['Fiorella', 'Marina', 'Matthieu'];

// parcourir un tableau avec une fonction de callback (fléché ou non)
firstnames.forEach((firstname) => {
  console.log(firstname);
});

// parcourir un tableau avec une boucle for ... of
for (let firstname of firstnames) {
  console.log(firstname);
}
// parcourir un tableau avec une boucle for ... in
for (let index in firstnames) {
  console.log(`${index}: ${firstnames[index]}`);
}
// parcourir un tableau avec une boucle avec index et valeur(avancée++)
for (let [index, firstname] of firstnames.entries()) {
  console.log(`${index}: ${firstname}`);
}

// On peut modifier le contenu d'un tableau

function add() {
  if (!firstnames.includes('Bianca')) {
    // firstnames.push('Bianca');
    //avec le splice
    firstnames.splice(firstnames.length, 0, 'Bianca');
  }
}

// Quelque methodes de tableaux

let numbers = [1, 2, 3];

numbers = numbers.map((number) => {
  return number * 2; //Une fonction retourne toujours quelque chose
}); // [2, 4, 6]
console.log(numbers);

numbers = numbers.filter((number) => {
  return number > 2; // Garde les valeurs superieur a 2
}); // [4, 6]
console.log(numbers);

// Les fonctions
function addition(N1 = 0, N2 = 0) {
  // le =  affecte une valeur par defaut
  return N1 + N2;
}

console.log(addition(2, 3));

//declaration d'une fonction pour dire bonjour

function hello(name, lang = 'fr') {
  if (lang == 'fr') {
    return `Bonjour ${name}`;
  }
  return `Hello ${name}`;
}

// On apelle la fonction
console.log(hello('toto'));
console.log(hello('toto', 'en'));

//exercice

let week = ['mardi', 'mercredi', 'jeudi', 'samedi', 'dimanche'];

console.log(week);

week.unshift('lundi');
week.splice(4, 0, 'vendredi');

console.log(week);
console.log(week[2]);

//exercice 2
const foodInput = document.getElementById('foodInput');
const foodForm = document.getElementById('foodForm');
foodForm.addEventListener('submit', addFood);
let foods = ['poulet', 'frites', 'chocolat'];

function addFood(e) {
  let choice = e.target[0].value.toLowerCase();

  e.preventDefault();
  if (foods.includes(choice)) {
    alert(`Voici votre ${choice}`);
    foods.splice(foods.indexOf(choice), 1);
    /*  foods = foods.filter((food) => {
      return food != choice;
    }); */
  } else {
    alert("L'aliment n'est pas disponible");
  }
  console.log(foods);
}

//exercice 3
/* let array = [];

for (let i = 0; i < 5; i++) {
  array.push(prompt('Saisisez 1 nombres'));
}
for (number of array) {
  console.log(number % 2 == 0 ? number + ' est pair' : number + ' est impair');
} */

//exercice 4
const noteForm = document.getElementById('noteForm');
noteForm.addEventListener('submit', calcNote);

function calcNote(e) {
  e.preventDefault();

  let notes = e.target[0].value.split(',');
  let sum = 0;
  let min = parseInt(notes[0]);
  let max = 0;
  // Deux solution :
  // Le reduce pour faire la moyenne
  // notes.reduce((n1, n2) => n1 + n2);
  // le apply transform le tableau en eleemnt individuel
  // min = Math.min.apply(null, notes)
  // max = Math.max.apply(null, notes)
  // sinon spread operator
  // min = Math.min.apply(...notes)
  // max = Math.max.apply(...notes)

  // ou la boucle for pour la moyenne + min et max
  for (let i = 0; i < notes.length; i++) {
    sum += parseInt(notes[i]);
    if (notes[i] > max) max = notes[i];
    if (notes[i] < min) min = notes[i];
  }
  console.log(sum / notes.length);
  console.log(`Note min : ${min}`);
  console.log(`Note max : ${max}`);
}

//exercice 5

let arr5 = [5, 10, 15];

console.log(arr5.map((number) => number * number));

//exercice 6

let arr6 = ['aa', 'bb', 'c'];

console.log(arr6.filter((string) => string.length < 2));

//exercice 7

let arr7 = ['mathieu', 'jeremy', 'jordan'];

console.log(arr7.map((name) => name[0].toUpperCase() + name.slice(1, name.length)));

//exercice 8

let arr8 = [];

for (let i = 1; i <= Math.floor(Math.random() * (16 - 10) + 10); i++) {
  arr8.push(Math.round(Math.random() * 100));
}
console.log(arr8);

//exercice 9

let arr9 = [
  {
    firstname: 'Fiorella',
    name: 'Mota',
  },
];

arr9 = arr9.map((objet) => {
  return objet['firstname'] + ' ' + objet['name'];
});
console.log(arr9);

//exercice 10

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr105 = [];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] % 2 == 0) {
    arr105.push(arr10[i]);
    arr105.push(arr10[i] ** 2);
  } else {
    arr105.push(arr10[i]);
  }
}

console.log(arr105);

//exercice 11

let colors = [];
let redCounter = 0;
let yellowCounter = 0;
let blueCounter = 0;

let nbr = prompt('Choisisez un nombre');

for (i = 0; i < nbr; i++) {
  let rand = Math.floor(Math.random() * 3);

  if (rand == 0) {
    colors.push('rouge');
    redCounter++;
  } else if (rand == 1) {
    colors.push('jaune');
    yellowCounter++;
  } else {
    colors.push('bleu');
    blueCounter++;
  }
}

if ((redCounter > yellowCounter || redCounter > blueCounter) && redCounter > 1) console.log('Rouge');
if ((yellowCounter > blueCounter || yellowCounter > redCounter) && yellowCounter > 1) console.log('jaune');
if ((blueCounter > redCounter || blueCounter > yellowCounter) && blueCounter > 1) console.log('bleu');
