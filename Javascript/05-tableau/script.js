// Les tableau en JS
let firstnames = ['Fiorella', 'Marina', 'Matthieu'];

// parcourir un tableau avec une fonction de callback (fléché ou non)
firstnames.forEach((firstname) => {
  console.log(firstname);
});

// parcourir un tableau avec une boucle for ... of
for (let firstname of firstnames) {
  console.log(firstname);
}
// parcourir un tableau avec une boucle for ... in
for (let index in firstnames) {
  console.log(`${index}: ${firstnames[index]}`);
}
// parcourir un tableau avec une boucle avec index et valeur(avancée++)
for (let [index, firstname] of firstnames.entries()) {
  console.log(`${index}: ${firstname}`);
}

// On peut modifier le contenu d'un tableau

function add() {
  if (!firstnames.includes('Bianca')) {
    // firstnames.push('Bianca');
    //avec le splice
    firstnames.splice(firstnames.length, 0, 'Bianca');
  }
}
