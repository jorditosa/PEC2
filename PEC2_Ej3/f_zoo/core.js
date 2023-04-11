function entryCalculator(entrants) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * 49.99 + Senior * 24.99 + Child * 20.99;
}

function schedule(dayName) {
  const days = {
    Monday: 'CLOSED',
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm'
  };
  if (dayName) {
    return { [dayName]: days[dayName] };
  }
  return days;
}

function animalCount(species) {
  const animals = data.animals;
  const animalsCount = animals.reduce((acc, animal) => {
    const { name, residents } = animal;
    acc[name] = residents.length;
    return acc;
  }
  , {});
  if (species) {
    return animalsCount[species];
  }
  return animalsCount;
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  const animals = data.animals;
  const animalsByPopularity = animals.reduce((acc, animal) => {
    const { name, residents } = animal;
    const popularity = residents.length;
    if (popularity >= rating) {
      acc[name] = popularity;
    }
    return acc;
  }
  , {});
  return animalsByPopularity;
}

function animalsByIds(ids) {
  const animals = data.animals;
  const animalsById = animals.filter(animal => ids.includes(animal.id));
  return animalsById;
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
