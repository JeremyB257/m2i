let buttons = document.querySelectorAll('button');

function handleTitle(input) {
  title.innerHTML = input.value;
}

function handleClasses(e) {
  title.classList.toggle(this.dataset.class);

  if (title.classList.contains(this.dataset.class)) {
    this.innerHTML = this.innerHTML.replace('Ajouter', 'Retirer');
  } else {
    this.innerHTML = this.innerHTML.replace('Retirer', 'Ajouter');
  }

  if (this.dataset.class == 'invert') {
    this.parentNode.children[2].click();
    this.parentNode.children[3].click();
    this.parentNode.children[4].click();
  }
}
for (let button of buttons) {
  button.addEventListener('click', handleClasses);
}

// Exercice

const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener('click', select);
}

function select() {
  if (!this.classList.contains('selected')) {
    for (const card of cards) {
      card.classList.remove('selected');
    }
    this.classList.add('selected');
  } else {
    this.classList.remove('selected');
  }
}

//exo 1

const title = document.querySelector('.title');
const arr = ['Developpeur', 'Administrateur'];
let index = 0;
setInterval(() => {
  title.innerHTML = arr[index];
  index++;
  if (index == arr.length) {
    index = 0;
  }
}, 5000);

//exo 2

function randColor(a = 1) {
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let red = Math.floor(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue}, ${a})`;
}

setInterval(() => {
  document.body.style.backgroundColor = randColor(0.4);
}, 3000);
document.body.style.transition = '3s';

//exo 3

const dateDiv = document.querySelector('.dateDiv');

setInterval(() => {
  dateDiv.innerHTML = new Date().toTimeString().split(' ')[0];
}, 1000);
