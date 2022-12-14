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

function randColor(a = 1) {
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let red = Math.floor(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue}, ${a})`;
}

console.log(randColor());
document.body.style.backgroundColor = randColor(0.4);

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

const btnColor = document.querySelector('.btnColor');

btnColor.addEventListener('click', () => {
  document.body.style.backgroundColor = randColor(0.4);
});

//exercice 8
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(e.target[0].value);
});

//exercice 9

const formInput = document.querySelector('.formInput');

formInput.addEventListener('input', (e) => {
  title.innerHTML = e.target.value;
});

//exercice 10
const mouseDiv = document.querySelector('.mouse');
let bool = false;

mouseDiv.addEventListener('click', (e) => {
  bool = true;
  mouseDiv.style.borderRadius = '50px';
});

mouseDiv.addEventListener('dblclick', (e) => {
  bool = false;
  mouseDiv.style.borderRadius = '0px';
});

document.body.addEventListener('mousemove', (e) => {
  if (bool) {
    mouseDiv.style.top = `${e.pageY}px`;
    mouseDiv.style.left = `${e.pageX}px`;
  }
});
