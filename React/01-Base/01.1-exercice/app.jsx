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
          {Object.entries(person).map(([key, value]) => {
            return (
              <div key={key}>
                <p>
                  {key} : {person[key]}
                </p>
              </div>
            );
          })}
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
    const person1 = {
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

    const checkObject = (perso) => {
      if (typeof perso == 'object') {
        return `${perso.name} depuis le ${perso.since}`;
      } else {
        return perso;
      }
    };

    return (
      <div>
        <div>
          {this.someDiv()}
          <p>Consulter la m??thode someDiv. En vous basant sur le m??me mod??le, remplissez la m??thode validateButton</p>
          <p>Appeler la fonction validateButton pour g??n??rer le bouton en dessous de ce paragraphe</p>
          <p>{this.validateButton()}</p>
          <p>Afficher toutes les propri??t??s de la variable person</p>
          <div>
            {Object.entries(person1).map(([key, value]) => {
              return (
                <div key={key}>
                  <p>
                    {key} : {checkObject(person1[key])}
                  </p>
                </div>
              );
            })}
          </div>
          <p>Afficher toutes les propri??t??s du panier de courses</p>
          <div>
            {shoppingCart.map((cart, index) => {
              return (
                <div key={index}>
                  <p>
                    {cart.name} : {cart.type}
                  </p>
                </div>
              );
            })}
          </div>
          <p>Afficher toutes les propri??t??s du catalogue de s??ries</p>
          <div>
            {series.map((serie, index) => {
              return (
                <div key={index}>
                  <p style={{ color: 'rgba(0,0,255, 0.8' }}>
                    Nom : {serie.name}, Episodes : {serie.episodes}, Note : {serie.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  /**
   * Cette m??thode renvoie une div au format JSX
   */
  someDiv() {
    return <div>Je suis une div</div>;
  }

  /**
   * Cette m??thode renvoie un bouton Valider au format JSX
   */
  validateButton() {
    return <button>Je suis un button</button>;
  }

  /**
   * Cette m??thode renvoie une liste des s??ries ?? regarder pendant le confinement
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

//exercice 4

class App4 extends React.Component {
  render() {
    const cat = 'Ronron';

    const persons = [
      {
        name: 'Charly',
        age: 66,
        job: {
          name: 'Styliste',
          since: '29 Avril 2020',
        },
      },
      {
        name: 'Charly',
        age: 25,
        job: {
          name: 'Barman',
          since: '29 Avril 5050',
        },
      },
    ];

    const shoppingCart = [
      {
        name: 'Concombre',
        type: 'Legume',
        warehouse: {
          name: 'MisterEpices',
          size: 'petit',
        },
      },
      {
        name: 'Courgette',
        type: 'Legume',
        warehouse: {
          name: 'MisterEpices',
          size: 'petit',
        },
      },
      {
        name: 'Endive',
        type: 'Beurk',
        warehouse: {
          name: 'Parking Souterrain',
          size: 'Grand',
        },
      },
      {
        name: 'Steak',
        type: 'Frais',
      },
      {
        name: 'Sanglier',
        type: null,
        warehouse: null,
      },
    ];

    return (
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator">
            Documentation sur le rendu conditionnel ?? la vol??e en JSX
          </a>
        </p>
        <p>
          Apr??s avoir consult?? la documentation, afficher chat de mani??re conditionnelle seulement si son nom est
          diff??rent de "Ronron" et qu'il n'est pas nul et avec la notation &&
        </p>
        {cat != 'Ronron' && cat}
        <p>
          Afficher les propri??t??s de chaque personne ?? l'aide de map Pour chaque personne afficher son ??ge de mani??re
          conditionnelle en utilisant ? et :
        </p>
        {persons.map((person, index) => (
          <p key={index}>
            {person.name} {person.age > 65 ? 'senior' : person.age} {person.job.name.toLowerCase()} depuis{' '}
            {person.job.since}
          </p>
        ))}
        <p>
          Afficher les propri??t??s de chaque personne ?? l'aide de map Pour chaque personne afficher son ??ge de mani??re
          conditionnelle en utilisant ||
        </p>
        {persons.map((person, index) => (
          <p key={index}>
            {person.name} {(person.age > 65 && 'senior') || person.age} {person.job.name.toLowerCase()} depuis{' '}
            {person.job.since}
          </p>
        ))}
        <ul>
          <li>Si l'??ge de la personne est sup??rieur ?? 65, alors afficher "Senior"</li>
          <li>Sinon, afficher l'??ge de la personne</li>
        </ul>
        <p>Afficher tous les l??gumes dans une boucle map</p>
        {shoppingCart.map(
          (product, index) =>
            product.type == 'Legume' && (
              <div key={index}>
                <h2>{product.name}</h2>
              </div>
            )
        )}
        <p>Pour chaque l??gume, afficher son magasin de mani??re conditionnelle avec && </p>
        <ul>
          {shoppingCart.map((product, index) => (
            <li key={index}>
              {product.name} {product.warehouse && product.warehouse.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <App4 />
  </div>,
  document.querySelector('#root4')
);
