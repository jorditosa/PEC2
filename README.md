## PEC 2

**Datos personales**  
jorditosa  
Jordi Sanchez Torras  
https://github.com/jorditosa/PEC2

## Ejercicio_1

En los primeros ejercicios, siguiendo las instrucciones, comienzo con eliminar los callbacks que queden englobados dentro la promesa con un resolve y un reject, que ha su vez hacen de un primer then y el catch. En estos pasos elimino la simulación del setTimeout porque ya tenemos una promesa con un comportamiento asíncrono, que no hace falta simular.

Seguidamente, en la preparación del async, declaro todas las funciones como asyncronas, y elimino la promesa de la función principal findOne, porque con esta declaración la función ya pasa a ser asíncrona.

Finalmente, para ejecutar promesas en paralelo, utilizo el PromiseAll y pongo las dos funciones findOne dentro de un array, y tal cúal se indica se llamaran a la vez sin que la segunda deba esperar al resultado de la primera.

## Ejercicio_2

Dificultad máxima con el MVC a pelo.
Primeramente he repasado los bindings existentes para la palabra reservada _this_ (explicitos, implicitos, lexical binding de las arrow functions, ...)

En un primer momento, preparé la app con las 3 capas **modelo**, **vista** y **controlador**, pero, documentandome y viendo que la **service** sirve para lógica de negocio, rehice la app con los 4 módulos.

_Model_ -> ahi simplemente se preparar el objeto, mediante clase, de los inputs que se van a introducir.  

_Service_ -> en esta capa he preparado todas las funciones básicas, añadir, editar, eliminar, obtener los datos, y la función que ejecutará cuando haya cualquier cambio en el listado de expenses.  

_Views_ -> en la capa de las vistas preparo todos los getter tanto de los nodos del DOM, como los propiamente métodos de la clase para obtener los datos de listas e inputs introducidos.  

Luego, preparo las dos funciones principales que renderizan el DOM, displayExpenses y displayInfo.  
La primera renderiza la lista con los items que se vayan añadiendo, eliminando o editando y la segunda simplemente muestra los contadores del balance, income y expense dinámicamente.  

En este capa también preparo los event listeners de todo cambio, en formato bindings para conectarlos cn el controlador.   

_Controllers_ -> Finalmente, en el controlador preparo los bindings para cada acción que podamos hacer, como los manejadores que conectan las funciones creadas en el SERVICE, con la VISTA.

## Ejercicio_3

Ejercicios a prueba y error. Los test realmente son unos excelentes chivatos para debuguear y poder ver exactamente porque falla el valor retornado de cualquier función.
