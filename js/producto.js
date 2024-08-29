// producto.js

// Array de objetos que representan cada producto
const productos = [
    {
        nombre: "Fresas",
        precio: "$5.99 La libra",
        imagen: "../img/productos/fresas.jpg",
        descripcion: "¡Descubre la frescura y el sabor de nuestras fresas!, para quienes buscan calidad y dulzura en cada bocado. Con su vibrante color rojo y su textura jugosa, son ideales para disfrutar solas, en batidos, postres o ensaladas"
    },
    {
        nombre: "Naranjas",
        precio: "$5.99 La libra",
        imagen: "../img/productos/naranjas.jpg",
        descripcion: "¡Disfruta del sabor fresco y jugoso de nuestras naranjas! Con cada bocado, obtén un toque cítrico revitalizante y una dosis de vitamina C, ideal para un impulso saludable en cualquier momento del día."
    },
    {
        nombre: "Tomates",
        precio: "$4.99",
        imagen: "../img/productos/tomates.jpg",
        descripcion: "¡Realza tus platillos con el sabor fresco de nuestros tomates! Cada tomate ofrece un equilibrio perfecto entre dulzura y acidez, ideal para ensaladas, salsas y mucho más. ¡La calidad y frescura que tu cocina merece!"
    },
    {
        nombre: "Soda Brasileña",
        precio: "$4.99 Unidad",
        imagen: "../img/productos/bebida.jpg",
        descripcion: "¡Descubre el sabor auténtico de Brasil con nuestra soda brasileña! Refresca tu paladar con una mezcla única de sabores exóticos y burbujeantes que te transportará directamente a las vibrantes calles de Brasil."
    },
    {
        nombre: "Gaseosa Coca Cola",
        precio: "$12.99 Six Pack",
        imagen: "../img/productos/cocacola.jpg",
        descripcion: "¡Disfruta la refrescante burbujeante de Coca-Cola! Cada sorbo ofrece el icónico sabor que todos conocen y aman, perfecto para acompañar cualquier momento del día. ¡El clásico refresco que siempre te hará sonreír!"
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
        <button class="CartBtn" data-name="${producto.nombre}" data-price="${producto.precio}">
            <span class="IconContainer"> 
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
            </span>
            <p class="text">Agregar</p>
        </button>
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
