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
      newVegetablePrice: '',
      newVegetableName: '',
    };
    this.changeVegetableName = this.changeVegetableName.bind(this);
    this.deleteVegetable = this.deleteVegetable.bind(this);
  }
  handledDraftName(index, e) {
    this.state.vegetables[index].draftName = e.target.value;
    this.setState({});
  }

  changeVegetableName(index) {
    this.state.vegetables[index] = {
      name: this.state.vegetables[index].draftName,
      draftName: '',
    };
    this.setState({});
  }
  deleteVegetable(index) {
    this.state.vegetables.splice(index, 1);
    this.setState({});
  }
  handleChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    });
  }
  addVegetable() {
    if (this.state.newVegetableName && this.state.newVegetablePrice) {
      let newVegetable = { name: this.state.newVegetableName, draftName: '', price: this.state.newVegetablePrice };
      this.setState({
        vegetables: [...this.state.vegetables, newVegetable],
        newVegetablePrice: '',
        newVegetableName: '',
      });
    } else {
      console.log('remplir le formulaire svp');
    }
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
                <input
                  type="text"
                  placeholder="draftName"
                  value={vegetable.draftName}
                  onChange={(e) => this.handledDraftName(index, e)}
                />
                <button onClick={() => this.changeVegetableName(index)}>Envoyer</button>
                <button onClick={() => this.deleteVegetable(index)}>Supprimer</button>
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
          <input
            type="text"
            value={this.state.newVegetableName}
            data-name="newVegetableName"
            placeholder="Nom"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="number"
            data-name="newVegetablePrice"
            value={this.state.newVegetablePrice}
            placeholder="Prix"
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={() => this.addVegetable()}>Envoyer</button>
        </ul>
      </div>
    );
  }
}

//eventListener 5

class PrimaryButton extends React.Component {
  render(props) {
    return <div></div>;
  }
}

class Instruction5 extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/faq-functions.html">
            Documentation pour passer des fonctions à des props
          </a>
        </p>
      </div>
    );
  }
}

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      tasks: ['Faire la vaisselle', 'Ne pas manger de chips'],
    };

    this.updateTextValue = this.updateTextValue.bind(this);
  }

  render() {
    return (
      <div>
        <h1>event 5</h1>
        <Instruction5 />
        <ul>
          <li>
            Créer un composant PrimaryButton qui va prendre en props un texte à afficher et la fonction alertClick
          </li>
          <li>
            Depuis le composant PrimaryButton, lier la méthode reçue en props à son attribut onClick. Quand on clique
            sur le bouton, l'alerte devrait s'afficher
          </li>
        </ul>
        <ul>
          <li>Dans le composant App, créer une méthode alertPress</li>
          <li>
            Créer un composant SecondaryButton qui va prendre en props un texte à afficher et la nouvelle fonction
            alertPress
          </li>
          <li>Depuis le composant SecondaryButton, lier la méthode reçue en props à son attribut onClick.</li>
        </ul>
        <ul>
          <li>Dans le composant App il y a un state "textValue" et une méthode updateTextValue</li>
          <li>
            Créer un compoant TextField qui va rendre un input, et lui envoyer comme props la textValue, ainsi que la
            méthode updateTextValue
          </li>
          <li>Dans le composant TextField, attribuer la props textValue à la value de l'input</li>
          <li>
            Dans le composant TextField, lier le déclencheur onChange à la méthode reçue en props de manière à lui
            envoyer la valeur de cet input.
          </li>
          <li>Vérifier ici que le textValue se mette correctement à jour : {this.state.textValue}</li>
        </ul>
        <ul>
          <li>
            Créer un composant CreateTask de manière à ce que quand on clique sur son bouton, une nouvelle tâche est
            créée dans le state de App
          </li>
          {this.state.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }

  /**
   * Déclenche une alerte
   */
  alertClick() {
    alert('Cliqué !');
  }

  /**
   * Met à jour le state de textValue
   */
  updateTextValue(value) {
    this.setState({
      textValue: value,
    });
  }
}

//eventListener chall

class App6 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birds: [
        {
          name: 'Pingouin',
          age: 18,
          color: 'Noir',
          isColorDisplayed: true,
        },
        {
          name: 'Manchot',
          age: 15,
          color: 'Blanc',
          isColorDisplayed: false,
        },
        {
          name: 'Autruche',
          age: 8555,
          color: 'Blanc',
          isColorDisplayed: false,
        },
        {
          name: 'Colibri',
          age: 85,
          color: 'Bleu',
          isColorDisplayed: true,
        },
      ],
      newBirdName: '',
      newBirdAge: '',
      newBirdColor: '',
      newBirdColorDisplayed: '',
    };
  }

  handleBirdChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value,
    });
  }

  addBird() {
    if (this.state.newBirdName.length < 12 && this.state.newBirdName.length > 4 && this.state.newBirdAge) {
      if (['bleu', 'noir', 'blanc'].includes(this.state.newBirdColor)) {
        let newBird = {
          name: this.state.newBirdName,
          age: this.state.newBirdAge,
          color: this.state.newBirdColor,
          isColorDisplayed: true,
        };
        this.setState({
          birds: [...this.state.birds, newBird],
          newBirdName: '',
          newBirdAge: '',
          newBirdColor: '',
        });
      } else {
        alert('Veuillez entrer une de ces trois couleurs : bleu, noir, blanc');
      }
    } else {
      alert('Veuillez entrer un nom entre 4 et 12 caractères');
    }
  }

  deleteBird(index) {
    this.state.birds.splice(index, 1);
    this.setState({});
  }

  modifyColor(index, e) {
    if (['bleu', 'noir', 'blanc'].includes(e.target.previousSibling.value)) {
      this.state.birds[index].color = e.target.previousSibling.value;
      this.setState({});
      e.target.previousSibling.value = '';
    } else {
      alert('Veuillez entrer une de ces trois couleurs : bleu, noir, blanc');
    }
  }
  render() {
    return (
      <div>
        <h1>Challenge</h1>
        <ul>
          <li>Afficher chaque oiseau dans une boucle map</li>
        </ul>
        <ul>
          {this.state.birds.map((bird, index) => (
            <li key={index}>
              {bird.name} agé de {bird.age} {bird.isColorDisplayed && <span>de couleur {bird.color} </span>}{' '}
              <button onClick={() => this.deleteBird(index)}>Supprimer</button>
              <input type="text" placeholder="Nouvel Couleur" />
              <button onClick={(e) => this.modifyColor(index, e)}>Modifier Couleur</button>
            </li>
          ))}
        </ul>
        <h2>Pour chaque oiseau</h2>
        <ul>
          <li>Afficher son age, son nom, sa couleur</li>
          <li>Si sa propriété isColorDisplayed n'est pas égale à true, ne pas afficher sa couleur</li>
        </ul>
        <ul>
          <li>Créer un mécanisme qui permette d'ajouter un oiseau en utilisant un formulaire et des states</li>
          <li>Créer un mécanisme qui permette de supprimer un oiseau en utilisant un bouton supprimer</li>
          <li>Créer un mécanisme qui permette de modifier la couleur d'un oiseau en utilisant un input texte</li>
        </ul>
        <input
          type="text"
          data-name="newBirdName"
          placeholder="Nom"
          value={this.state.newBirdName}
          onChange={(e) => this.handleBirdChange(e)}
        />
        <input
          type="number"
          data-name="newBirdAge"
          placeholder="age"
          value={this.state.newBirdAge}
          onChange={(e) => this.handleBirdChange(e)}
        />
        <input
          type="text"
          data-name="newBirdColor"
          placeholder="couleur"
          value={this.state.newBirdColor}
          onChange={(e) => this.handleBirdChange(e)}
        />
        <input
          type="checkbox"
          data-name="newBirdColorDisplayed"
          checked={this.state.newBirdColorDisplayed}
          onChange={(e) => this.handleBirdChange(e)}
        />
        <button onClick={() => this.addBird()}>Envoyer</button>
        <p>Dans le mécanisme d'ajout, ajouter des conditions qui empêchent la sauvegarde de l'oiseau</p>
        <ul>
          <li>
            Si son nom mesure moins de 4 caractères de long, ou plus de 12 caractères de long, alerter "Veuillez entrer
            un nom entre 4 et 12 caractères"
          </li>
          <li>
            Si sa couleur n'est ni "bleu", ni "noir", ni "blanc", alerter "Veuillez entrer une de ces trois couleurs :
            bleu, noir, blanc"
          </li>
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
    <App5 />
    <App6 />
  </div>,
  document.querySelector('#root')
);
