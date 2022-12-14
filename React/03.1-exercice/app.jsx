// props 1
class Instruction extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/components-and-props.html">
            Documentation sur les composants et les props
          </a>
        </p>
        <p>
          En vous basant sur les exemple TitleComponent et Instruction, créez votre propre component PrimaryButton qui
          contiendra un bouton simple avec un texte de votre choix.
        </p>
        <p>Depuis la classe App, appeler ce nouveau composant en vous inspirant des exemples</p>
        <p>Créer un nouveau composant TextField qui contiendra un input de type texte et un label de votre choix.</p>
        <p>Générer ce nouveau composant TextField depuis la classe App deux fois.</p>
      </div>
    );
  }
}

class PrimaryButton extends React.Component {
  render() {
    return <button>Boutton</button>;
  }
}

class TitleComponent extends React.Component {
  render() {
    return (
      // Ici pas besoin de div englobante car on ne rend qu'un seul élément principal : h1
      <h1>Ceci est un titre</h1>
    );
  }
}

class TextField extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleComponent />
        <Instruction />
        <PrimaryButton />
        <TextField />
      </div>
    );
  }
}

// props 2

class Instruction1 extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/components-and-props.html">
            Documentation sur les composants et les props
          </a>
        </p>

        <p>
          En vous basant sur l'exemple de Title, créer un composant Button qui prendra en props un texte, et qui sera
          affiché à l'intérieur de ce bouton.
        </p>
        <p>Appeler ce bouton deux fois en lui envoyant pour props "Bubu", et "bababa"</p>
        <p>Créer un composant Image qui va afficher une image, et qui prend une clé src en guise de props</p>
        <p>
          Appeler cette image en lui envoyant cette adresse comme prop de src :
          https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg
        </p>
      </div>
    );
  }
}

class Title1 extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class Button1 extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

class Img1 extends React.Component {
  render() {
    return <img alt="" src={this.props.text} />;
  }
}

class App1 extends React.Component {
  render() {
    return (
      <div>
        <Title1 title="Bonjour" />
        <Button1 text="Bubu" />
        <Button1 text="bababa" />
        <Img1 text="https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg" />
        <Instruction1 />
      </div>
    );
  }
}

// props 3

class Instruction2 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Créez un composant VegetablesCart et passez-lui en props les legumes.</p>
          <p>
            Dans le composant VegetablesCart, créer un composant Vegetable qui sera appelé autant de fois qu'il y a de
            légumes dans les props
          </p>
          <p>Dans le composant Vegetable, afficher le nom et le prix de chaque légume </p>
        </div>
        <div>
          <p>Créer un composant Students et passez-lui en props les élèves.</p>
          <p>
            Dans ce composant, créer un composant Student qui sera appelé autant de fois qu'il y a d'élèves dans les
            props
          </p>
          <p>Dans le composant Student, afficher l'élève dans une balise de votre choix</p>
        </div>
      </div>
    );
  }
}

class TitleComponent2 extends React.Component {
  render() {
    return <h1>Ceci est un titre</h1>;
  }
}

class VegetablesCart2 extends React.Component {
  vegetable(vege, index) {
    return (
      <li key={index}>
        {vege.name} : {vege.price} €
      </li>
    );
  }
  render() {
    return <ul>{this.props.vegetables.map((vege, index) => this.vegetable(vege, index))}</ul>;
  }
}

class Students2 extends React.Component {
  student(student, index) {
    return <li key={index}>{student.name}</li>;
  }
  render() {
    return <ul>{this.props.students.map((student, index) => this.student(student, index))}</ul>;
  }
}

class App2 extends React.Component {
  render() {
    const vegetables = listVegetables();
    const students = listStudents();

    return (
      <div>
        <TitleComponent2 />
        <VegetablesCart2 vegetables={vegetables} />
        <Students2 students={students} />
        <Instruction2 />
      </div>
    );
  }
}

/**
 * Cette fonction génère une liste de légumes en brut
 */
function listVegetables() {
  return [
    {
      name: 'Topinambour',
      price: 15,
    },
    {
      name: 'Pois chiche',
      price: 2,
    },
    {
      name: 'Salade',
      price: 999,
    },
    {
      name: 'Courgette',
      price: 1,
    },
    {
      name: 'Oignon',
      price: 2,
    },
  ];
}

/**
 * Cette fonction génère une liste d'élèves en brut
 */
function listStudents() {
  return [
    {
      name: 'Charly',
      age: 15,
    },
    {
      name: 'Bobbybillybouba',
      age: 12,
    },
    {
      name: 'JeanMichelDestroyer',
      age: 16,
    },
  ];
}

// props 4

class Profile4 extends React.Component {
  render() {
    return (
      <div>
        <p>Ceci est un faux profil, attention ! Et il génère un composant PrimaryButton !</p>
        <PrimaryButton text="Signaler" />
      </div>
    );
  }
}

class Instruction4 extends React.Component {
  render() {
    return (
      <div>
        <h1>props 4</h1>
        <p>Consultez le composant Profile pour découvrir comment inclure un composant dans un autre</p>
        <p>
          Dans le composant Form, inclure le composant PrimaryButton en lui passant la valeur "Valider" comme props de
          text.
        </p>
        <p>Créer un composant FormHeader qui affichera un h2 contenant un texte passé en props</p>
        <p>
          Dans le composant Form, générer le composant FormHeader en lui passant un titre de formulaire en props de
          text.
        </p>
      </div>
    );
  }
}

class Form4 extends React.Component {
  render() {
    return (
      <div>
        <FormHeader4 title="Titre du form" />
        <PrimaryButton4 text="Valider" />
      </div>
    );
  }
}
class FormHeader4 extends React.Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class PrimaryButton4 extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

class App4 extends React.Component {
  render() {
    return (
      <div>
        <Form4 />
        <Instruction4 />
      </div>
    );
  }
}

//props 5

class Instruction5 extends React.Component {
  render() {
    return (
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/composition-vs-inheritance.html">
            Documentation sur la délégation via les props
          </a>
        </p>
        <p>
          Le component TitleComponent prend des enfants à l'intérieur de sa balise. En vous basant sur TitleComponent,
          créer un composant Card qui prendra en enfant un titre h2, un paragraphe et un bouton.
        </p>
        <p>Depuis votre composant Card, générer les enfants de ce composant via les props comme dans TitleComponent</p>
        <p>Créer un composant Footer qui sera appelé à la fin de notre composant App.</p>
        <p>Donner à ce composant des balises enfants dont un paragraphe et une liste.</p>
        <p>Dans le composant Footer, générer ces enfants via les props.</p>
      </div>
    );
  }
}

class TitleComponent5 extends React.Component {
  render() {
    return (
      // Tous les éléments contenus dans children sont rendus ici
      <h1>{this.props.children}</h1>
    );
  }
}

class Card5 extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
class Footer extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
class App5 extends React.Component {
  render() {
    return (
      <div>
        <TitleComponent5>Je suis un children de titleComponent</TitleComponent5>
        <TitleComponent5>
          <span>Nous sommes des children</span>
          <span>De Title Component</span>
        </TitleComponent5>
        <Card5>
          <h2>titre</h2>
          <p>paragraphe</p>
          <button>button</button>
        </Card5>
        <Instruction5 />
        <Footer>
          <p>paragraphe footer</p>
          <ul>
            <li>liste 1</li>
            <li>liste 2</li>
          </ul>
        </Footer>
      </div>
    );
  }
}

//state 1

class App6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Matthieu',
      cat: {
        name: 'Bianca',
        age: 6,
      },
      song: 'un son',
      bananaNumber: 10,
    };
  }

  render() {
    return (
      <div>
        <p>Afficher la propriété name du state</p>
        <p>{this.state.name}</p>
        <p>Afficher la propriété cat du state avec ses attributs</p>
        <p>
          {this.state.cat.name} : {this.state.cat.age} ans
        </p>
        <div>
          <h2>Le cat est là</h2>
        </div>
        <p>Créer une propriété song dans le state, donnez-lui la valeur de votre choix, et affichez-là ici.</p>
        <p>{this.state.song}</p>
        <p>Créer une propriété bananaNumber dans le state, donnez-lui la valeur de votre choix, et affichez-la ici.</p>
        <p>{this.state.bananaNumber}</p>
      </div>
    );
  }
}

//state 2

class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: 'Je ne peux pas je suis à Nagano',
    };

    // Indispensable pour pouvoir manipuler le state depuis incrementCounter
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.replaceByBaba = this.replaceByBaba.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <a href="https://fr.reactjs.org/docs/handling-events.html">Documentation sur les gestions d'événements</a>
          <p>Voici un élément Counter, cliquez sur le bouton pour découvrir son comportement</p>
          <h2>Compteur : {this.state.counter}</h2>
          <button onClick={this.incrementCounter}>Ajouter + 1</button>
          <button onClick={this.decrementCounter}>Retirer - 1</button>
        </div>
        <div>
          <p>Remplir la fonction decrementCounter</p>
          <p>Lier la fonction decrementCounter dans le constructor comme pour incrementCounter</p>
          <p>Créer un nouveau bouton "Retirer -1" qui va déclencher une fonction decrementCounter</p>
        </div>
        <div>
          <p>Remplir la fonction replaceByBaba</p>
          <p>Lier la fonction replaceByBaba dans le constructor</p>
          <p>Créer un nouveau bouton Remplacer qui va déclencher une fonction replaceByBaba</p>
          <h2>{this.state.text}</h2>
          <button onClick={this.replaceByBaba}>Changer le texte</button>
        </div>
      </div>
    );
  }

  /**
   * Incrémente la valeur du compteur du state
   */
  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  /**
   * Décrémente la valeur du compteur du state
   */
  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  /**
   * Remplace la valeur de text par "Baba"
   */
  replaceByBaba() {
    this.setState({ text: 'Baba' });
  }
}

// state 3

class App8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textExample: 'baba',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <p>Voici un input qui est lié au state textExample</p>
          <input value={this.state.textExample} onChange={this.handleChange} />
          <p>Voici sa valeur {this.state.textExample}</p>
        </div>
        <div>
          <p>Créer un input de type texte qui permettra de saisir un texte et qui aura pour valeur le texte du state</p>
          <p>
            Créer une méthode "handleTextChange" qui sera déclenchée à chaque fois que le texte changera. Cette méthode
            sera appelée avec le déclencheur onChange de l'input
          </p>
          <input value={this.state.text} onChange={this.handleTextChange} />
          <p>Afficher la valeur de texte ici : {this.state.text}</p>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      textExample: event.target.value,
    });
  }
  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
}

//state chall

class Animals extends React.Component {
  render() {
    return (
      <ul>
        {this.props.animals.map((animal, index) => (
          <li key={index}>
            {animal.name} : {animal.type}
          </li>
        ))}
      </ul>
    );
  }
}

class App9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        {
          name: 'Trolilo',
          type: 'troll',
        },
        {
          name: 'Sheep sheep',
          type: 'poisson',
        },
        {
          name: 'Donald Trump',
          type: 'orange',
        },
      ],
      newAnimalType: '',
      newAnimalName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveAnimal = this.saveAnimal.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    });
  }

  saveAnimal() {
    if (this.state.newAnimalName && this.state.newAnimalType) {
      let newAnimal = { name: this.state.newAnimalName, type: this.state.newAnimalType };
      this.setState({
        animals: [...this.state.animals, newAnimal],
        newAnimalType: '',
        newAnimalName: '',
      });
    } else {
      console.log('remplir le formulaire svp');
    }
  }

  render() {
    return (
      <div>
        <Animals animals={this.state.animals} />
        <input
          value={this.state.newAnimalName}
          type="text"
          data-name="newAnimalName"
          placeholder="Nom nouvel animal"
          onChange={this.handleChange}
        />
        <input
          value={this.state.newAnimalType}
          type="text"
          data-name="newAnimalType"
          placeholder="Type nouvel animal"
          onChange={this.handleChange}
        />
        <button onClick={this.saveAnimal}>Sauvegarder</button>
        <ul>
          <li>Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type.</li>
          <li>
            Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la
            valeur de newAnimalType est mise à jour.
          </li>
          <li>
            Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même
            fonctionnement.
          </li>
          <li>Créer une méthode vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.</li>
          <li>
            Remplir la méthode saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un
            nouvel objet animal, que la méthode mette le tableau des animaux à jour en ajoutant le nouvel objet animal à
            la fin et qu'une fois que l'animal a été créé, la méthode vide les champs newAnimalType et newAnimalName.
          </li>
          <li>Bon courage !</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <App />
    <App1 />
    <App2 />
    <App4 />
    <App5 />
    <App6 />
    <App7 />
    <App8 />
    <App9 />
  </div>,
  document.querySelector('#root')
);
