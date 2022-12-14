let buttons = document.querySelectorAll('button');

function handleTitle(input) {
  title.innerHTML = input.value;
}

function handleClasses() {
  title.classList.toggle(this.dataset.class);

  if (title.classList.contains(this.dataset.class)) {
    this.innerHTML = this.innerHTML.replace('Ajouter', 'Retirer');
  } else {
    this.innerHTML = this.innerHTML.replace('Retirer', 'Ajouter');
  }
}
for (let button of buttons) {
  button.addEventListener('click', handleClasses);
}
