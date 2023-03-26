## PEC 2 

**Datos personales**
jorditosa
Jordi Sanchez Torras
https://github.com/jorditosa/PEC2  

**Ejercicio_1**
En los primeros ejercicios, siguiendo las instrucciones, comienzo con eliminar los callbacks que queden englobados dentro la promesa con un resolve y un reject, que ha su vez hacen de un primer then y el catch. En estos pasos elimino la simulación del setTimeout porque ya tenemos una promesa con un comportamiento asíncrono, que no hace falta simular.

Seguidamente, en la preparación del async, declaro todas las funciones como asyncronas, y elimino la promesa de la función principal findOne, porque con esta declaración la función ya pasa a ser asíncrona.

Finalmente, para ejecutar promesas en paralelo, utilizo el PromiseAll y pongo las dos funciones findOne dentro de un array, y tal cúal se indica se llamaran a la vez sin que la segunda deba esperar al resultado de la primera.

**Ejercicio_2**


**Ejercicio_3**



