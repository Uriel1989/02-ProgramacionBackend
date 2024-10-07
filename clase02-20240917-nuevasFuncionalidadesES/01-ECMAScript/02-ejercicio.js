// Se declara un array constante llamado 'objetos'.
// Este array contiene dos objetos, cada uno representando una colección de productos y sus cantidades.
const objetos = [
    {
        // Primer objeto que representa una colección de productos
        manzanas: 3, // Cantidad de manzanas en el primer objeto
        peras: 2,    // Cantidad de peras en el primer objeto
        carne: 1,    // Cantidad de carne en el primer objeto
        jugos: 5,    // Cantidad de jugos en el primer objeto
        dulces: 2    // Cantidad de dulces en el primer objeto
    },
    {
        // Segundo objeto que representa otra colección de productos
        manzanas: 1, // Cantidad de manzanas en el segundo objeto
        sandias: 1,  // Cantidad de sandías en el segundo objeto
        huevos: 6,   // Cantidad de huevos en el segundo objeto
        jugos: 1,    // Cantidad de jugos en el segundo objeto
        panes: 4     // Cantidad de panes en el segundo objeto
    }
];

// Este array 'objetos' contiene dos elementos, cada uno representando un conjunto de productos con sus respectivas cantidades.
// Los objetos permiten agrupar propiedades relacionadas (en este caso, diferentes tipos de productos) en una estructura fácil de manejar.

// Ejemplo de cómo acceder a los datos en el array:
console.log(objetos[0].manzanas); // Imprime 3 (cantidad de manzanas del primer objeto)
console.log(objetos[1].jugos);     // Imprime 1 (cantidad de jugos del segundo objeto)