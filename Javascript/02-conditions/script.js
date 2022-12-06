/* // Les conditions
//equivalent de prompt en booleen(oui /Non)
let genre = confirm('Es-tu un garcon ?');

if (genre) {
  console.log('Tu es un garcon');
} else {
  console.log('Tu es une fille');
}

//Les operateurs logiques
let ask = prompt('petit pain, croissant ou chocolatine');
let place = prompt("D'ou venez-vous ? nord ou sud");

// OU == ||, ET == &&

if(ask == 'petit pain' || ask == 'croissant') {
  console.log('Bienvenue);
} else if (ask == 'chocolatine' && place == 'sud') {
console.log('Sortez');
} else {
  console.log('Attention, on dit "petit pain"')
}
 */
/* 
let age = prompt('Quelle age avez vous ?');

if (age < 13) console.log('Interdit');
else if (age <= 17) console.log('Bientot');
else console.log('Autorisé');

*/
let frigo = {
  tomates: 3,
  oeuf: 4,
  pain: 1,
  jambon: 2,
  poulet: 1,
  fromage: 1,
};

if (frigo.pain >= 1 && frigo.jambon >= 1 && (frigo.tomates || frigo.fromage >= 1)) {
  console.log('1 sandwich');
} else if (frigo.poulet >= 1) {
  console.log('1 poulet');
} else if (frigo.oeuf >= 3) {
  console.log('1 omellette');
} else {
  console.log('chips');
}

/* //PGCD

let a = prompt('chiffre 1 ?');
let b = prompt('chiffre 2 ?');

while (b != 0) {
  let t = b;
  b = a % b;
  a = t;
}
console.log(a);
 */
