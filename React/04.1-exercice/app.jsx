class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 0,
      degrees: 0,
    };

    this.incrementAge = this.incrementAge.bind(this);
    this.incrementTemperature = this.incrementTemperature.bind(this);
    this.decrementTemperature = this.decrementTemperature.bind(this);
  }

  /**
   * Cette méthode est appelée dès qu'un setState est effectué.
   * PrevState contient l'objet state de la classe avant le setState
   * Pour rappel, pour accéder à l'état courant, utiliser this.state.
   * PreviousProps n'est pas utilisé dans cet exercice
   */
  componentDidUpdate(previousProps, previousState) {
    if (this.state.age != previousState.age) {
      console.log(previousState.age);
      console.log(this.state.age);
      if (this.state.age >= 18) {
        console.log('La personne est majeure');
      }
    } else {
      if (this.state.degrees < 0) {
        console.log('Trop froid !');
      } else if (this.state.degrees > 0) {
        console.log('Trop chaud !');
      }
    }
  }

  render() {
    return (
      <div>
        <a href="https://fr.reactjs.org/docs/react-component.html#componentdidupdate">
          Documentation sur les cycles de vie
        </a>
        <div>
          <h2>Exercice 1</h2>
          <div>
            <h3>Age : {this.state.age}</h3>
            <p>Voici un bouton qui va augmenter l'âge de 1</p>
            <button onClick={this.incrementAge}>Age +1</button>
          </div>
          <Instructions exercice={1} />
        </div>
        <div>
          <h2>Exercice 2</h2>
          <h3>Degrés {this.state.degrees}</h3>
          <div>
            <p>Voici deux boutons qui permettent de changer la température</p>
            <div>
              <button onClick={this.incrementTemperature}> Plus chaud</button>
              <button onClick={this.decrementTemperature}> Plus froid</button>
            </div>
          </div>
          <Instructions exercice={2} />
        </div>
      </div>
    );
  }

  /**
   * Augmente l'âge de 1 dans le state
   */
  incrementAge() {
    this.setState({
      age: this.state.age + 1,
    });
  }

  /**
   * Augmente de 1 la temperature dans le state
   */
  incrementTemperature() {
    this.setState({
      degrees: this.state.degrees + 1,
    });
  }

  /**
   * Diminue de 1 la temperature dans le state
   */
  decrementTemperature() {
    this.setState({
      degrees: this.state.degrees - 1,
    });
  }
}

class Instructions extends React.Component {
  render() {
    return (
      <div>
        {this.props.exercice === 1 && (
          <div>
            <p>Remplir la méthode componentDidUpdate de manière à afficher l'ancien âge dans la console.</p>
            <p>Remplir la méthode componentDidUpdate de manière à afficher l'âge actuel dans la console.</p>
            <p>
              Si le nouvel âge est supérieur ou égal à 18, alors afficher en plus "La personne est majeure" dans
              componentDidUpdate
            </p>
            <p>Vous pouvez accéder au contenu de prevState comme pour un state classique</p>
          </div>
        )}
        {this.props.exercice === 2 && (
          <div>
            <p>
              Remplir la méthode componentDidUpdate de manière à ce que lorsque la température passe en dessous de 0, la
              console affiche "Trop froid !" et que lorsque la température passe au dessus de 0, la console affiche
              "Trop chaud !"
            </p>
          </div>
        )}
      </div>
    );
  }
}

const ERROR_ADULT = "Désolé, c'est interdit aux adultes ici !";
const ERROR_DEAD = "Désolé, c'est interdit aux bébés ici !";

class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
      age: 0,
      degrees: 0,
    };

    this.incrementAge = this.incrementAge.bind(this);
    this.incrementTemperature = this.incrementTemperature.bind(this);
    this.decrementTemperature = this.decrementTemperature.bind(this);
  }

  /**
   * Cette méthode est appelée à la création du composant
   */
  componentDidMount() {
    this.setState({ errorMessage: ERROR_DEAD });
  }

  /**
   * Cette méthode est appelée dès qu'un setState est effectué.
   * PrevState contient l'objet state de la classe avant le setState
   * Pour rappel, pour accéder à l'état courant, utiliser this.state.
   */
  componentDidUpdate(previousProps, previousState) {
    if (this.state.age >= 18 && previousState.errorMessage != ERROR_ADULT) {
      this.setState({ errorMessage: ERROR_ADULT });
    } else if (this.state.age <= 5 && previousState.errorMessage != ERROR_DEAD) {
      this.setState({ errorMessage: ERROR_DEAD });
    } else if (this.state.age > 5 && this.state.age < 18 && previousState.errorMessage != '') {
      this.setState({ errorMessage: '' });
    }

    if (this.state.degrees > 0 && previousState.degrees == 0) {
      console.log('Trop chaud !');
    } else if (this.state.degrees < 0 && previousState.degrees == 0) {
      console.log('Trop froid !');
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Exercice 1</h2>
            <h3>Age : {this.state.age}</h3>
            <p>Voici un bouton qui va augmenter l'âge de 1</p>
            <button onClick={this.incrementAge}>Age +1</button>
          </div>
          <p>{this.state.errorMessage}</p>
          <Instructions2 exercice={1} />
        </div>
        <div>
          <div>
            <h2>Exercice 2</h2>
            <h3>Degrés {this.state.degrees}</h3>
            <p>Voici deux boutons qui permettent de changer la température</p>
            <div>
              <button onClick={this.incrementTemperature}>Plus chaud</button>
              <button onClick={this.decrementTemperature}>Plus froid</button>
            </div>
          </div>
          <Instructions2 exercice={2} />
        </div>
      </div>
    );
  }

  /**
   * Augmente l'âge de 1 dans le state
   */
  incrementAge() {
    this.setState({
      age: this.state.age + 1,
    });
  }

  /**
   * Augmente de 1 la temperature dans le state
   */
  incrementTemperature() {
    this.setState({
      degrees: this.state.degrees + 1,
    });
  }

  /**
   * Diminue de 1 la temperature dans le state
   */
  decrementTemperature() {
    this.setState({
      degrees: this.state.degrees - 1,
    });
  }
}

class Instructions2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.exercice === 1 && (
          <div>
            <p>Remplir la méthode componentDidUpdate de manière à ce que :</p>
            <p>
              Si le nouvel âge est supérieur ou égal à 18, alors mettre à jour le state de errorMessage pour qu'il
              contienne le texte suivant : "Désolé, c'est interdit aux adultes ici !".
            </p>
            <p>
              Si le nouvel âge est inférieur ou égal à 5, alors mettre à jour le state de errorMessage pour qu'il
              contienne le texte suivant : "Désolé, c'est interdit aux bébés ici!"
            </p>
            <p>Sinon, mettre à jour le state de errorMessage pour qu'il contienne un texte vide.</p>
            <p>Remplir la méthode componentDidMount pour que le message apparaisse au chargement de la page.</p>
          </div>
        )}
        {this.props.exercice === 2 && (
          <div>
            <p>
              Remplir la méthode componentDidUpdate de manière à ce que lorsque la température passe en dessous de 0, la
              console affiche "Trop froid !" et que quand la température passe au dessus de 0, la console affiche "Trop
              chaud !"
            </p>
            <p>S'il fait déjà trop chaud quand on incrémente la température, ne rien afficher</p>
            <p>S'il fait déjà trop froid quand on décrémente la température, ne rien afficher</p>
            <p>
              Vous pouvez manipuler prevState pour connaître l'ancienne température et la comparer avec la nouvelle.
            </p>
          </div>
        )}
      </div>
    );
  }
}

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      factsOnCats: [],
    };

    this.fetchFacts = this.fetchFacts.bind(this);
  }

  /**
   * Cette méthode est appellée au chargement du composant
   */
  componentDidMount() {
    this.fetchFacts();
  }

  /**
   * Cette méthode est appelée dès qu'un setState est effectué.
   * PrevState contient l'objet state de la classe avant le setState
   * Pour rappel, pour accéder à l'état courant, utiliser this.state.
   * PreviousProps n'est pas utilisé dans cet exercice
   */
  componentDidUpdate(previousProps, previousState) {
    if (this.state.factsOnCats.length == 0) {
      this.fetchFacts();
    }
  }

  deleteFact(index) {
    this.state.factsOnCats.splice(index, 1);
    this.setState({});
  }
  render() {
    return (
      <div>
        <h1>challenge</h1>
        <h1>Fetch their soul !</h1>
        <Instructions3 />
        <ul>
          {this.state.factsOnCats.map((fact, index) => (
            <li key={index}>
              {fact.text}
              <button onClick={() => this.deleteFact(index)}>supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  /**
   * Simule une requête sur une API qui prend du temps et renvoie des faits sur les chats
   */
  fetchFacts() {
    setTimeout(() => {
      this.setState({
        factsOnCats: [
          { text: 'Un chat a fait tomber le sapin' },
          { text: 'Un chat est rentré chez lui pour manger des croquettes' },
          { text: 'Un chat est rentré par intérêt chez son maître' },
          { text: 'Un chat est finalement adorable' },
        ],
      });
    }, 300);
  }
}

class Instructions3 extends React.Component {
  render() {
    return (
      <div>
        <p>Dans le code se trouve une méthode fetchFacts</p>
        <p>
          Cette méthode va récupérer des faits (on simule une API) sur les chats et les mettre dans le state factsOnCats
        </p>
        <p>
          Afficher le contenu de factsOnCats. La méthode fetchFacts ne doit pas être modifiée et ne renvoie rien, il
          faut l'appeller quelque part.
        </p>

        <p>Pour chaque fait, ajouter un bouton qui permet de retirer ce fait du tableau factsOnCats</p>
        <p>
          Remplir componentDidUpdate de manière à ce que si factsOnCats est vide, alors on retourne automatiquement
          charger des chats.
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <App2 />
    <App3 />
  </div>,
  document.querySelector('#root')
);
