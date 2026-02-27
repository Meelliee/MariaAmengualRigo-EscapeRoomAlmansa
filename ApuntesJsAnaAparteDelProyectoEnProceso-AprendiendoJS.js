/*Apuntes JS Ana, quizas para el proyecto no es una parte literal, pero me ayuda a tener las cosas mas ordenadas y estructuradas mentalmente y me ayuda
a repasar el tema que damos en clase.*/

/*Seleccionar todas las secciones:*/
const seccciones = document.querySelectorAll(".seccion");
//Esto busca todos los elementos que tengan la clase sección y lo que devuelve es una Nodelist
// Parece un array pero no lo es, se puede recorrer con forEach.

/*Buscar una imagen dentro de una seccion */
const imagen = seccion.querySelector("img");
// querySelector("img") devuelve la primera etiqueda img que encuentre dentro de esa seccion.
// Importante, si dentro de .seccion hay mas de una imagen siempre pillara la primera.
//Si algun .seccion no tiene img entonces img seria null y al intentar hacer un style, fallaria.
//Importante recordad que se usan todos los selectores de CSS.

/*Mas: getElementById(), getElementsByClassName(), getElementsByTagName()... Aunque los anteriores
son los mas usados (los query) */


/*Cuando ya hemos seleccionado algo podemos hacer */
textContent // Cambiar texto sin interpretar el HTML
.innerHTML // Cambia el html y crea estructura pero con matices
.style // Funciona igual que en CSS y es para aplicar styles.
.setAttribute // Cambia los atributos.
onclick, addEventListener // Responder a eventos.



/*Vamos con setAttribute*/
.setAttribute("title", "Nuevo titulo") // Si no existe lo crea y si existe, lo modifica.
.getAttribute("type") // Si no existe, devuelve null y tambi'en menciona leer por propiedad(ej: apellidos.type)


/*Evento scroll*/
window.addEventListener("scroll", ()=>{});
//Un evento es algo que ocurre en la pagina y aqui lo ponemos en window para que se ejecute
//cada vez que hacemos scroll.

/*Recorrer secciones con forEach */
seccciones.forEach(seccion=>{});
//Esto ejecuta el bloque una vez por cada .seccion que es una seccion concreta en cada vuelta.



/*Para calcular donde esta esa seccion en la pantalla*/
const rect = seccion.getBoundingClientRect();
//Te devuelve la posicion en base tambien al tamaño del elemento en la pantalla.
//El uso de rect.top es la distancia que hay desde el margen de la pagina hasta el inicio del contenedor o de la clase.

