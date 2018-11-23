document.addEventListener('DOMContentLoaded', () => {
  const newDolphinForm = document.querySelector('#new-dolphin-form');
  newDolphinForm.addEventListener('submit', handleNewDolphinFormSubmit);

  const killAllDolphinsButton = document.querySelector('#kill-all');
  killAllDolphinsButton.addEventListener('click', handleKillAllDolphinsClick);
})

const handleNewDolphinFormSubmit = function (event) {
  event.preventDefault();

  const dolphinListItem = createDolphinListItem(event.target);
  const dolphinList = document.querySelector('#dolphin-list');
  dolphinList.appendChild(dolphinListItem);

  event.target.reset();
}

const createDolphinListItem = function (form) {
  const dolphinListItem = document.createElement('li');
  dolphinListItem.classList.add('dolphin-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  dolphinListItem.appendChild(name);

  const age = document.createElement('h3');
  age.textContent = form.age.value;
  dolphinListItem.appendChild(age);

  const breed = document.createElement('h4');
  breed.textContent = form.breed.value;
  dolphinListItem.appendChild(breed);

  return dolphinListItem;
}

const handleKillAllDolphinsClick = function (event) {
  const dolphinList = document.querySelector('#dolphin-list');
  dolphinList.innerHTML = '';
}
