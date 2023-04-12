const data = require('./data');

function entryCalculator(entrants = 0) {
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
  if (!species) {
    const animalsCount = {};
    animals.forEach(animal => {
      animalsCount[animal.name] = animal.residents.length;
    });
    return animalsCount;
  }

  const animal = animals.find(animal => animal.name === species.toLowerCase());
  if (!animal) {
    console.log("Invalid animal species name");
    return;
  }
  return animal.residents.length;
}

function animalMap(options) {
  if (!options || !options.includeNames) {
    const locations = {};
    data.animals.forEach(animal => {
      if (!locations[animal.location]) {
        locations[animal.location] = [];
      }
      locations[animal.location].push(animal.name);
    });
    return locations;
  }
}

function animalPopularity(rating) {
  const animals = data.animals;
  if(!rating) {
    const animalsByPopularity = animals.sort((a, b) => b.residents.length - a.residents.length);
    return animalsByPopularity;
  }

  if (rating) {
    const animalsByRating = animals.filter(animal => animal.rating === rating);
    return animalsByRating;
  }
}

function animalsByIds(ids) {
  // with no parameters, returns an empty array
  if (!ids) return [];
  
}

function animalByName(animalName) {
  if (!animalName) return {};
  const animals = data.animals;
  const animal = animals.find(animal => animal.name === animalName);
  return animal;
}

function employeesByIds(ids = []) {
  const employees = data.employees;
  const employeesById = employees.filter(employee => ids.includes(employee.id));
  return employeesById;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const employees = data.employees;
  const employee = employees.find(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return employee;
}

function managersForEmployee(idOrName) {
  
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
