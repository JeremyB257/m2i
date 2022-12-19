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

//exo 5

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

//exo 6
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

//exo 7

let numberDiv = document.createElement('div');
document.body.appendChild(numberDiv);
for (let i = 1; i <= 100; i++) {
  let number = document.createElement('div');
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
