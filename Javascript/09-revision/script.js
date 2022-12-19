//exo 1
document.querySelector('ul').addEventListener('mouseenter', () => {
  let dones = document.querySelectorAll('.done');
  for (let done of dones) {
    done.style.backgroundColor = 'lightgreen';
  }
});

//exo 2 et 3
let count = 0;

document.querySelector('h2').addEventListener('click', () => {
  count++;
  let ongoings = document.querySelectorAll('.ongoing');
  let comings = document.querySelectorAll('.coming');

  for (let ongoing of ongoings) {
    ongoing.style.backgroundColor = 'khaki';
  }

  if (count >= 3) {
    for (let coming of comings) {
      coming.style.backgroundColor = 'lightcoral';
    }
  }
});

//exo 4

let year = document.querySelector('.year');
let countYear = 0;
let yearInterval = setInterval(() => {
  year.innerHTML = parseInt(year.innerHTML) + 1;
  countYear++;
  if (countYear >= 4) {
    clearInterval(yearInterval);
  }
}, 3000);

//exo 5 - change text & color

let inputName = document.querySelector('#input-name');
let inputColor = document.querySelector('#input-color');
let btnChange = document.querySelector('#button-change');
let cowColor = document.querySelectorAll('.cow-color');

btnChange.addEventListener('click', () => {
  for (let cow of cowColor) {
    cow.innerHTML = inputName.value;
    cow.style.backgroundColor = inputColor.value;
  }
});

//exo 6 - btn bg color / rounded div

let boxes = document.getElementById('boxes');
let toggleColors = document.querySelector('#toggle-colors');
let toggleRoundedges = document.querySelector('#toggle-roundedges');
let addBox = document.querySelector('#add-box');

toggleColors.addEventListener('click', () => {
  let boxs = document.querySelectorAll('.box');
  for (let box of boxs) {
    box.classList.toggle('color');
  }
});

toggleRoundedges.addEventListener('click', () => {
  let boxs = document.querySelectorAll('.box');
  for (let box of boxs) {
    box.classList.toggle('round');
  }
});

addBox.addEventListener('click', () => {
  let boxs = document.querySelectorAll('.box');
  let box = boxes.appendChild(boxs[0].cloneNode(true));
  box.id = `box${boxs.length + 1}`;
});

//exo 7 - DIV Number * 100

let numberDiv = document.createElement('div');
numberDiv.className = 'numberDiv';
document.body.appendChild(numberDiv);
for (let i = 1; i <= 100; i++) {
  let number = document.createElement('div');
  number.className = 'number';
  number.innerHTML = i;
  numberDiv.appendChild(number);
  if (isPrime(i)) {
    number.style.background = 'lightCoral';
  } else if (i % 2 == 0) {
    number.style.background = 'lightGreen';
  } else {
    number.style.background = 'khaki';
  }
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
}

//exo 8 - formulaire HT -> TTC
let ht = document.querySelector('.ht');
let tva = document.querySelector('.tva');
let ttc = document.querySelector('.ttc');

ht.addEventListener('change', calcTTC);
tva.addEventListener('change', calcTTC);

function calcTTC() {
  ttc.innerHTML = parseInt(ht.value * tva.value) / 100 + parseInt(ht.value);
}

//exo 9 - les pays

let countries = ['france', 'italie', 'angleterre', 'espagne', 'portugal', 'belgique'].sort();
let listUl = document.createElement('ul');
document.body.appendChild(listUl);

for (let countrie of countries) {
  let list = document.createElement('li');
  list.innerHTML = countrie[0].toUpperCase() + countrie.slice(1);
  listUl.appendChild(list);
  if (countrie == 'angleterre') {
    list.style.listStyleImage = `url('https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/75/country-4x3/england.png')`;
  } else if (countrie == 'portugal') {
    list.style.listStyleImage = `url('https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/75/country-4x3/pt.png')`;
  } else {
    list.style.listStyleImage = `url('https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/75/country-4x3/${
      countrie[0] + countrie[1]
    }.png')`;
  }
  list.style.listStylePosition = 'inside';
}
