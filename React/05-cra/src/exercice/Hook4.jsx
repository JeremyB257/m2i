import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * Dispose d'un state isErrorMessageDisplayed mis à jour avec setErrorMessageDisplayState
 * isErrorMessageDisplay est un booléen
 * Dispose d'un state pseudo mis à jour avec setPseudo
 * pseudo est une chaîne de caractère
 * Le composant affiche le pseudo, un formulaire pour changer le pseudo, et un message d'erreur s'il fait plus de
 * 8 caractères
 * Le composant dispose d'un effet permettant d'afficher le message d'erreur si le nouveau pseudo change et fait
 * plus de 8 caractères de long.
 */
function PseudoField() {
  const [pseudo, setPseudo] = React.useState(''); // State pseudo, mis à jour avec setPseudo, et une valeur '' par défaut
  const [isErrorMessageDisplayed, setErrorMessageDisplayState] = React.useState(false);
  // State isErrorMessageDisplayed, mis à jour avec setErrorMessageDisplayState, valeur par défaut : false.

  // Quand pseudo change, ...
  React.useEffect(
    function () {
      if (pseudo.length > 8) {
        // Si le pseudo mesure plus de 8 caractères de long
        setErrorMessageDisplayState(true); // Afficher le message d'erreur
      } else {
        setErrorMessageDisplayState(false); // Sinon ne pas l'afficher
      }
    },
    [pseudo]
  ); // Ici on indique qu'on veut déclencher la fonction seulement quand pseudo change.
  // On peut en mettre plusieurs si on le souhaite !

  /**
   * Mettre à jour le state de pseudo
   */
  function updatePseudo(event) {
    setPseudo(event.target.value);
  }

  return (
    <form>
      <h2>Pseudo actuel : {pseudo}</h2>
      {isErrorMessageDisplayed && ( // Affichage du message d'erreur si le message est censé être affiché
        <p>Aaaah, c'est trop long là, ça va pas du tout !</p>
      )}
      <label>
        Pseudo :
        <input type="text" onChange={updatePseudo} />
      </label>
    </form>
  );
}

/**
 * Dispose d'un state mail mis à jour avec setMail
 * mail est une chaîne de caractères
 *
 * Dispose d'un state permettant de gérer l'affichage ou non du message d'erreur "Le mail n'a pas un format valide"
 *
 * Affiche un formulaire permettant de mettre le mail à jour.
 * Affiche une erreur si le mail n'a pas de format mail
 */
function MailField() {
  const [mail, setMail] = useState('');
  const [ErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (
      mail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  }, [mail]);

  const updateMail = (e) => {
    setMail(e.target.value);
  };

  return (
    <form>
      <h2>Mail actuel : {mail}</h2>
      {ErrorMessage && ( // Affichage du message d'erreur si le message est censé être affiché
        <p>L'email n'et pas valide !</p>
      )}
      <label>
        Mail :
        <input type="text" onChange={updateMail} />
      </label>
    </form>
  );
}

/**
 * State : age, mis à jour avec setAge
 * Affiche l'âge et un formulaire permettant de changer l'âge
 * Si l'âge est inferieur à 18, afficher "Wow, interdit aux mineurs ici !".
 */
function AgeField() {
  const [age, setAge] = useState(0);
  const [ErrorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (age < 18) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  }, [age]);

  function updateAge(e) {
    setAge(e.target.value);
  }
  return (
    <form>
      <h2>age actuel : {age}</h2>
      {ErrorMessage && ( // Affichage du message d'erreur si le message est censé être affiché
        <p>Wow, interdit aux mineurs ici !</p>
      )}
      <label>
        Age :
        <input type="number" onChange={updateAge} />
      </label>
    </form>
  );
}

function Hook4() {
  return (
    <div>
      <div>
        <a href="https://fr.reactjs.org/docs/hooks-effect.html">Doc</a>
        <p>Voici un composant PseudoField qui permet de saisir un pseudo et afficher une erreur s'il est trop long.</p>
        <PseudoField />
      </div>
      <div>
        <p>En vous inspirant du dernier exemple, remplir le composant MailField</p>
        <a href="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript">
          Vérifier si un email est au bon format
        </a>
        <MailField />
        <p>En vous inspirant du dernier exemple, Remplir le composant AgeField</p>
        <AgeField />
      </div>
    </div>
  );
}

export default Hook4;
