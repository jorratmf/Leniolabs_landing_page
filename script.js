// Leniolabs
// 1. Dado un array de objetos que contiene personajes de Marvel, filtra los personajes que son miembros de X-Men
// 2. Dados dos arrays de objetos uno con miembros de Avengers y otro con miembros de X-Men, encuentra los personajes que están en ambos equipos.

// Filtrar personajes de X-Men
const filterButton = document.querySelector('.button--filter');
const xmenCharacterList = document.querySelector('.character-list--xmen');

filterButton.addEventListener('click', () => {
  const marvelCharacters = [
    { name: 'Iron Man', team: 'Avengers' },
    { name: 'Thor', team: 'Avengers' },
    { name: 'Wolverine', team: 'X-Men' },
    { name: 'Captain America', team: 'Avengers' },
    { name: 'Cyclops', team: 'X-Men' },
    { name: 'Black Widow', team: 'Avengers' },
    { name: 'Storm', team: 'X-Men' },
    { name: 'Hulk', team: 'Avengers' },
    { name: 'Rogue', team: 'X-Men' },
    { name: 'Spider-Man', team: 'Avengers' },
    { name: 'Jean Grey', team: 'X-Men' }
  ];

  const xmenMembers = marvelCharacters.filter(character => character.team === 'X-Men');

  // Actualizar lista de personajes de X-Men
  updateCharacterList(xmenCharacterList, xmenMembers);
});

// Encontrar personajes en ambos equipos (Avengers y X-Men)
const intersectionButton = document.querySelector('.button--intersection');
const commonCharacterList = document.querySelector('.character-list--common');

intersectionButton.addEventListener('click', () => {
  const avengersMembers = [
    { name: 'Iron Man', team: 'Avengers' },
    { name: 'Thor', team: 'Avengers' },
    { name: 'Wolverine', team: 'X-Men' },
    { name: 'Captain America', team: 'Avengers' },
    { name: 'Cyclops', team: 'X-Men' },
    { name: 'Black Widow', team: 'Avengers' },
    { name: 'Storm', team: 'X-Men' },
    { name: 'Hulk', team: 'Avengers' },
    { name: 'Rogue', team: 'X-Men' },
    { name: 'Spider-Man', team: 'Avengers' },
    { name: 'Jean Grey', team: 'X-Men' }
  ];

  const xmenMembers = [
    { name: 'Wolverine', team: 'X-Men' },
    { name: 'Cyclops', team: 'X-Men' },
    { name: 'Storm', team: 'X-Men' },
    { name: 'Rogue', team: 'X-Men' },
    { name: 'Jean Grey', team: 'X-Men' }
  ];

  const commonMembers = avengersMembers.filter(avenger =>
    xmenMembers.some(xmen => xmen.name === avenger.name)
  );

  // Actualizar lista de personajes comunes
  updateCharacterList(commonCharacterList, commonMembers);
});

// Función para actualizar la lista de personajes
function updateCharacterList(characterList, characters) {
  // Borra los personajes existentes en la lista
  characterList.innerHTML = '';

  // Agrega los personajes a la lista
  characters.forEach(character => {
    const listItem = document.createElement('li');
    listItem.textContent = character.name;
    characterList.appendChild(listItem);
  });
}