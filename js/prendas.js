import prendas from '../data/prendas.json' assert { type: 'json' };

var carrito = []

let Soles = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
});

const elementosPorPaginas = 8;
var numeroPaginas = 0;
var paginaActual = 1;

function mostrarTienda(prendas) {
    var contenido = ""
    let inicio = elementosPorPaginas * (paginaActual - 1);
    let termino = inicio + elementosPorPaginas;
    for (let i = inicio; i < termino; i++) {
        if (prendas[i] == undefined) break;
        contenido += '<div class="col-3">'
        contenido += '<div class="card" style="width: 18rem;">'
        contenido += '<img src="' + prendas[i].imagen + '" class="card-img-top">'
        contenido += '<div class="card-body">'
        contenido += '<h5 class="card-title prenda-title">' + prendas[i].nombre + '</h5>'
        contenido += '<p class="card-text">' + Soles.format(prendas[i].precio) + ' </p>'
        contenido += `<a  class="btn btn-primary agregar-prenda" codigo="${prendas[i].id}" >Agregar Carrito</a>`
        contenido += '</div>'
        contenido += '</div>'
        contenido += '</div>'
    }
    document.getElementById("productos-grid").innerHTML = contenido
    const botones = document.querySelectorAll(".agregar-prenda")
    botones.forEach((boton) => {
        boton.addEventListener('click', function () {
           let codigo = boton.getAttribute("codigo");
           agregarProductoCarrito(codigo);
           var modal1 = new bootstrap.Modal(document.getElementById("mensajeProducto"));
           modal1.toggle();
              
        })
    })
}

function agregarProductoCarrito(codigo) {
    let producto = prendas.find((prenda) => prenda.id == codigo)
    carrito.push(producto)
    actualizarCarrito();
}

function quitarProductoCarrito(codigo) {
    carrito = carrito.filter((prenda) => prenda.id != codigo)
   
    actualizarCarrito();
}

window.addEventListener('load', function (event) {
    mostrarTienda(prendas, 0);
    crearPaginador(prendas);
});

const cateBeba = document.getElementById("cateBeba");
cateBeba.addEventListener('click', function () {
    filtrar("Bebe Niña");
}
);
const cateBebo = document.getElementById("cateBebo");
cateBebo.addEventListener('click', function () {
    filtrar("Bebe Niño");
}
);
const cateNina = document.getElementById("cateNina");
cateNina.addEventListener('click', function () {
    filtrar("Niña");
}
);
const cateNino = document.getElementById("cateNino");
cateNino.addEventListener('click', function () {
    filtrar("Niño");
}
);

/////////////////////////
const inputTexto = document.getElementById("btn1");
const inputBuscar = document.getElementById("buscar");
// Evento para el botón
btn1.addEventListener('click', function () {
    buscarProductos();
});
// Evento para la tecla Enter en el input de búsqueda
inputBuscar.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        buscarProductos();
    }
});
/////////////////////FUNCION PAR BUSCAR EL PRODUCTO EN EL BUSCADOR///////////////////////
function buscarProductos() {
    let productosEncontrados = prendas.filter(producto => producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()));
    paginaActual = 1;
    mostrarTienda(productosEncontrados);
    crearPaginador(productosEncontrados);
}
//////////////////////////////////////////////////////////

function filtrar(categoria) {
    let filtrados = prendas.filter(tipo => tipo.categoria === categoria)
    paginaActual = 1;
    mostrarTienda(filtrados);
    crearPaginador(filtrados);
}

function cambiarPagina() {
    console.log(1);
}

function crearPaginador(filtrados) {

    numeroPaginas = Math.ceil(filtrados.length / elementosPorPaginas);

    var paginador = ""
    for (let i = 0; i < numeroPaginas; i++) {
        if (i + 1 === paginaActual) {
            paginador += `<li class="page-item active"><a class="page-link prenda-page" page="${i + 1}">${i + 1}</a></li>`
        } else {
            paginador += `<li class="page-item"><a class="page-link prenda-page" page="${i + 1}">${i + 1}</a></li>`
        }
    }
    document.getElementById("paginador").innerHTML = paginador;

    const paginas = document.querySelectorAll(".prenda-page");
    paginas.forEach((pagina) => {
        pagina.addEventListener('click', function () {
            paginaActual = parseInt(pagina.getAttribute("page"));
            mostrarTienda(filtrados);
            crearPaginador(filtrados);
        })
    })
}


function actualizarCarrito() {
    var selecionado = ""
    var totalPago = 0
    for (let i = 0; i < carrito.length; i++) {
        selecionado += '<div class="card mb-3">'
        selecionado += '<div class="row g-0">'
        selecionado += '<div class="col-md-4">'
        selecionado += '<img src="' + carrito[i].imagen + '" class="img-fluid rounded-start cart-img" alt="...">'
        selecionado += '</div>'
        selecionado += '<div id="prendasAgregados" class="col-md-8">'
        selecionado += '<div class="card-body">'
        selecionado += '<p class="card-text">' + carrito[i].nombre + '</p>'
        selecionado += '<p class="card-text"><small class="text-body-secondary">' + carrito[i].categoria + '</small></p>'
        selecionado += '</div>'
        selecionado += `<h5 class="card-title">${Soles.format(carrito[i].precio)}<i class="carritoDelete fa-regular fa-trash-can" codigo="${carrito[i].id}"></i></h5>`
        selecionado += '</div>'
        selecionado += '</div>'
        selecionado += '</div>'
        totalPago += carrito[i].precio
    }


    let montoCompra = Math.round((totalPago / 1.18) * 100) / 100
    let igv = Math.round((totalPago - montoCompra) * 100) / 100

    document.getElementById("cart-compras").innerHTML = selecionado;
    document.getElementById("montoSinIgv").innerHTML = Soles.format(montoCompra);
    document.getElementById("montoIgv").innerHTML = Soles.format(igv);
    document.getElementById("montoTotal").innerHTML = Soles.format(totalPago);

    const botones = document.querySelectorAll(".carritoDelete");
    botones.forEach((boton) => {
       boton.addEventListener('click', function () {
            let codigo = boton.getAttribute("codigo");
            quitarProductoCarrito(codigo)
        })
    })
    
}
