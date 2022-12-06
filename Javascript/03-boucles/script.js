/* Les boucles (for et while)
le for a 3 instruction 
-initialisation (1=0)
-condition jusqu'a (i > 10)
- incrementation (i++)
*/
/* for (i = 0; i < 10; i++) {
  console.log(i);
}

// for of pour les tableaux
for (var product of products) {
}
//for in pour les objets
for (var index in products) {
} */

/* 
//Le while
var wheather = true;
while (weather) {
  console.log('Je sors');
}

//Le do while se fait au moins une fois
var night = false;

do {
  night = confirm('Fait il nuit ?');
  if (night) {
    console.log('On voit rien');
  }
} while (night);
 */

// exo 1
/* let i = 1;
while (i < 11) {
  console.log(i);
  i++;
} */
//exo 2
/* for (let i = 10; i >= 2; i--) {
  console.log(i);
  i--;
} */
//exo 3
/* for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
 */

//exo 4
/* let answer = prompt('Veux tu continuer sur le site ? (oui, non , o ou n)');

while (answer != 'oui' && answer != 'non' && answer != 'o' && answer != 'n') {
  answer = prompt('Veux tu continuer sur le site ? (oui, non , o ou n)');
} */

//exo distributeur
const response = document.querySelector('.response');
let distrib = {
  café: 40,
  thé: 40,
  chocolat: 60,
};
let sum = 0;
let message = '';

function boisson(choice) {
  let sugar = document.getElementById('sugar').value;
  let milk = document.getElementById('milk').checked;

  sum += distrib[choice];
  if (sugar == 1) {
    sum += 5;
    message += 'sucré ';
  } else if (sugar == 2) {
    sum += 10;
    message += ' tres sucré ';
  } else {
    message += ' sans sucre ';
  }
  if (milk) {
    sum += 15;
    message += 'avec du lait';
  }

  response.innerHTML = `Vous devez payer ${sum} centimes. Votre ${choice} ${message} est pret `;
  sum = 0;
  message = '';
}
