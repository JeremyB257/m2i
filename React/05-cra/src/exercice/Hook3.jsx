import { useState } from 'react';

/**
 * Dispose d'un state User utilisant le hook d'état, avec un objet vide {} comme valeur par défaut
 * User est un objet avec deux propriétés : firstname, et mail
 * User est mis à jour à travers une méthode setUser
 * Le composant affiche les informations de l'utilisateur et un formulaire
 * Le formulaire propose de changer les informations de l'utilisateur (firstname et mail).
 */
function EditProfile() {
  const [user, setUser] = useState({ firstname: '', mail: '' });

  function changeUser(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  return (
    <div>
      <p>{user.firstname}</p>
      <p>{user.mail}</p>
      <form action="">
        <input type="text" id="firstname" placeholder="firstname" onChange={(e) => changeUser(e)} />
        <input type="text" id="mail" placeholder="mail" onChange={(e) => changeUser(e)} />
      </form>
    </div>
  );
}

/**
 * Dispose d'un state animals mis à jour avec setAnimals
 * animals est un tableau de chaîne de caractères, vide par défaut
 * Le composant affiche la liste des animaux et un formulaire.
 * Devant chaque animal, afficher un bouton "Supprimer" qui permettra de supprimer un animal
 * Le formulaire propose d'ajouter un nouvel animal à la liste
 */
function AnimalsList() {
  const [animals, setAnimals] = useState([]);

  const addAnimal = (e) => {
    e.preventDefault();

    setAnimals([...animals, e.target.children[0].value]);
  };
  return (
    <>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
      <form action="" onSubmit={(e) => addAnimal(e)}>
        <input type="text" placeholder="nom animal" />
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}

/**
 * Dispose d'un state notes, mis à jour avec setNotes
 * notes est un tableau d'entiers positifs, vide par défaut
 * Le composant affiche la liste des notes, ainsi que la moyenne des notes, et un formulaire
 * Le formulaire propose d'ajouter une nouvelle note à la liste en utilisant setNotes
 */
function Notes() {
  const [notes, setNotes] = useState([]);

  const addNote = (e) => {
    e.preventDefault();
    console.log(e.target.children[0].value);
    setNotes([...notes, parseInt(e.target.children[0].value)]);
  };

  return (
    <>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
        {notes.length > 0 && <li>moyenne :{notes.reduce((a, b) => a + b, 0) / notes.length}</li>}
      </ul>
      <form action="" onSubmit={(e) => addNote(e)}>
        <input type="number" placeholder="Note" />
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}

function Hook3() {
  return (
    <div>
      <h3>
        Attention à bien utiliser le Spread opérator <pre>...</pre> pour ré-assigner vos objets et arrays !
      </h3>
      <div>
        <p>
          <a href="https://medium.com/@thejasonfile/using-the-spread-operator-in-react-setstate-c8a14fc51be1">
            Article sur le Spread opérator
          </a>
        </p>

        <p>Incorrect : </p>
        <pre>const updatedNotes = notes; /* Manipulation des notes */ this.setNotes(updatedNotes);</pre>

        <p>Correct</p>
        <pre>const updatedNotes = [...notes]; /* Manipulation des notes */ this.setNotes(updatedNotes);</pre>

        <p>Pour les objets</p>
        <p>Correct : </p>
        <pre>const updatedUser = {'{...User}'}; /* Manipulation de updatedUser */ this.setUser(updatedUser);</pre>
      </div>
      <div>
        <p>Remplir le composant EditProfile</p>
        <EditProfile />
        <p>Remplir le composant AnimalsList</p>
        <AnimalsList />
        <p>Remplir le composant Notes</p>
        <Notes />
      </div>
    </div>
  );
}
export default Hook3;
