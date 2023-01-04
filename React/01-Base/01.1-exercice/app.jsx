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
  document.querySelector('#root2')
);

//exercice 3

class App3 extends React.Component {
  render() {
    const person = {
      name: 'Charly',
      age: 66,
      job: {
        name: 'Styliste',
        since: '29 Avril 2020',
      },
    };

    const shoppingCart = [
      {
        name: 'Concombre',
        type: 'Legume',
      },
      {
        name: 'Courgette',
        type: 'Legume',
      },
      {
        name: 'Endive',
        type: 'Beurk',
      },
      {
        name: 'Steak',
        type: 'Frais',
      },
      {
        name: 'Sanglier',
        type: null,
      },
    ];

    const series = this.catalogSeries();

    return (
      <div>
        <div>
          <p>Consulter la méthode someDiv. En vous basant sur le même modèle, remplissez la méthode validateButton</p>
          <p>Appeler la fonction validateButton pour générer le bouton en dessous de ce paragraphe</p>
          <p>{this.validateButton()}</p>
          <p>Afficher toutes les propriétés de la variable person</p>
          <p>Afficher toutes les propriétés du panier de courses</p>
          <p>Afficher toutes les propriétés du catalogue de séries</p>
        </div>
      </div>
    );
  }

  /**
   * Cette méthode renvoie une div au format JSX
   */
  someDiv() {
    return <div>Je suis une div</div>;
  }

  /**
   * Cette méthode renvoie un bouton Valider au format JSX
   */
  validateButton() {}

  /**
   * Cette méthode renvoie une liste des séries à regarder pendant le confinement
   */
  catalogSeries() {
    return [
      {
        name: 'One Sheep',
        episodes: 999999,
        note: 5,
      },
      {
        name: 'Vikongs',
        episodes: 5,
        note: 19,
      },
      {
        name: 'Spartakis, au bon lait de brebis',
        episodes: 15,
        note: 12,
      },
    ];
  }
}

ReactDOM.render(
  <div>
    <App3 />
  </div>,
  document.querySelector('#root3')
);
