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
//Selecteur
const response = document.querySelector('.response');
const money = document.querySelector('.money');
const btnTea = document.getElementById('btn-tea');
const btnCoffe = document.getElementById('btn-coffe');
const btnChocolate = document.getElementById('btn-chocolate');
// EventListener

btnTea.addEventListener('click', boisson);
btnCoffe.addEventListener('click', boisson);
btnChocolate.addEventListener('click', boisson);

// fucntion
let distrib = {
  money: 0,
  priceCoffe: 40,
  priceTea: 40,
  priceChocolate: 60,
  dCoffe: 10,
  dTea: 10,
  dChocolate: 10,
  dSugar: 10,
  dMilk: 10,
};
let sum = 0;
let message = '';
money.innerHTML = `Tirelire : ${distrib.money / 100} €`;

function boisson(e) {
  let sugar = document.getElementById('sugar').value;
  let milk = document.getElementById('milk').checked;
  console.log(e);
  if (e.target.value == 'tea') {
    if (distrib.dTea > 0) {
      distrib.dTea--;
      sum += distrib.priceTea;
      message += 'Voici votre thé ';
    } else {
      message += 'Thé indisponible ';
      btnTea.setAttribute('disabled', '');
    }
  } else if (e.target.value == 'coffe') {
    if (distrib.dCoffe > 0) {
      distrib.dCoffe--;
      sum += distrib.priceCoffe;
      message += ' Voici votre café ';
    } else {
      message += 'Café indisponible ';
      btnCoffe.setAttribute('disabled', '');
    }
  } else {
    if (distrib.dChocolate > 0) {
      distrib.dChocolate--;
      sum += distrib.priceChocolate;
      message += 'Voici votre chocolat ';
    } else {
      message += 'Chocolat indisponible ';
      btnChocolate.setAttribute('disabled', '');
    }
  }

  if (sugar == 1) {
    if (distrib.dSugar > 0) {
      distrib.dSugar--;
      sum += 5;
      message += 'sucré ';
    }
  } else if (sugar == 2) {
    if (distrib.dSugar > 1) {
      distrib.dSugar -= 2;
      sum += 10;
      message += ' tres sucré ';
    }
  } else {
  }

  if (milk) {
    if (distrib.dMilk > 1) {
      distrib.dMilk--;
      sum += 15;
      message += 'avec du lait';
    }
  }

  response.innerHTML = `Vous devez payer ${sum} centimes.${message}`;
  distrib.money += sum;
  money.innerHTML = `Tirelire : ${distrib.money / 100} €`;
  sum = 0;
  message = '';
}
