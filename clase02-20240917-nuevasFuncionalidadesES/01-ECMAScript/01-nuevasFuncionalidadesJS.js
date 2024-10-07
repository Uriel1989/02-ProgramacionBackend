// Ejemplo de uso de includes
let nombres = ["Juan", "Mariana", "Carlos", "Sabrina", "Veronica"];
// La función includes se puede usar para verificar si un elemento está presente en el array.
// Ejemplo: 
// console.log(nombres.includes("Carlos")); // Imprime: true
// console.log(nombres.includes("Pedro")); // Imprime: false

// Operador potencia (no hay código aquí, pero se puede usar el operador ** para elevar un número a una potencia).
// Ejemplo: 
// let resultado = 2 ** 3; // 2 elevado a la 3 es 8

// Métodos Object
let usuarios = [
    { id: 1, nombre: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
    { id: 2, nombre: "Juan", email: "juan@test.com", password: "123", rol: "user" },
    { id: 3, nombre: "Romina", email: "romina@test.com", password: "123", rol: "admin" },
];
// Este array contiene objetos que representan usuarios con propiedades como id, nombre, email, etc.

// Operador spread / operador rest
let usuarioRequest = { nombre: "Diana", apellido: "Rojas", email: "drojas@test.com", edad: 29 };
let idAsignado = 100;
let nuevoUsuario = {}; // Se puede utilizar el operador spread para copiar propiedades de usuarioRequest a nuevoUsuario.
// Ejemplo:
// nuevoUsuario = { ...usuarioRequest, id: idAsignado }; // Crea un nuevo objeto que incluye todas las propiedades de usuarioRequest y añade 'id'.

let numeros1 = [1, 2, 3, 4];
let numeros2 = [5, 6, 7, 8];
let todosLosNumeros = [...numeros1, ...numeros2]; // Combina ambos arrays en uno nuevo usando el operador spread.
// Ejemplo:
// console.log(todosLosNumeros); // Imprime: [1, 2, 3, 4, 5, 6, 7, 8]

// Operador nullish ?? (no hay código aquí, pero se utiliza para asignar valores por defecto).
// Ejemplo:
// let valor = null;
// let resultado = valor ?? 'valor por defecto'; // resultado será 'valor por defecto'

// Array.flat()
let arrayAnidado = [1, 2, 3, [4, 5, 6], 7, 8, [9], 10, 11, 12];
// El método flat() se utiliza para aplanar arrays anidados.
// Ejemplo:
// let aplanado = arrayAnidado.flat(); // Aplana el array a un solo nivel.
// console.log(aplanado); // Imprime: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

arrayAnidado = [1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20];
// Este es un array más complejo con múltiples niveles de anidamiento.


// String.trim()
let fullName = "     Diego Ricardo Polverelli    "; 
// El método trim() se utiliza para eliminar espacios en blanco al inicio y al final de una cadena.
// Ejemplo:
// console.log(fullName.trim()); // Imprime: 'Diego Ricardo Polverelli'