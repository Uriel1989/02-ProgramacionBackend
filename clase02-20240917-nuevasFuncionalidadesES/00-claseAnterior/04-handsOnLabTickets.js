// Definición de la clase 'TicketManager'
class TicketManager {

    // Propiedad estática privada que representa el porcentaje de ganancia sobre el precio base.
    static #precioBaseDeGanancia = 0.15;

    // Constructor que inicializa la clase y define un array para almacenar eventos.
    constructor() {
        this.eventos = []; // Inicializa un array vacío para almacenar los eventos.
    }

    // Método para obtener la lista de eventos.
    getEventos() {
        return this.eventos; // Retorna el array de eventos.
    }

    // Método para agregar un nuevo evento.
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        // Verifica si el evento ya existe en base al nombre y lugar.
        let existe = this.eventos.find(evento => evento.nombre === nombre && evento.lugar === lugar);
        if (existe) {
            console.log(`Evento repetido; con id ${existe.id}`); // Imprime un mensaje si el evento ya existe.
            return; // Sale del método si el evento ya existe.
        }

        // Genera un nuevo ID para el evento.
        let id = this.generaId();

        // Crea un nuevo objeto de evento con los parámetros proporcionados y el precio ajustado por ganancia.
        let nuevoEvento = {
            id,
            nombre,
            lugar,
            precio: precio + precio * TicketManager.#precioBaseDeGanancia, // Aplica la ganancia al precio base.
            capacidad,
            fecha,
            participantes: [] // Inicializa un array vacío para los participantes.
        };

        // Agrega el nuevo evento al array de eventos.
        this.eventos.push(nuevoEvento);
    }

    // Método para agregar un usuario a un evento específico por su ID.
    agregarUsuario(idEvento, idUsuario) {
        let indiceEvento = this.eventos.findIndex(evento => evento.id === idEvento); // Busca el índice del evento por ID.
        if (indiceEvento === -1) {
            console.log(`Evento inexistente ${idEvento}`); // Imprime un mensaje si el evento no existe.
            return; 
        }

        // Verifica si el usuario ya está registrado en el evento.
        let existe = this.eventos[indiceEvento].participantes.find(p => p === idUsuario);
        if (existe) {
            console.log(`Ya se encuentra registrado el usuario ${idUsuario} en el evento ${idEvento}`); // Mensaje si ya está registrado.
            return;
        }

        // Agrega el ID del usuario a la lista de participantes del evento.
        this.eventos[indiceEvento].participantes.push(idUsuario);
    }

    // Método para generar un nuevo ID para los eventos basándose en la longitud del array de eventos.
    generaId() {
        let id = 1; // Inicializa ID en 1.
        if (this.eventos.length > 0) {
            id = this.eventos[this.eventos.length - 1].id + 1; // Asigna un nuevo ID basado en el último existente.
        }
        return id; // Retorna el nuevo ID generado.
    }

    // Método para poner un evento en gira, creando una copia del mismo con nuevas especificaciones.
    ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha) {
        let evento = this.eventos.find(evento => evento.id === idEvento); // Busca el evento por ID.
        if (!evento) {
            console.log(`Evento inexistente ${idEvento}`); // Mensaje si no se encuentra el evento.
            return;
        }

        let id = this.generaId(); // Genera un nuevo ID para el nuevo evento.

        // Crea una copia del evento existente con nuevas propiedades (lugar y fecha).
        let nuevoEvento = {
            ...evento, // Copia todas las propiedades del evento original.
            lugar: nuevoLugar, // Actualiza el lugar del nuevo evento.
            fecha: nuevaFecha, // Actualiza la fecha del nuevo evento.
            participantes: [], // Inicializa una nueva lista de participantes vacía para este nuevo evento.
            id // Asigna el nuevo ID generado al nuevo evento.
        };

        // Agrega el nuevo evento al array de eventos.
        this.eventos.push(nuevoEvento);
    }
}

// Creación de instancias de TicketManager
const ticketManager = new TicketManager(); 

// Agregar eventos utilizando la función agregarEvento
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 8, 20));
ticketManager.agregarEvento("afterClass02", "zoom", 100, 120, new Date(2024, 8, 20)); 
// Este intento fallará porque es un duplicado.

ticketManager.agregarEvento("afterClass03", "zoom", 100, 120, new Date(2024, 8, 20));

// Agregar usuarios a los eventos
ticketManager.agregarUsuario(10, 3); 
ticketManager.agregarUsuario(1, "003"); 
ticketManager.agregarUsuario(1, "002"); 
ticketManager.agregarUsuario(1, "003"); 
// El último intento fallará porque "003" ya está registrado.

ticketManager.ponerEventoEnGira(12, "meet", new Date(2024, 9, 4)); 
// Este intento fallará porque no hay un evento con ID 12.

ticketManager.ponerEventoEnGira(1, "meet", new Date(2024, 9, 4)); 
// Este intentará crear una nueva versión del primer evento.

ticketManager.ponerEventoEnGira(2, "Mar del Plata", new Date(2024, 10, 14)); 

// Imprime todos los eventos registrados
console.log(ticketManager.getEventos());