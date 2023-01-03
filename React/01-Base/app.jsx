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

//exemple 3 avec list

let peoples = ['Marina', 'Fiorella', 'Matthieu'];
let title = <h2>Liste des contacts</h2>;
ReactDOM.render(
  <div>
    {title}
    <ul>
      {peoples.map((people, index) => (
        <li key={index}>{people}</li>
      ))}
    </ul>
  </div>,
  document.querySelector('#root3')
);

//exemple 4 avec compposant
class Welcome extends React.Component {
  render() {
    return <h1>Bonjour</h1>;
  }
}
const Goodbye = () => {
  return <h1> Au revoir</h1>;
};

ReactDOM.render(
  <div>
    <Welcome />
    <Goodbye />
  </div>,
  document.querySelector('#root4')
);
