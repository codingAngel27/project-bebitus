///
window.addEventListener('scroll', function() {
  var header = document.querySelector('.header-container');
  header.classList.toggle('abajo', window.scrollY > 0);
});
// FUNCION PARA EL CARRUSEL
  var c=0;
  function carrusel(){
    c++
    if(c>3) c=1;
    document.getElementById("img").setAttribute("src", "img/fondo" + c + ".jpg");
    setTimeout("carrusel()", 5000);
    
  }
carrusel();
 var c = 0; // Valor inicial del índice del carrusel
  function cambiarImagen(direccion) {
    event.preventDefault();
    c += direccion;

    // Verificar si c supera los límites y ajustar si es necesario
    if (c > 3) {
      c = 1;
    } else if (c < 1) {
      c = 3;
    }
    // Actualizar el atributo src de la imagen con la nueva imagen
    var imagen = document.getElementById("img");
    imagen.setAttribute("src", "img/fondo" + c + ".jpg");
  }
  
let icono = document.getElementById('icono');
let modal = document.getElementById('modal');

icono.addEventListener('click', function() {
  modal.style.display = 'block';
});
// Opcional: Si quieres cerrar el modal cuando se haga clic fuera de él
window.addEventListener('click', function(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
let cerrar = document.querySelector('.cerrar');

cerrar.addEventListener('click', function() {
  modal.style.display = 'none';
})

const enlaceAcceder = document.querySelector('#acceder');
const enlaceRegistro = document.querySelector('#registro');
const formularioAcceder = document.getElementById('formulario-acceder');
const formularioRegistro = document.getElementById('formulario-registro');

// Mostrar formulario de acceso al abrir el modal
formularioAcceder.style.display = 'block';
formularioRegistro.style.display = 'none';

// Asignar controladores de eventos a los elementos li
enlaceAcceder.addEventListener('click', function(event) {
  event.preventDefault();
  formularioAcceder.style.display = 'block';
  formularioRegistro.style.display = 'none';
});

enlaceRegistro.addEventListener('click', function(event) {
  event.preventDefault();
  formularioAcceder.style.display = 'none';
  formularioRegistro.style.display = 'block';
});
const enlaces = document.querySelectorAll('.header-login ul li');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', function() {
    // Eliminar la clase "activo" de todos los enlaces
    enlaces.forEach((enlace) => {
      enlace.classList.remove('activo');
    });
    // Agregar la clase "activo" al enlace seleccionado
    this.classList.add('activo');
  });
});

const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
/////VALIDACION DE FORMULARIO//////////

/*const expresiones = {
	mensaje: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  tema: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  distrito: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
   // Letras y espacios, pueden llevar acentos.
	/*password: /^.{4,12}$/, // 4 a 12 digitos.*/
	/*correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}*/

const nombreInput = document.getElementById('name');
const nombreGrupo = document.getElementById('grupo-nombre');
const errorMensaje = document.querySelector('#grupo-nombre .input-error');

// Función para validar el nombre
function validarNombre() {
  const valorNombre = nombreInput.value.trim();
  const nombreValido=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const icono = document.querySelector('#grupo-nombre i');
  if (valorNombre === '') {
    nombreGrupo.classList.add('incorrecto');
    errorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
  }else if (!nombreValido.test(valorNombre)) {
    nombreGrupo.classList.add('incorrecto');
    errorMensaje.textContent = 'Ingrese solo letras';
    errorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
    
  }
  else {
    nombreGrupo.classList.remove('incorrecto');
    errorMensaje.classList.remove('active');
    nombreGrupo.classList.add('correcto');
    icono.classList.remove('fa-times-circle');
    icono.classList.add('fa-check-circle');
  }
}

// Event listener para el input del nombre
nombreInput.addEventListener('blur', validarNombre);

const correoInput = document.getElementById('correo');
const correoGrupo = document.getElementById('grupo-correo');
const correoErrorMensaje = document.querySelector('#grupo-correo .input-error');

const telefonoInput = document.getElementById('telefono');
const telefonoGrupo = document.getElementById('grupo-telefono');
const telefonoErrorMensaje = document.querySelector('#grupo-telefono .input-error');

const distritoInput = document.getElementById('inputCity');
const distritoGrupo = document.getElementById('grupo-distrito');
const distritoErrorMensaje = document.querySelector('#grupo-distrito .input-error');

const departamentoInput = document.getElementById('inputState');
const departamentoGrupo = document.getElementById('grupo-seleccion');
const departamentoErrorMensaje = document.querySelector('#grupo-seleccion .input-error');

const temaInput = document.getElementById('tema');
const temaGrupo = document.getElementById('grupo-tema');
const temaErrorMensaje = document.querySelector('#grupo-tema .input-error');

// Función para validar el correo electrónico
function validarCorreo() {
  const valorCorreo = correoInput.value.trim();
  const correoValido = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const icono = document.querySelector('#grupo-correo i');

  if (valorCorreo === '') {
    correoGrupo.classList.add('incorrecto');
    correoErrorMensaje.textContent = 'Complete este campo';
    correoErrorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    iconoclassList.remove('fa-check-circle');
  } else if (!correoValido.test(valorCorreo)) {
    correoGrupo.classList.add('incorrecto');
    correoErrorMensaje.textContent = 'Ingrese un correo válido';
    correoErrorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
  } else {
    correoGrupo.classList.remove('incorrecto');
    correoErrorMensaje.classList.remove('active');
    correoGrupo.classList.add('correcto');
    icono.classList.remove('fa-times-circle');
    icono.classList.add('fa-check-circle');
  }
}

// Event listener para el input de correo electrónico
correoInput.addEventListener('blur', validarCorreo);

// Función para validar el teléfono
function validarTelefono() {
  const valorTelefono = telefonoInput.value.trim();
  const telefonoValido = /^[\d+#\s]+$/;
  const icono = document.querySelector('#grupo-telefono i');
  

  if (valorTelefono === '') {
    telefonoGrupo.classList.add('incorrecto');
    telefonoErrorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle')
  } else if (!telefonoValido.test(valorTelefono)) {
    telefonoGrupo.classList.add('incorrecto');
    telefonoErrorMensaje.textContent = 'Ingrese un número de teléfono válido';
    telefonoErrorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
  } else {
    telefonoGrupo.classList.remove('incorrecto');
    telefonoErrorMensaje.classList.remove('active');
    telefonoGrupo.classList.add('correcto');
    icono.classList.remove('fa-times-circle');
    icono.classList.add('fa-check-circle');
  }
}

// Event listener para el input de teléfono
telefonoInput.addEventListener('blur', validarTelefono);

// Función para validar el campo de distrito
function validarDistrito() {
  const valorDistrito = distritoInput.value.trim();
  const icono3 = document.querySelector('#grupo-distrito i');

  if (valorDistrito === '') {
    distritoGrupo.classList.add('incorrecto');
    distritoErrorMensaje.classList.add('active');
    icono3.classList.add('fa-times-circle');
    icono3.classList.remove('fa-check-circle');
  } else {
    distritoGrupo.classList.remove('incorrecto');
    distritoErrorMensaje.classList.remove('active');
    distritoGrupo.classList.add('correcto');
    icono3.classList.remove('fa-times-circle');
    icono3.classList.add('fa-check-circle');
  }
}

// Event listener para el input de distrito
distritoInput.addEventListener('blur', validarDistrito);

// Función para validar el campo de departamento
function validarDepartamento() {
  const valorDepartamento = departamentoInput.value.trim();

  if (valorDepartamento === '') {
    departamentoGrupo.classList.add('incorrecto');
    departamentoErrorMensaje.classList.add('active');
  } else {
    departamentoGrupo.classList.remove('incorrecto');
    departamentoErrorMensaje.classList.remove('active');
  }
}

// Event listener para el input de departamento
departamentoInput.addEventListener('blur', validarDepartamento);

// Función para validar el campo de tema
function validarTema() {
  const valorTema = temaInput.value.trim();
  const icono = document.querySelector('#grupo-tema i');

  if (valorTema === '') {
    temaGrupo.classList.add('incorrecto');
    temaErrorMensaje.classList.add('active');
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
  } else {
    temaGrupo.classList.remove('incorrecto');
    temaErrorMensaje.classList.remove('active');
    temaGrupo.classList.add('correcto');
    icono.classList.remove('fa-times-circle');
    icono.classList.add('fa-check-circle');
  }
}

// Event listener para el input de tema
temaInput.addEventListener('blur', validarTema);

///////////
const mensajeInput = document.getElementById('message');
const mensajeGrupo = document.getElementById('grupo-mensaje');
const msmErrorMensaje = document.querySelector('#grupo-mensaje .input-error');

function validarMensaje(){
  const valorMensaje=mensajeInput.value.trim();
  const icono = document.querySelector('#grupo-mensaje i');
  if(valorMensaje === ''){
    mensajeGrupo.classList.add('incorrecto')
    msmErrorMensaje.classList.add('active')
    icono.classList.add('fa-times-circle');
    icono.classList.remove('fa-check-circle');
  } else{
    mensajeGrupo.classList.remove('incorrecto')
    msmErrorMensaje.classList.remove('active')
    mensajeGrupo.classList.add('correcto')
    icono.classList.remove('fa-times-circle');
    icono.classList.add('fa-check-circle');
  }
}
mensajeInput.addEventListener('blur', validarMensaje);
////////// validar formulario
const mensajeExitoso = document.getElementById('mensaje-exitoso');
const formularioMensaje = document.getElementById('formulario-mensaje');
const validarFormulario = document.querySelector('formulario-mensaje'); 

formularioMensaje.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const tema = document.getElementById('tema').value;

  if (nombre.trim() === '' || email.trim() === '' || message.trim() === '' || tema.trim() === '') {
    // Al menos uno de los campos está vacío, muestra un mensaje de error
    formularioMensaje.style.display = 'block'; // Muestra el mensaje de error
    mensajeExitoso.style.display = 'none';
    // Oculta el mensaje exitoso
   validarFormulario.classList.add('active');
  } else {
    // Todos los campos están completos, continuar con el envío del formulario o cualquier otra acción
    formularioMensaje.style.display = 'none'; // Oculta el mensaje de error
    mensajeExitoso.style.display = 'block'; // Muestra el mensaje exitoso
  }
});
/////////
// Obtén la referencia al elemento del carrusel
const carousel = document.querySelector('.carousel');

// Agrega evento de transición al carrusel
carousel.addEventListener('transitionend', () => {
  const firstItem = carousel.firstElementChild;
  carousel.appendChild(firstItem);
  carousel.style.transition = 'transform 1s, opacity 1s';
  setTimeout(() => {
    carousel.style.transition = 'opacity 0.5s ease-in-out';
  }, 0);
});
///////////////////////////
// Obtener el formulario y el botón de enviar por su ID
var formEncuesta = document.getElementById('form-encuesta');
var btnEncuesta = document.getElementById('btn-encuesta');

btnEncuesta.addEventListener('click', function(event) {
  var opciones = document.getElementsByName('opcion');
  var opcionSeleccionada = '';
  for (let i = 0; i < opciones.length;i++) {
    if (opciones[i].checked) {
      opcionSeleccionada = opciones[i].value;
      break;
    }
  }

  if (opcionSeleccionada !== '') {
    alert('Usted calificó: ' + opcionSeleccionada);
  } else {
    alert('Por favor, seleccione una opción antes de enviar.');
  }

  event.preventDefault();
});
let carritoIcono = document.getElementById('carrito1');
let modal2 = document.getElementById('modal-2');

carritoIcono.addEventListener('click', function(event) {
  event.preventDefault(); // Evita que la página se recargue al hacer click en el enlace
  modal2.style.display = 'block';
});

window.addEventListener('click', function(event) {
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
});
function toggleMenu(link) {
  let menuToggle = document.getElementById("menu-toggle");
  let menu = document.querySelector('.nav');
  menuToggle.checked = false; 
  menu.classList.remove('activo');
}


  