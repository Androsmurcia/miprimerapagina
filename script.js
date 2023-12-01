//alert("Mi primera WEB");

// let contenidoTitulo = "Nombre";

// let titulo = document.querySelector(".logo");
// titulo.innerHTML = contenidoTitulo;

// let textoTitulo = titulo.innerText;

// if (textoTitulo === "Nombre") {
//   titulo.innerHTML = "Otro";
// } else {
//   console.log("No se cumple");
// }

// console.log(textoTitulo);
//----------------------------
// let textoAcercaDeMi = "Nuevo texto en parrafo uno";

// let texto = document.querySelector(".parrafo1");
// texto.innerHTML = textoAcercaDeMi;

// let nuevoParrafoUno = texto.innerText;

// if (nuevoParrafoUno === "Nuevo texto en parrafo uno") {
//   texto.innerHTML = "Muy bien hecho cambiaste el texto";
// } else {
//   console.log("Fíjate en la sintaxis");
// }
// console.log(nuevoParrafoUno);

//---------------------------------------------

// let nombre = "Dante";
// let pais = "Alemania";
// let gusto = "Bananos";

// let parrafoDos = document.querySelector(".parrafo2");

// function camibioTexto(nombre, pais, gusto) {
//   let contenido = `Hola me llamo ${nombre} y soy originario de ${pais} y me
//     gusta comer ${gusto}`;

//   return contenido;
// }

// parrafoDos.innerText = camibioTexto(nombre, pais, gusto);
//-----------------nav
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

// -----------------------------------------------------------------formulario

const form = document.getElementById("form");
const nombreForm = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
const pais = document.getElementById("pais");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  let selectedValue = pais.options[pais.selectedIndex].value;

  if (selectedValue === "") {
    warnings += `No ha seleccionado una opción en país. `;
    valido = false;
  }

  if (nombreForm.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres. `;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
