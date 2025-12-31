/* ===== 1. Intercambio de imágenes ===== */
const imagen = document.getElementById("imagenCO2");
let estadoImagen = 1;

imagen.addEventListener("click", () => {
  if (estadoImagen === 1) {
    imagen.src = "images/img2.jpg";
    estadoImagen = 2;
  } else {
    imagen.src = "images/img1.jpg";
    estadoImagen = 1;
  }
});


/* ===== 2. Campo de texto interactivo ===== */
const input = document.getElementById("nombreUsuario");
const mensaje = document.getElementById("mensajePersonalizado");

input.addEventListener("input", () => {
  if (input.value === "") {
    mensaje.textContent = "El cambio climático nos afecta a todos.";
  } else {
    mensaje.textContent =
      "El cambio climático también te afecta a ti, " + input.value + ".";
  }
});


/* ===== 3. Objeto en movimiento ===== */
const planeta = document.getElementById("planeta");
let posicion = 0;

function moverPlaneta() {
  posicion += 1;
  planeta.style.left = posicion + "px";

  if (posicion < 300) {
    requestAnimationFrame(moverPlaneta);
  }
}

moverPlaneta();

