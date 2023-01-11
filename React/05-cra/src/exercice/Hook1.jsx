const Header = () => {
  return <h1>Baba</h1>;
};

const Button = (props) => {
  return <button>{props.name}</button>;
};

function Footer(props) {
  return (
    <div style={{ border: 'solid', padding: '8px', margin: '8px 0' }}>Créé par le grand marnier. {props.text}</div>
  );
}

const Hook1 = () => {
  return (
    <div>
      <div>
        <Header />
        <p>Voici un composant de fonction Footer</p>
        <Footer text="Avec Amour" />
      </div>
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/hooks-intro.html">Composants fonctionnels</a>
        </p>
        <p>Créer un composant fonctionnel Header qui renvoie un h1 avec le texte "Baba".</p>
        <p>Créer un composant fonctionnel Button qui renvoie un button avec un texte reçu en props.</p>
        <Button name="valider" />
      </div>
    </div>
  );
};

export default Hook1;
