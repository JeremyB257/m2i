//exercice 1

class App1 extends React.Component {
  render() {
    const song = 'Chachacha';
    const numberOfGoodReasonsToBeHere = 150;
    const disabledButton = <button disabled>Bouton</button>;

    return (
      <div>
        <p>{song}</p>
        <p>{numberOfGoodReasonsToBeHere}</p>
        {disabledButton}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App1 />
  </div>,
  document.querySelector('#root')
);

//exercice 2
class App2 extends React.Component {
  render() {
    const notes = [0, 4, 10, 20, 15];

    const person = {
      firstname: 'Boulette',
      lastname: 'Fromage',
      age: 15,
    };

    const actionsList = (
      <div>
        <button>Modifier</button>
        <button>Annuler</button>
      </div>
    );

    return (
      <div>
        <div>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <p>{person.firstname}</p>
          {actionsList}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App2 />
  </div>,
  document.querySelector('#root1')
);
