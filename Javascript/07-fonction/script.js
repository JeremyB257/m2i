//exercice 1
function square(n1) {
  return n1 ** 2;
}

console.log(square(5));

//exercice 2
function bitcoin(euro) {
  if (euro.includes('€')) {
    return (parseFloat(euro) / 16072).toFixed(8) + ' Bitcoin';
  } else {
    return (parseFloat(euro) * 16072).toFixed(2) + ' Euro';
  }
}
console.log(bitcoin('16'));
console.log(bitcoin('16€'));

//exercice 3
function pgcd(a, b) {
  while (b != 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

console.log(pgcd(221, 782));

//exercice 4

function pair(a) {
  if (a % 2 == 0) {
    return a + ' est pair';
  } else {
    return a + ' est impair';
  }
}

console.log(pair(11));

//exercice 5

function prime(number) {
  let count = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  return count == 2 ? `${number} est un chiffre premier` : `${number} n'est pas un chiffre premier`;
}
console.log(prime(11));

//exercice 6
function fibonacci(nbr) {
  let n1 = 0;
  let n2 = 1;
  let somme = 0;
  let arr = [n2];

  for (let i = 2; i <= nbr; i++) {
    somme = n1 + n2;

    n1 = n2;

    n2 = somme;
    arr.push(n2);
  }

  return arr;
}

console.log(fibonacci(10));
