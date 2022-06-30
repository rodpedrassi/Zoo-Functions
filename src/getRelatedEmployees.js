const data = require('../data/zoo_data');

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
// const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
// const emeryId = 'b0dc644a-5335-489b-8a2c-4e086c7819a2';

// Para um employee ser manager o ID dele tem que estar na propriedade managers de outro employee

function isManager(id) {
  return data.employees.some((func) => func.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return (data.employees
      .filter((func) => func.managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`));
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees(olaId));

module.exports = { isManager, getRelatedEmployees };
