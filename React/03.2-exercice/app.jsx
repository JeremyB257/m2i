//eventListener 1
class App1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>event 1</h1>
        <div>
          <p>Voici un bouton qui appelle une méthode "Bonjour"</p>
          <button onClick={this.hello}>Appeler Bonjour</button>
          <button onClick={this.hi}>Appeler Salut</button>
        </div>
        <div>
          <p>
            En vous basant sur l'exemple du bouton "bonjour", créer une autre fonction salut qui va déclencher une
            alerte "salut"
          </p>
          <p>Créer un nouveau bouton "Salut" qui va appeler cette méthode salut lorsque l'on clique dessus</p>
        </div>
        <div>
          <ul>
            <li>Créer un bouton "salut2" qui va aussi appeler la méthode hi lorsque l'on clique dessus</li>
            <li>
              Créer un span "salut3" qui va appeler la méthode hi lorsque l'on clique dessus. (Oui, c'est aussi possible
              de mettre un attribut onClick sur un span. Essayez !)
            </li>
            <li>Créer un input de type texte qui va appeler la méthode hi lorsque sa valeur change</li>
            <li>Créer un input de type checkbox qui va également appeler la méthode hi lorsque son état change</li>
          </ul>
        </div>
      </div>
    );
  }

  /**
   * Cette méthode alerte "Bonjour"
   */
  hello() {
    alert('Bonjour');
  }

  /**
   * Cette méthode alerte "Salut"
   */
  hi() {
    alert('Salut');
  }
}

//eventListener 2

class App2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: 'Pop',
      person: {
        name: 'LouisFilou',
        age: 51,
      },
    };
  }

  render() {
    return (
      <div>
        <h1>event 2</h1>
        <ul>
          <li>Créer une méthode displayAge qui affiche l'âge dans la console de la personne contenue dans le state.</li>
          <li>Créer un bouton qui appelle cette méthode lorsque l'on clique dessus.</li>
          <button onClick={() => this.displayAge()}>Affiche l'age</button>
        </ul>
        <a href="https://fr.reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers">
          Documentation pour envoyer des paramètres à une méthode
        </a>
        <p>Voici un bouton qui envoie comme paramètre "hello" à la méthode "display"</p>
        <button onClick={() => this.display('hello')}>Dire Hello</button>
        <ul>
          <li>
            Créer un bouton qui appelle la méthode "afficher" en lui envoyant comme paramètre "Tu es de la guimauve"
          </li>
          <button onClick={() => this.display('tu es de la guimauve')}>Dire "guimauve"</button>
        </ul>

        <p>Ici on affiche le contenu de currentText : {this.state.currentText}</p>
        <ul>
          <li>
            Créer une méthode changeText qui reçoit un texte en paramètre, et qui va le mettre dans le state currentText
          </li>
          <li>
            Créer un bouton qui appelle la méthode changeText, et lui passer en paramètre la chaîne de caractères
            suivante : "C'est une belle journée pour sauver des vies"
            <button onClick={() => this.changeText("C'est une belle journée pour sauver des vies")}>
              Change le texte
            </button>
          </li>
        </ul>
      </div>
    );
  }

  /**
   * Affiche le texte reçu en paramètre
   */
  changeText(text) {
    this.setState({ currentText: text });
  }

  display(text) {
    console.log(text);
  }
  displayAge() {
    console.log(this.state.person.age);
  }
}

//eventListener 3
class App3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: 'Ronron',
      notes: [1, 10, 15, 19, 20],
      isDisplayed: false,
    };
    this.removeLastElement = this.removeLastElement.bind(this);
    this.changeImageDisplay = this.changeImageDisplay.bind(this);
  }
  displayText(text) {
    console.log(text);
  }

  removeLastElement() {
    var newNotes = this.state.notes;
    newNotes.pop();

    this.setState({ notes: newNotes });
  }

  changeImageDisplay() {
    this.setState({ isDisplayed: !this.state.isDisplayed });
  }

  render() {
    return (
      <div>
        <h1>event 3</h1>
        <div>
          <p>Créer une méthode displayText qui prend en paramètre une chaîne de caractère</p>
          <p>
            Créer un bouton qui envoie la valeur de state de animal en paramètre, et qui appelle la méthode displayText
          </p>
          <button onClick={() => this.displayText(this.state.animal)}>boutton</button>
        </div>
        <div>
          <p>Créer un bouton qui va retirer le dernier élément de la liste des notes</p>
          <button onClick={this.removeLastElement}>boutton</button>
          <p>
            Il faut que le bouton appelle une méthode removeLastElement, qui va retirer le dernier élément des notes.
          </p>
          <p>
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop">
              Documentation sur l'utilisation de array.pop
            </a>
          </p>
          {this.state.notes.map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </div>
        <div>
          <p>Créer un bouton qui va afficher ou non cette image en changeant la valeur de isDisplayed</p>
          <button onClick={this.changeImageDisplay}>boutton</button>
          <p>Il faut que le bouton appelle une méthode changeImageDisplay, qui va changer le state deisDisplayed</p>
          {this.state.isDisplayed && (
            <img
              /*  style={{ display: this.state.isDisplayed ? 'block' : 'none' }} */
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg?fit=1200%2C500"
              alt="airbnb"
            />
          )}
        </div>
      </div>
    );
  }
}

//eventListener 4

class App4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vegetables: [
        {
          name: 'Courgette',
          draftName: '', // DraftName contient la valeur de l'input destiné à faire changer de nom à l'aliment.
          price: 5,
        },
        {
          name: 'Popotiron',
          draftName: '',
          price: 155,
        },
        {
          name: 'Baba',
          draftName: '',
          price: 99,
        },
        {
          name: 'Carotte',
          draftName: '',
          price: 1,
        },
      ],
    };
    this.changeVegetableName = this.changeVegetableName.bind(this);
  }

  changeVegetableName(index, e) {
    console.log(this.state.vegetables[index]);
    this.state.vegetables[index] = {
      name: e.target.previousSibling.value,
      draftName: '',
      price: this.state.vegetables[index].price,
    };
    console.log(this.state.vegetables[index]);
    this.setState({});
  }

  render() {
    return (
      <div>
        <h1>event 4</h1>
        <p>
          Je vous invite à lire ceci :{' '}
          <a href="https://www.robinwieruch.de/react-state-array-add-update-remove">
            Comment gérer les états avec les tableaux en React
          </a>
        </p>
        <ul>
          <li>Afficher la liste des légumes. Pour chaque légume, afficher son nom et son prix</li>
          <ul>
            {this.state.vegetables.map((vegetable, index) => (
              <li key={index}>
                {vegetable.name} : {vegetable.price}
                <input type="text" placeholder="draftName" />
                <button onClick={(e) => this.changeVegetableName(index, e)}>Envoyer</button>
              </li>
            ))}
          </ul>
          <li>Pour chaque légume, afficher un input de type texte qui prendra comme valeur son draftName</li>
          <li>
            Créer une méthode changeVegetableName, qui prend en paramètre un nouveau nom, et un index de légume à
            modifier.
          </li>
          <li>
            Pour chaque légume, créer un bouton qui va appeler changeVegetableName en lui envoyant l'index du légume à
            modifier
          </li>
          <li>
            La méthode changeVegetableName doit pouvoir identifier le légume dont le nom doit changer, mettre à jour son
            nom et remettre sont draftName à ''
          </li>
        </ul>
        <ul>
          <li>
            Créer une méthode deleteVegetable, qui prend en paramètre un index de tableau, et qui supprime cet élément
            du tableau en mettant le state à jour
          </li>
          <li>
            Pour chaque légume, créer un bouton "supprimer" qui va appeler la méthode deleteVegetable, en lui envoyant
            comme paramètre l'index du légume
          </li>
        </ul>
        <ul>
          <li>
            Créer deux propriétés de state : Une propriété 'newVegetableName' de type String, et une propriété
            'newVegetablePrice' de type String
          </li>
          <li>
            Créer une méthode addVegetable qui va créer un nouveau légume en se basant sur la valeur de ces deux
            propriétés
          </li>
          <li>
            Créer un petit formulaire composé de deux input, un input pour le nom du légume, et un autre pour le prix du
            légume.
          </li>
          <li>
            Chaque input doit être lié au state correspondant. L'input pour le nom du légume doit être lié à
            newVegetableName et l'input pour le type à newVegetablePrice
          </li>
          <li>Créer un bouton qui déclenche la fonction addVegetable</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </div>,
  document.querySelector('#root')
);
