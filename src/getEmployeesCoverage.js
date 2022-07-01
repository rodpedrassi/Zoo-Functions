const data = require('../data/zoo_data');

// const test1 = { name: 'Sharonda' };
// const test2 = { name: 'Spry' };
// const test3 = { id: 'c1f50212-35a6-4ecd-8223-f835538526c2' };

function getEmployeeByName(obj) {
  return data.employees.find((func) => func.firstName === obj.name
  || func.lastName === obj.name);
}
function checkValidId(obj) {
  return data.employees.some((func) => func.id === obj.id);
}

function getEmployeeById(obj) {
  if (checkValidId(obj)) {
    return data.employees.find((func) => func.id === obj.id);
  }
  throw new Error('Informações inválidas');
}

function getNameLocationSpeciesById(arrayIds) {
  const arraySpecies = [];
  const arrayNomes = [];
  const arrayLocation = [];
  for (let index = 0; index < arrayIds.length; index += 1) {
    arraySpecies.push(data.species.filter((specie) => specie.id === arrayIds[index])[0]);
    arrayNomes.push(arraySpecies[index].name);
    arrayLocation.push(arraySpecies[index].location);
  }
  const namesLocationsSpecies = {
    name: arrayNomes,
    location: arrayLocation,
  };
  return namesLocationsSpecies;
}
// const idsBixo = ['e8481c1d-42ea-4610-8e11-1752cfc05a46', 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'];
// console.log(getNameLocationSpeciesById(idsBixo));

function generateObjEmployee(obj) {
  const employee = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: getNameLocationSpeciesById(obj.responsibleFor).name,
    locations: getNameLocationSpeciesById(obj.responsibleFor).location,
  };
  return employee;
}

// function getAllEmployeesCoverage() {
//   const arrayEmployees = [];
//   const tamanho = data.employees.length;
//   for (let index = 0; index < tamanho; index += 1) {
//     arrayEmployees.push(generateObjEmployee(data.employees[index]));
//   }
//   return arrayEmployees;
// }

function getAllEmployeesCoverage() {
  const arrayEmployees = [];
  data.employees.forEach((employee) => {
    arrayEmployees.push(generateObjEmployee(employee));
  });
  return arrayEmployees;
}

function getEmployeesCoverage(obj) {
  if (typeof obj === 'undefined') {
    return getAllEmployeesCoverage();
  }
  if (Object.keys(obj).includes('name')) {
    return generateObjEmployee(getEmployeeByName(obj));
  }
  if (Object.keys(obj).includes('id')) {
    return generateObjEmployee(getEmployeeById(obj));
  }
}
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
