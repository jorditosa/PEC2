## ¿Por qué es el valor de this es undefined?

En JavaScript *this* es palabra clave reservada para referirse al objeto donde se está ejecutando el código.

El valor de *this* dentro de una función flecha siempre será el mismo que el valor de *this* en el contexto de la función, es decir, 


```js 
this.view.bindAddTodo(this.handleAddTodo);
```
El código original llama a handleAddTodo, en el contexto del objeto donde se llama la primera función, que en ese caso es la **class Todocontroller**.

si cambiamos la linea por el código propuesto:
```js 
this.view.bindAddTodo(this.service.addTodo);
```
Nos encontramos que su valor es undefined porque falla el contexto a que llamamos la función haciendola en forma de function declaration.

Las funciones flecha, el contexto al que llama *this* se diferencia porque estas determinan el valor this al momento de la creación de la función, en vez de el momento de ejecución de la función que hacen las funciones declarativas.
```js 
this.view.bindAddTodo(() => this.service.addTodo());
```
Con este ejemplo, y suena muy extraño, this hace referencia al objeto que contiene la función que contiene la declaración, es decir, hace referencia al objeto de this.view.bindAddTodo que el el objeto de **class todoView**.