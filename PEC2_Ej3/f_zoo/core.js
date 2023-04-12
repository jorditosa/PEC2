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
  const animals = data.animals;
  if (!options || !options.includeNames) {
    const locations = {};
    animals.forEach(animal => {
      if (!locations[animal.location]) {
        locations[animal.location] = [];
      }
      locations[animal.location].push(animal.name);
    });
    return locations;
  }

  animals.forEach(animal => {
    const locations = {};
    if (!locations[animal.location]) {
      locations[animal.location] = [];
    }
    if (options.includeNames) {
      locations[animal.location].push({
        [animal.name]: animal.residents.map(resident => resident.name)
      });
    }
    return locations;
  }
  );
}

function animalPopularity(rating) {
  const animals = data.animals;
  if (!rating) {
    const animalsByPopularity = {};
    animals.forEach(animal => {
      if (!animalsByPopularity[animal.popularity]) {
        animalsByPopularity[animal.popularity] = [];
      }
      animalsByPopularity[animal.popularity].push(animal.name);
    });
    return animalsByPopularity;
  }

  if (rating) {
    const animalsByRating = animals.filter(animal => animal.rating === rating);
    return animalsByRating.map(animal => animal.name);
  }
}

function animalsByIds(ids) {
  const animals = data.animals;
  if (!ids) return [];

  if (ids.length === 1) {
    const animal = animals.find(animal => animal.id === ids[0]);
    return [animal];
  }

  const animalsById = animals.filter(animal => ids.includes(animal.id));
  return animalsById;
  
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
  const employees = data.employees;
  const employee = employees.find(employee => employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName);
  const managers = employees.filter(manager => employee.managers.includes(manager.id));
  return managers;
}

function employeeCoverage(idOrName) {
  if (!idOrName) {
    const employees = data.employees;
    const employeesCoverage = {};
    employees.forEach(employee => {
      employeesCoverage[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map(id => animalByName(id).name);
    });
    return employeesCoverage;
  }

  if (idOrName) {
    const employee = employeesByIds([idOrName])[0];
    const employeeCoverage = {};
    employeeCoverage[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map(id => animalByName(id).name);
    return employeeCoverage;
  }

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
