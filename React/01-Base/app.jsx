let firstName = 'Fiorella';

let age = (year) => {
  return new Date().getFullYear() - year;
};

ReactDOM.render(
  <h1>
    Bonjour {firstName}, tu as {age(2019)} ans.
  </h1>,
  document.querySelector('#root')
);
