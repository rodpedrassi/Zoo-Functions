const data = require('../data/zoo_data');

const visitantes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
function countEntrants(entrants = visitantes) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

console.log(countEntrants());

function calculateEntry(entrants) {
  if (!Array.isArray(entrants)) return 0;
  const totalPessoas = countEntrants(entrants);
  const precoChild = data.prices.child;
  const precoAdult = data.prices.adult;
  const precoSenior = data.prices.senior;

  const total = (totalPessoas.child * precoChild)
  + (totalPessoas.adult * precoAdult) + (totalPessoas.senior * precoSenior);
  return total;
}
console.log(calculateEntry(visitantes));
module.exports = { calculateEntry, countEntrants };
