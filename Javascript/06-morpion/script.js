//selecteur
const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const message = document.querySelector('.message');

//event
p0.addEventListener('click', addPion);
p1.addEventListener('click', addPion);
p2.addEventListener('click', addPion);
p3.addEventListener('click', addPion);
p4.addEventListener('click', addPion);
p5.addEventListener('click', addPion);
p6.addEventListener('click', addPion);
p7.addEventListener('click', addPion);
p8.addEventListener('click', addPion);

// algo
let morpion = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
];

let turn = 0;
message.innerHTML = "C'est au joueur 1 de jouer";
function addPion(e) {
  console.log(e.target.innerHTML);
  this.removeEventListener('click', addPion);
  if (turn % 2 == 0) {
    turn++;
    message.innerHTML = "C'est au joueur 2 de jouer";
    e.target.innerHTML = 'X';
  } else {
    turn++;
    message.innerHTML = "C'est au joueur 1 de jouer";
    e.target.innerHTML = 'O';
  }
}
