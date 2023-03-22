// crear la función findOne con async/await
const findOne = async (list, { key, value }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const element = list.find(element => element[key] === value);
            element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
        }, 2000);
    });
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

  // En primer lugar, todo comienza con la llamada de la función findOne, que recibe como parámetros una lista, un objeto con dos propiedades (key y value) y un objeto con dos propiedades (onSuccess y onError).
  console.log('findOne success');
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  // En segundo lugar, se ejecuta el código de la función findOne, que ejecuta el código de la función que se pasa como parámetro (onSuccess y onError).
  console.log('findOne error');
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  
  /*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
  