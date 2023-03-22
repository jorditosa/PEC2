// Llamada la función, se ejecuta el código de la función, pero no se ejecuta el código de la función que se pasa como parámetro. Esto es así porque la función que se pasa como parámetro no se ejecuta, sino que se pasa como referencia a la función que la recibe. Por tanto, la función que recibe la función como parámetro, la ejecuta cuando le conviene, en este caso, cuando se cumple la condición del if.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    setTimeout(() => {
        // find devuelve el primer elemento de un array que cumple con la condición implementada por la función proporcionada.
      const element = list.find(element => element[key] === value);
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  };
  
  // Las funciones onSuccess y onError se ejecutan cuando se cumple la condición del if.
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  const onError = ({ msg }) => console.log(msg);
  
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
  