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
