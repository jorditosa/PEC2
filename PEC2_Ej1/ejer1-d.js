
const findOne = async (list, { key, value }) => {
    const element = list.find(element => element[key] === value);
    //se ha añadido la palabra await en element porque es una promesa asíncrona.
    await element ? element : { msg: 'ERROR: Element Not Found' };
};

// Las funciones onSuccess y onError se ejecutan cuando se cumple la condición del if. Ahora se ejecutan con await.
const onSuccess = async ({ name }) => console.log(`user: ${name}`);
const onError = async ({ msg }) => console.log(msg);

// Lista de usuarios.
const users = [
{
name: 'Carlos',
rol: 'Teacher'
},
{
name: 'Ana',
rol: 'Boss'
}
];

// Ejecuta todos los findOne en paralelo. El resultado es un array con los resultados de cada promesa. Esta función se ejecuta en paralelo, es decir, no espera a que se resuelva la primera promesa para ejecutar la segunda.
Promise.all([
    findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError }),
    findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError }),
 ])


console.log('findOne success');
console.log('findOne error');


/*
findOne success
findOne error
//wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
