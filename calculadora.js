// Obtener el botón y el div de la pantalla
const boton7 = document.getElementById(7);
const pantalla = document.getElementById("pantalla");

// Agregar un evento de escucha al botón
boton7.addEventListener("click", function() {
  // Agregar el número 7 al contenido de la pantalla
  pantalla.textContent += "7";
});
