const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};

  return data.employees.find((funcionario) =>
    (funcionario.firstName === employeeName || funcionario.lastName === employeeName));
}
// console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
