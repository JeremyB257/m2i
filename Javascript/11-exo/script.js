let firstnames = ['alpha', 'bravo', 'charlie', 'echo', 'foxstrot'];

const searchInArray = (array, search) => {
  return array.filter((item) => item.includes(search)).map((name) => name.toUpperCase());
};

console.log(searchInArray(firstnames, 'a'));
