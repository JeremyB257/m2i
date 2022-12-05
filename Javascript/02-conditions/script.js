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
