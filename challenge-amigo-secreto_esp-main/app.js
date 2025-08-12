// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Muestra u oculta la alerta personalizada.
 * @param {string|null} mensaje El texto del mensaje. Si es null, oculta la alerta.
 */
function toggleAlertaPersonalizada(mensaje) {
    const overlay = document.getElementById('custom-alert-overlay');
    const mensajeElemento = document.getElementById('custom-alert-message');

    if (overlay) {
        if (mensaje) {
            mensajeElemento.textContent = mensaje;
            overlay.classList.remove('hidden');
        } else {
            overlay.classList.add('hidden');
        }
    }
}

/**
 * Función para agregar un amigo a la lista.
 * Se llama al hacer clic en el botón "Añadir".
 */
function agregarAmigo() {
    // Obtiene el elemento del input por su ID
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    // Validación mejorada: verifica si el campo está vacío o contiene números
    if (nombre === "" || /\d/.test(nombre)) {
        toggleAlertaPersonalizada("Por favor, ingresa un nombre válido sin números.");
    } else {
        // Si el valor es válido, lo añade al array
        amigos.push(nombre);

        // Actualiza la lista de nombres en la interfaz de usuario
        actualizarLista();

        // Limpia el campo de texto después de agregar el nombre
        inputNombre.value = '';
        inputNombre.focus();
    }
}

/**
 * Función que actualiza la lista visual en la página.
 * Recorre el array 'amigos' y crea elementos HTML para cada nombre usando un bucle `for`.
 */
function actualizarLista() {
    // Obtiene el elemento <ul> donde se mostrará la lista
    const listaAmigosElemento = document.getElementById('listaAmigos');
    
    // Limpia el contenido anterior para evitar duplicados
    listaAmigosElemento.innerHTML = '';

    // Itera sobre el array 'amigos' usando un bucle `for`
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        li.className = 'name-item'; // Agrega una clase para estilizar si es necesario
        listaAmigosElemento.appendChild(li);
    }
}

/**
 * Función principal para realizar el sorteo de amigo secreto.
 * Se llama al hacer clic en el botón "Sortear amigo".
 */
function sortearAmigo() {
    // Obtiene el elemento <ul> donde se mostrará el resultado
    const resultadoElemento = document.getElementById('resultado');

    // Validación: Comprueba si hay amigos en la lista antes de sortear
    // usando una condicional `if-else`
    if (amigos.length === 0) {
        toggleAlertaPersonalizada("Por favor, agrega amigos antes de sortear.");
        resultadoElemento.innerHTML = '';
    } else {
        // Genera un índice aleatorio para seleccionar un nombre del array
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // Obtiene el nombre sorteado usando el índice aleatorio
        const amigoSorteado = amigos[indiceAleatorio];

        // Actualiza el contenido del elemento 'resultado' para mostrar el ganador
        resultadoElemento.innerHTML = `<li class="result-item">¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
    }
}

/**
 * Función para limpiar el sorteo anterior y empezar de nuevo.
 * Resetea el array de amigos y limpia la interfaz de usuario.
 */
function limpiarSorteo() {
    amigos = []; // Reinicia el array
    
    // Limpia la lista visual
    actualizarLista();

    // Limpia el resultado del sorteo
    const resultadoElemento = document.getElementById('resultado');
    if (resultadoElemento) {
        resultadoElemento.innerHTML = '';
    }

    // Limpia el campo de texto y le da el foco
    const inputNombre = document.getElementById('amigo');
    if (inputNombre) {
        inputNombre.value = '';
        inputNombre.focus();
    }
}