document.querySelector('ul').addEventListener('mouseenter', () => {
  let dones = document.querySelectorAll('.done');
  for (let done of dones) {
    done.style.backgroundColor = 'lightgreen';
  }
});

document.querySelector('h2').addEventListener('click', () => {
  let ongoings = document.querySelectorAll('.ongoing');
  for (let ongoing of ongoings) {
    ongoing.style.backgroundColor = 'khaki';
  }
});
