let firstName = 'Fiorella';

let age = (year) => {
  return new Date().getFullYear() - year;
};

ReactDOM.render(
  <>
    <h1>
      Bonjour {firstName}, tu as {age(2019)} ans.
    </h1>
    <img src="un-chaton.jpeg" alt="un chaton" />
  </>,
  document.querySelector('#root')
);
