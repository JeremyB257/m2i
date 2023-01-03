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

//exemple 2
setInterval(() => {
  let element = <h2>Il est {new Date().toLocaleTimeString()}</h2>;
  ReactDOM.render(element, document.querySelector('#root2'));
}, 1000);

//exemple 3

let peoples = ['Marina', 'Fiorella', 'Matthieu'];

ReactDOM.render(
  <div>
    <ul>
      {peoples.map((people, index) => {
        return <li key={index}>{people}</li>;
      })}
    </ul>
  </div>,
  document.querySelector('#root3')
);
