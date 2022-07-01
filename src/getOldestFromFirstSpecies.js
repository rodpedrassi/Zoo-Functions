const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
// const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function getOldestFromFirstSpecies(id) {
  const idFirstAnimal = data.employees.find((func) => func.id === id)
    .responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === idFirstAnimal);
  let oldest = animal.residents[0];
  const oldestAnimal = () => {
    animal.residents.forEach((resident) => {
      if (resident.age > oldest.age) oldest = resident;
    });
    oldest = [oldest.name, oldest.sex, oldest.age];
    return oldest;
  };

  return oldestAnimal();
}

console.log(getOldestFromFirstSpecies(stephanieId));

module.exports = getOldestFromFirstSpecies;
