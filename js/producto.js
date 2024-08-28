// producto.js

// Array de objetos que representan cada producto
const productos = [
    {
        nombre: "Audífonos gamer over ear",
        precio: 36.90,
        imagen: "../img/productos/baget.jpg",
        descripcion: "Audífonos de alta calidad con cancelación de ruido."
    },
    {
        nombre: "Funda de silicona para control de PS5",
        precio: 32.90,
        imagen: "../img/productos/baget.jpg",
        descripcion: "Funda protectora antideslizante para tu control de PS5."
    },
    {
        nombre: "Mouse pad gamer RGB",
        precio: 50.90,
        imagen: "../img/productos/baget.jpg",
        descripcion: "Mouse pad con iluminación RGB y superficie de precisión."
    },
    {
        nombre: "Cable HDMI trenzado 10m",
        precio: 70.90,
        imagen: "../img/productos/baget.jpg",
        descripcion: "Cable HDMI de alta velocidad con resistencia al desgaste."
    },
    {
        nombre: "Cámara Web USB con micrófono",
        precio: 80.90,
        imagen: "../img/productos/baget.jpg",
        descripcion: "Cámara web HD con micrófono integrado para videoconferencias."
    }
];

// Función para mostrar productos en el HTML
function mostrarProductos() {
    const contenedorProductos = document.getElementById('contenedor-productos');

    productos.forEach(producto => {
        // Crear un contenedor para cada producto
        const productoElemento = document.createElement('div');
        productoElemento.className = 'product';

        // Estructura HTML para cada producto
        productoElemento.innerHTML = `
            <div class="product-content">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <span class="product-price">${producto.precio} $</span>
                <button class="add-to-cart-btn" onclick="agregarAlCarrito('${producto.nombre}')">Agregar al carrito</button>
            </div>
        `;

        // Añadir el contenedor del producto al contenedor principal
        contenedorProductos.appendChild(productoElemento);
    });
}

// Función para manejar el evento de agregar al carrito
function agregarAlCarrito(nombreProducto) {
    alert(`${nombreProducto} ha sido agregado al carrito.`);
    // Aquí puedes agregar más lógica para manejar el carrito
}

// Llamar a la función para mostrar los productos cuando la página cargue
window.onload = mostrarProductos;
