// Se define una función llamada 'mostrarLista' que toma un parámetro 'array'.
// Si no se proporciona un argumento, se inicializa como un array vacío por defecto.
const mostrarLista = (array = []) => {
    // Verifica si el argumento ingresado es un array.
    if (!Array.isArray(array)) {
        console.log(`El argumento ingresado no es de tipo array`); // Imprime un mensaje de error si no es un array.
        return; // Sale de la función si el argumento no es un array.
    }

    // Verifica si el array está vacío.
    if (array.length === 0) {
        console.log(`Has ingresado una lista vacía`); // Imprime un mensaje si el array está vacío.
        return; // Sale de la función si el array está vacío.
    }

    // Itera sobre cada elemento del array y lo imprime en la consola.
    array.forEach(elemento => {
        console.log(elemento); // Imprime cada elemento del array.
    });

    // Imprime la longitud del array en la consola.
    console.log(`La longitud del array es ${array.length}`);
}

// Llama a la función 'mostrarLista' sin argumentos, lo que usará el valor por defecto (un array vacío).
mostrarLista(); // Imprime: Has ingresado una lista vacía

// Llama a la función 'mostrarLista' con un array de números como argumento.
mostrarLista([1, 2, 3, 4, 5]); 
// Imprime:
// 1
// 2
// 3
// 4
// 5
// La longitud del array es 5

// Se declara un array llamado 'usuarios' que contiene objetos con información sobre usuarios.
let usuarios = [
    { id: 1, nombre: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
    { id: 2, nombre: "Juan", email: "juan@test.com", password: "123", rol: "user" },
    { id: 3, nombre: "Romina", email: "romina@test.com", password: "123", rol: "admin" },
];

// Llama a la función 'mostrarLista' con el array 'usuarios' como argumento.
mostrarLista(usuarios); 
// Imprime:
// { id: 1, nombre: 'Luciana', email: 'luciana@test.com', password: '123', rol: 'user' }
// { id: 2, nombre: 'Juan', email: 'juan@test.com', password: '123', rol: 'user' }
// { id: 3, nombre: 'Romina', email: 'romina@test.com', password: '123', rol: 'admin' }
// La longitud del array es 3

// Llama a la función 'mostrarLista' con un número como argumento (no es un array).
mostrarLista(100); // Imprime: El argumento ingresado no es de tipo array

// Llama nuevamente a la función 'mostrarLista' con el array 'usuarios'.
mostrarLista(usuarios); 
// Imprime nuevamente los usuarios y su longitud:
// { id: 1, nombre: 'Luciana', email: 'luciana@test.com', password: '123', rol: 'user' }
// { id: 2, nombre: 'Juan', email: 'juan@test.com', password: '123', rol: 'user' }
// { id: 3, nombre: 'Romina', email: 'romina@test.com', password: '123', rol: 'admin' }
// La longitud del array es 3