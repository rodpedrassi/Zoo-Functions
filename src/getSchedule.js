const data = require('../data/zoo_data');

const horarios = {
  Monday: {
    officeHour: '',
    exhibition: [''],
  },
  Tuesday: {
    officeHour: '',
    exhibition: [''],
  },
  Wednesday: {
    officeHour: '',
    exhibition: [''],
  },
  Thursday: {
    officeHour: '',
    exhibition: [''],
  },
  Friday: {
    officeHour: '',
    exhibition: [''],
  },
  Saturday: {
    officeHour: '',
    exhibition: [''],
  },
  Sunday: {
    officeHour: '', // Open from 8am until 6pm
    exhibition: [''],
  },
};

function isAnimal(animal) {
  return data.species.some((specie) => specie.name.includes(animal));
}
function isDaysOfWeek(dia) {
  if (Object.keys(horarios).includes(dia)) return true;
  return false;
}

function isMonday() {
  return {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
}

function getAnimalsPerDay(dia) {
  return data.species.filter((specie) => specie.availability.includes(dia))
    .map((specie) => `${specie.name}`);
}

function getScheduleByDay(scheduleTarget) {
  const horaAberto = data.hours[scheduleTarget];
  return {
    [scheduleTarget]: {
      officeHour: `Open from ${horaAberto.open}am until ${horaAberto.close}pm`,
      exhibition: getAnimalsPerDay(scheduleTarget),
    },
  };
}

function getScheduleAllDays() {
  const diasSemana = Object.keys(data.hours);
  return diasSemana.map((dia) => {
    if (dia === 'Monday') {
      return isMonday();
    }
    return getScheduleByDay(dia);
  }).reduce((acc, elemento) => {
    const objeto = { ...acc, ...elemento };
    return objeto;
  }, {});
}
// function getScheduleAllDays() {
//   const diasSemana = Object.keys(data.hours);
// }

function getSchedule(scheduleTarget) {
  if (isAnimal(scheduleTarget)) {
    return data.species
      .find((specie) => specie.name === scheduleTarget).availability;
  }
  if (isDaysOfWeek(scheduleTarget)) {
    if (scheduleTarget === 'Monday') return isMonday();
    return getScheduleByDay(scheduleTarget);
  }
  return getScheduleAllDays();
}

// console.log(getSchedule('Thursday'));

console.log(getSchedule());

module.exports = getSchedule;
