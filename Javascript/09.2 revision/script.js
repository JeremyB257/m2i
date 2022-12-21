//exo 1

const nbr1 = document.querySelector('.number1');
const nbr2 = document.querySelector('.number2');
const btnMultiply = document.querySelector('.btnMultiply');
const multiplyMessage = document.querySelector('.multiplyMessage');

btnMultiply.addEventListener('click', () => {
  multiplyMessage.innerHTML = `${nbr1.value ? nbr1.value : 0} multiplier par ${
    nbr2.value ? nbr2.value : 0
  } vaut ${multiply(nbr1.value, nbr2.value)}`;
});

function multiply(num1 = 0, num2 = 0) {
  return num1 * num2;
}

//exo 2 - age

const age = document.querySelector('.age');
const calcAgeBtn = document.querySelector('.calcAge');
const calcAgeMessage = document.querySelector('.calcAgeMessage');

calcAgeBtn.addEventListener('click', () => {
  calcAgeMessage.innerHTML = `${calcAge(age.value)} jours`;
});

function calcAge(age = 0) {
  return 365 * age;
}

//exo 3 - bissextile
let exo3 = document.querySelector('.exo3');

exo3.children[2].addEventListener('click', () => {
  exo3.children[3].innerHTML = bissextile(parseInt(exo3.children[1].value));
});

function bissextile(year) {
  if (year % 100 == 0 && year % 400 !== 0) {
    return `${year} n'est pas une année bissextile`;
  } else if (year % 4 == 0) {
    return `${year} est une année bissextile`;
  } else {
    return `${year} n'est pas une année bissextile`;
  }
}

//exo 4 - palindrome
let exo4 = document.querySelector('.exo4');

exo4.children[2].addEventListener('click', () => {
  exo4.children[3].innerHTML = palindrom(exo4.children[1].value);
});

function palindrom(word) {
  if (word.split('').reverse().join('') == word) {
    return `${word} est un palindrome`;
  } else {
    return `${word} n'est pas un palindrome`;
  }
}

//exo 5 - anagramme
let exo5 = document.querySelector('.exo5');

exo5.children[3].addEventListener('click', () => {
  exo5.children[4].innerHTML = anagram(exo5.children[1].value, exo5.children[2].value);
});

function anagram(word1, word2) {
  if (word1.toLowerCase().split('').sort().join('') == word2.toLowerCase().split('').sort().join('')) {
    return `Ce sont des anagrammes`;
  } else {
    return `Ce ne sont pas des anagrammes`;
  }
}

//exo 6 - dé

const exo6 = document.querySelector('.exo6');
const dice = document.querySelector('.dice');
const btnDice = document.querySelector('.btnDe');

let count = 0;
btnDice.addEventListener('click', () => {
  let diceInterval = setInterval(() => {
    dice.innerHTML = `&#x268${randNum()}`;
    count++;
    if (count >= 10) {
      clearInterval(diceInterval);
      count = 0;
    }
  }, 100);
});

function randNum() {
  return Math.floor(Math.random() * (5 - 0 + 1));
}

//exo 7 - chiffre romain

const arabicInput = document.querySelector('.arabicInput');
const romanInput = document.querySelector('.romanInput');

romanInput.addEventListener('input', () => {
  arabicInput.value = romanToInt(romanInput.value);
});
arabicInput.addEventListener('input', () => {
  romanInput.value = intToRoman(arabicInput.value);
});

function romanToInt(str1) {
  let num = char_to_int(str1.charAt(0));
  let pre = null;
  let curr = null;

  for (let i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function char_to_int(c) {
  switch (c) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return -1;
  }
}

function intToRoman(num) {
  let roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let result = '';

  for (let i in roman) {
    while (num >= roman[i]) {
      result += i;
      num -= roman[i];
    }
  }
  return result;
}

//exo 8 - Liste de course

const courseInput = document.querySelector('.courseInput');
const courseBtn = document.querySelector('.courseBtn');
const courseList = document.querySelector('.courseList');

courseBtn.addEventListener('click', () => {
  if (courseInput.value) {
    let list = document.createElement('li');
    list.innerHTML = courseInput.value;
    courseList.appendChild(list);
    courseInput.value = '';
  }
});

//exo 9

let movies = [
  {
    title: 'Star Wars: Un nouvel espoir',
    releasedAt: 1977,
    duration: 125,
    actors: ['Mark Hamill', 'Carrie Fisher', 'Harrison Ford'],
    format: 'VOD',
    genre: 'Science-fiction',
  },
  {
    title: "Harry Potter à l'école des sorciers",
    releasedAt: 2001,
    duration: 152,
    actors: ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Mark Hamill'],
    format: 'DVD',
    genre: 'Science-fiction',
  },
  {
    title: 'Le monde de Nemo',
    releasedAt: 2003,
    duration: 101,
    actors: ['Albert Brooks', 'Nemo', 'Dorie'],
    format: 'Blu-ray',
    genre: 'Animation',
  },
];

const listmovie = document.querySelector('.listmovie');
const movie2000 = document.querySelector('.movie2000');
const movie2h = document.querySelector('.movie2h');
const movieHP = document.querySelector('.movieHP');
const movieBluray = document.querySelector('.movieBluray');
const movieSci = document.querySelector('.movieSci');

//movie List
for (let movie of movies) {
  let list = document.createElement('p');
  list.innerHTML = `${movie.title} (${movie.releasedAt})`;
  listmovie.appendChild(list);
}

//movie before 2000
movies
  .filter((movie) => movie.releasedAt < 2000)
  .forEach((movie) => {
    let list = document.createElement('p');
    list.innerHTML = `${movie.title} (${movie.releasedAt})`;
    movie2000.appendChild(list);
  });

//movie more 2h
movies
  .filter((movie) => movie.duration > 120)
  .forEach((movie) => {
    let list = document.createElement('p');
    list.innerHTML = `${movie.title} (${movie.releasedAt})`;
    movie2h.appendChild(list);
  });

//Harry Potter actor
movies[1].actors.forEach((actor) => {
  let list = document.createElement('p');
  list.innerHTML = `${actor}`;
  movieHP.appendChild(list);
});

//bluray movie
movies
  .filter((movie) => movie.format == 'Blu-ray')
  .forEach((movie) => {
    let list = document.createElement('p');
    list.innerHTML = `${movie.title} (${movie.releasedAt})`;
    movieBluray.appendChild(list);
  });

//sci actor
movies
  .filter((movie) => movie.genre == 'Science-fiction')
  .forEach((movie) => {
    let title = document.createElement('h4');
    title.innerHTML = `${movie.title} : `;
    movieSci.appendChild(title);
    for (let actor of movie.actors) {
      let list = document.createElement('p');
      list.innerHTML = `${actor}`;
      movieSci.appendChild(list);
    }
  });
