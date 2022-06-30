const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  const specieByName = species.find((specie) => specie.name === animal.specie);
  if (!animal.sex) {
    return specieByName.residents.length;
  }
  return specieByName.residents.filter((specie) => specie.sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
