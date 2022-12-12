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
