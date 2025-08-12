# Challenge-Amigo-Secreto

 Este desafío me permitió poner a prueba y afianzar mis conocimientos, aplicar lo aprendido y fortalecer mis habilidades de programación.

-Challenge Amigo Secreto

-Practicando Lógica de Programación

-Amigo Secreto App

  <p>Este es un proyecto simple y divertido para sortear un "Amigo Secreto" entre un grupo de personas. La aplicación permite a los usuarios ingresar nombres, sortear uno al azar y limpiar la lista para un nuevo sorteo.
  El proyecto está diseñado con un enfoque en la simplicidad y la usabilidad, con una interfaz moderna y un diseño responsivo que se adapta a diferentes tamaños de pantalla.</p>
  
  -Características Principales
  
 * Añadir Nombres: Los usuarios pueden añadir nombres de amigos a una lista.
 * Validación de Entrada: El sistema valida que la entrada no esté vacía o contenga números.
 * Sorteo Aleatorio: Un algoritmo simple selecciona un nombre al azar de la lista.
 * Limpiar Sorteo: Opción para resetear la lista de amigos y el resultado.
 * Alerta Personalizada: Un sistema de alerta personalizado reemplaza la función alert() predeterminada.
 * Diseño Responsivo: La interfaz se adapta a dispositivos móviles y de escritorio.
 
 Archivos del Proyecto
 
 -index.html

<p>Este archivo define la estructura de la aplicación. Se ha modificado para crear un diseño de dos columnas, donde el div con la clase app-container actúa como el contenedor principal, dividiendo el espacio para la imagen de fondo y el contenido de la aplicación.</p>

-style.css

<p>Este archivo contiene todos los estilos de la aplicación, incluyendo el nuevo diseño de dos columnas, la responsividad y las mejoras visuales.</p>

Cambios Clave:
 * Se ha implementado Flexbox en el body y el .app-container para crear un diseño de dos columnas.
 * El .background-image ahora se encarga de mostrar la imagen, posicionada a la izquierda.
 * Se han añadido media queries para apilar la imagen y el contenido en dispositivos móviles.
 * Los botones, la lista y la ventana de alerta se han estilizado con sombras, transiciones y bordes redondeados para un aspecto más moderno.

-app.js
 
 <p> Este archivo contiene toda la lógica de la aplicación. Se ha desarrollado de manera modular y fácil de entender, con comentarios detallados para cada función.</p>
 
 -Descripción Detallada:
 
 * amigos: let amigos = [];
   * ¿Qué es? Es una variable de tipo Array (lista). Piensa en ella como una lista de compras vacía, donde guardaremos todos los nombres de los amigos.
   * ¿Para qué sirve? Almacena de forma temporal los nombres que el usuario introduce en la aplicación. La palabra clave let significa que esta lista puede cambiar (se pueden añadir o quitar nombres).
 * toggleAlertaPersonalizada(mensaje):
   * ¿Qué es? Es una función que muestra o esconde una ventana emergente.
   * ¿Cómo funciona?
     * const overlay = document.getElementById('custom-alert-overlay');: Usa el método document.getElementById() para encontrar y "seleccionar" la ventana de alerta en el HTML. const se usa aquí porque esta referencia no va a cambiar.
     * const mensajeElemento = document.getElementById('custom-alert-message');: De igual forma, selecciona el elemento dentro de la ventana donde se mostrará el texto de la alerta.
     * if (mensaje): Esta es una "condicional". Si la función recibe un texto (mensaje), ejecuta el código dentro de if para mostrar la alerta.
     * mensajeElemento.textContent = mensaje;: Le dice a la alerta qué texto debe mostrar.
     * overlay.classList.remove('hidden');: Elimina la clase CSS llamada hidden, lo que hace que la alerta sea visible.
     * else: Si la función se llama sin un mensaje (es decir, null), el código dentro de else se ejecuta para esconder la alerta, añadiendo la clase hidden de nuevo.
 * agregarAmigo():
   * ¿Qué es? Es la función que se ejecuta cada vez que haces clic en el botón "Añadir".
   * ¿Cómo funciona?
     * const inputNombre = document.getElementById('amigo');: Selecciona el campo de texto (<input>) donde el usuario escribe el nombre.
     * const nombre = inputNombre.value.trim();:
       * inputNombre.value: Obtiene el texto que el usuario ha escrito.
       * .trim(): Es un método que elimina cualquier espacio en blanco extra al principio y al final del nombre, evitando errores.
       * const nombre: Guarda este nombre "limpio" en una nueva variable.
     * La Validación:
       * if (nombre === "" || /\d/.test(nombre)): Esta es la condición clave para la validación.
       * nombre === "": Verifica si el nombre está completamente vacío.
       * ||: Significa "o". Si la primera condición es verdadera O la segunda es verdadera, la validación falla.
       * /\d/.test(nombre): Esta es una "expresión regular" que verifica si el nombre contiene algún dígito numérico (\d). Si encuentra uno, devuelve true y la validación falla.
     * Lógica de Sorteo:
       * amigos.push(nombre);: Si el nombre es válido, el método .push() lo añade al final del array amigos.
       * actualizarLista();: Llama a la función que se encarga de refrescar la lista visible en pantalla.
       * inputNombre.value = '';: Limpia el campo de texto.
 * actualizarLista():
   * ¿Qué es? Esta función es la responsable de mostrar la lista de amigos actualizada en la pantalla.
   * ¿Cómo funciona?
     * const listaAmigosElemento = document.getElementById('listaAmigos');: Selecciona el contenedor de la lista en el HTML.
     * listaAmigosElemento.innerHTML = '';: Borra todo el contenido anterior de la lista. Esto es importante para evitar que los nombres se dupliquen.
     * for (let i = 0; i < amigos.length; i++): Un bucle que recorre cada nombre en el array amigos.
     * const li = document.createElement('li');: Crea un nuevo elemento de lista (<li>).
     * li.textContent = amigos[i];: Le da a ese nuevo elemento el texto del nombre actual del bucle.
     * listaAmigosElemento.appendChild(li);: Añade el nuevo elemento de lista al contenedor en el HTML.
 * sortearAmigo():
   * ¿Qué es? Esta función es la que realiza el sorteo aleatorio.
   * ¿Cómo funciona?
     * if (amigos.length === 0): Valida si la lista está vacía. Si es así, no puede sortear y muestra una alerta.
     * La Fórmula Matemática: const indiceAleatorio = Math.floor(Math.random() * amigos.length);
       * Math.random(): Genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
       * * amigos.length: Multiplica ese número aleatorio por la cantidad total de amigos en la lista. Esto nos da un número decimal entre 0 y el número total de amigos.
       * Math.floor(): Redondea ese número decimal hacia abajo al entero más cercano. El resultado es un número entero que servirá como un índice aleatorio válido para el array amigos.
     * const amigoSorteado = amigos[indiceAleatorio];: Usa el índice aleatorio para seleccionar y guardar el nombre sorteado del array.
     * resultadoElemento.innerHTML = ...: Muestra el resultado final en la interfaz de usuario.
 * limpiarSorteo():
   * ¿Qué es? La función para reiniciar la aplicación.
   * ¿Cómo funciona?
     * amigos = [];: Reinicia el array de amigos, dejándolo vacío.
     * Llama a actualizarLista() para que la lista en pantalla se borre.
     * Borra el resultado y el texto del campo de entrada para que el usuario pueda empezar de nuevo desde cero.

-Cómo Usar la Aplicación

 * Abre el archivo link en tu navegador web.
 * Escribe el nombre de un amigo en el campo de texto y haz clic en el botón "Añadir". Repite este paso para todos los amigos que participarán en el sorteo.
 * Una vez que todos los nombres estén en la lista, haz clic en el botón "Sortear amigo".
 * El nombre del amigo secreto se mostrará en pantalla.
 * Si deseas hacer un nuevo sorteo, haz clic en el botón "Limpiar Sorteo" para resetear la aplicación.
 
End
