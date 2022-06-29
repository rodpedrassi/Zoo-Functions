const data = require('../data/zoo_data');

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
const bearsId = 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d';

function getSpeciesByIds(...ids) {
  if (ids === '') return [];
  const species = [];
  ids.forEach((id) => {
    species.push(data.species.find((animal) => animal.id === id));
  });
  return species;
}

console.log(getSpeciesByIds(lionId, elephantsId, bearsId));

module.exports = getSpeciesByIds;
