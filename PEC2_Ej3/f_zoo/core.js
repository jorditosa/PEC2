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

}

function animalMap(options) {
 
}

function animalPopularity(rating) {
 
}

function animalsByIds(ids) {
  // with no parameters, returns an empty array
  if (!ids) return [];
  
}

function animalByName(animalName) {
  //with no parameters, returns an empty object
  if (!animalName) return {};

}

function employeesByIds(ids = []) {
  const employees = data.employees;
  const employeesById = employees.filter(employee => ids.includes(employee.id));
  return employeesById;
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
