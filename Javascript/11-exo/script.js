let firstnames = ['a', 'b', 'c'];

const searchInArray = (array, search) => {
  return array.filter((item) => item.includes(search));
};

console.log(searchInArray(firstnames, 'a'));
