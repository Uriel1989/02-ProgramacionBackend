// Definición de la clase 'Persona'
class Persona {
    // Propiedad estática que representa la especie por defecto de las personas.
    static especie = "humano"; 
    // Propiedad estática que cuenta cuántas instancias de Persona han sido creadas.
    static cantidadPersonasDefinidas = 0;

    // Propiedad privada para almacenar la contraseña.
    #password = ""; 

    // Constructor que se ejecuta al crear una nueva instancia de Persona.
    constructor(nombre, email, edad, password = "") {
        this.nombre = nombre; // Asigna el nombre proporcionado a la propiedad de instancia 'nombre'.
        this.email = email;   // Asigna el email proporcionado a la propiedad de instancia 'email'.
        this.edad = edad;     // Asigna la edad proporcionada a la propiedad de instancia 'edad'.
        this.#password = password; // Asigna el password proporcionado a la propiedad privada '#password'.
        
        // Incrementa el contador de personas definidas cada vez que se crea una nueva instancia.
        Persona.cantidadPersonasDefinidas++;
    }

    // Método estático que devuelve la cantidad total de personas definidas.
    static mostrarCantidadPersonas() {
        return this.cantidadPersonasDefinidas; // Retorna la propiedad estática 'cantidadPersonasDefinidas'.
    }

    // Método estático para modificar la especie de todas las instancias de Persona.
    static modificarEspecie(especie) {
        this.especie = especie; // Cambia el valor de la propiedad estática 'especie'.
        // Persona.especie=especie; // Alternativa para acceder a la propiedad estática.
    }

    // Método para retornar la contraseña (privada).
    retornaPassword() {
        return this.#password; // Retorna el valor de la propiedad privada '#password'.
    }

    // Método privado que imprime un mensaje en consola.
    #prueba() {
        console.log(`Este método es privado`); // Imprime un mensaje indicando que este método es privado.
    }

    // Método público para saludar e imprimir información sobre la persona.
    saludar() {
        this.#prueba(); // Llama al método privado '#prueba'.
        let prueba = this.verNombre(); // Llama al método verNombre y almacena su resultado en 'prueba'.
        console.log(prueba); // Imprime el nombre en mayúsculas.
        console.log(`Hola...!!!, soy ${this.nombre}`); // Imprime un saludo con el nombre de la persona.
    }

    // Método para obtener el nombre en mayúsculas.
    verNombre() {
        return this.nombre.toUpperCase(); // Retorna el nombre en mayúsculas.
    }

    // Método para cambiar el nombre de la persona.
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre; // Asigna un nuevo valor a la propiedad 'nombre'.
    }

    // Método para realizar login verificando email y contraseña.
    login(email, password) {
        if (email !== this.email || password !== this.#password) {
            console.log(`Credenciales inválidas`); // Imprime un mensaje si las credenciales son incorrectas.
            return; 
        }
        console.log(`Login exitoso...!!!`); // Imprime un mensaje si las credenciales son correctas.
    }
}

// Creación de instancias de la clase Persona
let persona01 = new Persona("Mariana", "marina@test.com", 27);
let persona02 = new Persona("Julian", "julian@test.com", 31, "123456");
let persona03 = new Persona("Pedro", "pedrito@test.com", 54, "abcdfg");

// Imprime las instancias creadas en consola
console.log(persona01);
console.log(persona02);
console.log(persona03);

// Imprime el nombre de persona01 usando el método verNombre
// console.log(`El nombre de la persona01 es ${persona01.nombre}`); 
console.log(`El nombre de la persona01 es ${persona01.verNombre()}`); 

// Cambia el nombre de persona01 y lo imprime
persona01.cambiarNombre("Mariana Jimena");
console.log(`El nombre de la persona01 es ${persona01.verNombre()}`); 

// Crea una nueva instancia persona04
let persona04 = new Persona("Juan", "juan@test.com", 18, "abcdfg");

// Realiza intentos de login con diferentes credenciales
persona02.login("julian@test.com", "123");     // Login exitoso
persona02.login("julian@test.com", "123456");  // Credenciales inválidas

// Llama al método saludar en persona03
persona03.saludar(); 

// Imprime la contraseña utilizando el método retornaPassword
console.log(`la contraseña de ${persona02.verNombre()} es: ${persona02.retornaPassword()}`);

// Modifica la especie y muestra su valor
// persona01.modificarEspecie("ser humano"); 
Persona.modificarEspecie("ser humano"); 
console.log(Persona.especie); 

// Muestra cuántas personas han sido definidas hasta ahora
console.log(`La cantidad de personas definidas es de ${Persona.mostrarCantidadPersonas()}`); 

// La siguiente línea está comentada y causaría un error si se descomenta.
// console.log(persona02.#password); 