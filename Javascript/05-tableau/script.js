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

week.splice(0, 0, 'lundi');
week.splice(4, 0, 'vendredi');

console.log(week);
console.log(week[2]);

//exercice 2
const foodInput = document.getElementById('foodInput');
const foodForm = document.getElementById('foodForm');
foodForm.addEventListener('submit', addFood);
let foods = ['poulet', 'frites', 'chocolat'];

function addFood(e) {
  e.preventDefault();
  if (foods.includes(e.target[0].value.toLowerCase())) {
    alert(`Voici votre ${e.target[0].value.toLowerCase()}`);
    foods = foods.filter((food) => {
      return food != e.target[0].value.toLowerCase();
    });
  } else {
    alert("L'aliment n'existe pas");
  }
  console.log(foods);
}
