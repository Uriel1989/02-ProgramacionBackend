// Definición de la clase 'Contador'
class Contador {
    // Propiedad estática que mantiene un conteo global de todas las instancias de Contador.
    static cuentaGlobal = 0;

    // Constructor que se ejecuta al crear una nueva instancia de Contador.
    constructor(responsable) {
        this.responsable = responsable; // Asigna el responsable a la propiedad de instancia 'responsable'.
        this.contador = 0; // Inicializa el contador individual en 0.
    }

    // Método para incrementar el contador individual y el contador global.
    contar() {
        this.contador++; // Incrementa el contador individual de la instancia.
        Contador.cuentaGlobal++; // Incrementa el contador global de la clase.
    }

    // Método para obtener el responsable del contador.
    getResponsable() {
        return this.responsable; // Retorna el valor de la propiedad 'responsable'.
    }

    // Método para obtener el conteo individual del contador.
    getCuentaIndividual() {
        return this.contador; // Retorna el valor del contador individual.
    }

    // Método estático para obtener el conteo global.
    static getCuentaGlobal() {
        return this.cuentaGlobal; // Retorna el valor de la propiedad estática 'cuentaGlobal'.
    }
}

// Se crean dos instancias de la clase Contador, cada una con un responsable diferente.
const c1 = new Contador("Raúl"); // Instancia c1 con responsable "Raúl"
const c2 = new Contador("Julieta"); // Instancia c2 con responsable "Julieta"

// Imprime las instancias c1 y c2 en consola.
console.log(c1, c2); 

// Se llaman al método contar varias veces para cada contador.
c1.contar(); // Incrementa contador de c1
c1.contar(); // Incrementa contador de c1
c1.contar(); // Incrementa contador de c1
c1.contar(); // Incrementa contador de c1
c1.contar(); // Incrementa contador de c1
c1.contar(); // Incrementa contador de c1

c2.contar(); // Incrementa contador de c2
c2.contar(); // Incrementa contador de c2
c2.contar(); // Incrementa contador de c2
c2.contar(); // Incrementa contador de c2

// Imprime los resultados del conteo individual para cada responsable.
console.log(`El contador c1, a cargo de ${c1.getResponsable()}, suma ${c1.getCuentaIndividual()}`); 
// Imprime: El contador c1, a cargo de Raúl, suma 6

console.log(`El contador c2, a cargo de ${c2.getResponsable()}, suma ${c2.getCuentaIndividual()}`); 
// Imprime: El contador c2, a cargo de Julieta, suma 4

// Imprime la suma total de todos los contadores utilizando el método estático.
console.log(`La suma de todos los contadores es ${Contador.getCuentaGlobal()}`); 
// Imprime: La suma de todos los contadores es 10