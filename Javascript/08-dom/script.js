//exercice 1

document.body.style.backgroundColor = '#d5b9b9';

//exercice 2
let para = document.getElementsByTagName('p');
for (let i = 0; i < para.length; i++) {
  para[i].style.fontSize = '21px';
  //exercice 4
  para[i].innerHTML = para[i].innerHTML.replace(/Lorem/g, '<span style="color: green">Lorem</span>');
}

//exercice 3

let link = document.createElement('a');
link.innerHTML = 'Le lien en question';
link.href = 'https://developer.mozilla.org/';
link.target = '_blank';
link.style.color = '#ffff';
link.style.textDecoration = 'none';
document.body.appendChild(link);

function randColor() {
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let red = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(randColor());
document.body.style.backgroundColor = randColor();

//exercice 5
const img = document.querySelector('.imgExo5');

img.addEventListener('mouseenter', () => {
  img.src = './img/new-york.jpg';
});
img.addEventListener('mouseleave', () => {
  img.src = './img/avatar.png';
});

//exercice 6

const title = document.querySelector('.title');

title.addEventListener('click', () => {
  title.style.color = randColor();
  title.style.cursor = 'pointer';
});

//exercice 7
