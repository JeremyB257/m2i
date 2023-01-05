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

class TitleComponent extends React.Component {
  render() {
    return (
      // Ici pas besoin de div englobante car on ne rend qu'un seul élément principal : h1
      <h1>Ceci est un titre</h1>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleComponent />
        <Instruction />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
