let buttons = document.querySelectorAll('button');

function handleTitle(input) {
  title.innerHTML = input.value;
}

function handleClasses(e) {
  title.classList.toggle(this.dataset.class);

  if (title.classList.contains(this.dataset.class)) {
    this.innerHTML = this.innerHTML.replace('Ajouter', 'Retirer');
  } else {
    this.innerHTML = this.innerHTML.replace('Retirer', 'Ajouter');
  }

  if (this.dataset.class == 'invert') {
    this.parentNode.children[2].click();
    this.parentNode.children[3].click();
    this.parentNode.children[4].click();
  }
}
for (let button of buttons) {
  button.addEventListener('click', handleClasses);
}

// Exercice
