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
ReactDOM.render(
  <div>
    <App1 />
    <App2 />
  </div>,
  document.querySelector('#root')
);
