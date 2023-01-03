let firstName = 'Fiorella';

let age = (year) => {
  return new Date().getFullYear() - year;
};
let person = {
  image: 'un-chaton.jpeg',
  name: 'Bianca',
};

ReactDOM.render(
  <div>
    <h1>
      Bonjour {firstName}, tu as {age(2019)} ans.
    </h1>
    <img src={person.image} alt={person.name} className="image" />
  </div>,
  document.querySelector('#root')
);
