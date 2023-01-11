import React from 'react';
import { useState } from 'react';

function Clicker(props) {
  const [isClicked, setIsClickedState] = React.useState(false); // False est la valeur par défaut du state isClicked
  let displayedText = 'Cliquez-moi !';

  if (isClicked) {
    displayedText = props.text;
  }

  /**
   * Update the state isClicked and set it to true
   */
  function handleButtonClick() {
    setIsClickedState(true); // True est la nouvelle valeur du state isClicked
  }

  return (
    <div style={{ border: 'solid', padding: '8px', margin: '8px 0' }}>
      <button onClick={handleButtonClick}>{displayedText}</button>
    </div>
  );
}

const Hook2 = () => {
  const [counter, setCounter] = useState(0);
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');

  /**
   * Dispose d'un state counter, qui est mis à jour avec setCounter.
   * Affiche la valeur du state de counter
   * Affiche un bouton qui déclenche une fonction handleClick
   * La fonction handleClick doit incrémenter le counter
   */
  function Additionner() {
    setCounter(counter + 1);
  }

  /**
   * Dispose d'un state firstname qui est mis à jour avec setFirstname
   * Affiche la valeur de firstname
   * Affiche un champ de texte qui contient la valeur de firstname et dont le onChange déclenche une fonction updateName
   * La fonction updateName doit mettre à jour le state de firstname avec la nouvelle valeur contenue dans l'Input
   */
  function FirstnameInput(e) {
    setFirstname(e.target.value);
  }

  /**
   * Dispose d'un state email qui est mis à jour avec setEmail
   * Affiche la valeur de email
   * Affiche un champ de texte qui contient la valeur de email et dont le onChange déclenche une fonction updateEmail
   * La fonction updateEmail doit mettre à jour le state de email avec la nouvelle valeur contenue dans l'Input
   */
  function EmailInput(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <div>
        <p>Voici un composant Clicker qui change de texte quand on clique dessus</p>
        <Clicker text="Je suis changé !" />
      </div>
      <div>
        <p>
          <a href="https://fr.reactjs.org/docs/hooks-state.html">
            Documentation sur le changement de state en composant fonctionnel
          </a>
        </p>
      </div>
      <div>
        <p>Remplir le composant Additionner</p> <span>{counter}</span> <button onClick={Additionner}>augmenter</button>
        <p>Remplir le composant FirstnameInput</p>
        <span>{firstname}</span> <input onChange={(e) => FirstnameInput(e)} />
        <p>Remplir le composant EmailInput</p>
        <span>{email}</span> <input onChange={(e) => EmailInput(e)} />
      </div>
    </div>
  );
};

export default Hook2;
