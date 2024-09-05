// producto.js

// Array de objetos que representan cada producto
const productos = [
  {
    id: 1,
    nombre: "Fresas Libra",
    precio: 5.99,
    imagen: "../img/productos/fresas.jpg",
    descripcion:
      "¡Descubre la frescura y el sabor de nuestras fresas!, para quienes buscan calidad y dulzura en cada bocado. Con su vibrante color rojo y su textura jugosa, son ideales para disfrutar solas, en batidos, postres o ensaladas",
  },
  {
    id: 2,
    nombre: "Naranjas Libra",
    precio: 5.99,
    imagen: "../img/productos/naranjas.jpg",
    descripcion:
      "¡Disfruta del sabor fresco y jugoso de nuestras naranjas! Con cada bocado, obtén un toque cítrico revitalizante y una dosis de vitamina C, ideal para un impulso saludable en cualquier momento del día.",
  },
  {
    id: 3,
    nombre: "Tomates docena",
    precio: 4.99,
    imagen: "../img/productos/tomates.jpg",
    descripcion:
      "¡Realza tus platillos con el sabor fresco de nuestros tomates! Cada tomate ofrece un equilibrio perfecto entre dulzura y acidez, ideal para ensaladas, salsas y mucho más. ¡La calidad y frescura que tu cocina merece!",
  },
  {
    id: 4,
    nombre: "Soda Brasileña",
    precio: 4.99,
    imagen: "../img/productos/bebida.jpg",
    descripcion:
      "¡Descubre el sabor auténtico de Brasil con nuestra soda brasileña! Refresca tu paladar con una mezcla única de sabores exóticos y burbujeantes que te transportará directamente a las vibrantes calles de Brasil.",
  },
  {
    id: 5,
    nombre: "Six Pack Gaseosa Coca Cola",
    precio: 12.99,
    imagen: "../img/productos/cocacola.jpg",
    descripcion:
      "¡Disfruta la refrescante burbujeante de Coca-Cola! Cada sorbo ofrece el icónico sabor que todos conocen y aman, perfecto para acompañar cualquier momento del día. ¡El clásico refresco que siempre te hará sonreír!",
  },
  {
    id: 6,
    nombre: "Botella de vino",
    precio: 29.99,
    imagen: "../img/productos/vino.jpg",
    descripcion:
      "¡Descubre la elegancia en cada copa con nuestro vino premium! Su riqueza de sabores y aromas refinados realza cualquier ocasión, haciendo de cada brindis un momento especial",
  },
  {
    id: 7,
    nombre: "Docena de Huevos",
    precio: 6.99,
    imagen: "../img/productos/huevos.jpg",
    descripcion:
      "¡Asegura calidad y frescura con nuestra docena de huevos! Ideales para cualquier receta, ofrecen un sabor delicioso y versatilidad en la cocina. ¡El ingrediente esencial para tus platos favoritos!",
  },
  {
    id: 8,
    nombre: "Pan Frances",
    precio: 4.99,
    imagen: "../img/productos/pan.jpg",
    descripcion:
      "¡Disfruta la frescura y crocancia de nuestro pan francés! Perfecto para acompañar cualquier comida o disfrutar solo, con una textura ligera y un sabor auténtico. ¡Un clásico que siempre deleita!",
  },
  {
    id: 9,
    nombre: "Pan con Ajo",
    precio: 3.99,
    imagen: "../img/productos/panconajo.jpg",
    descripcion:
      "¡Deléitate con el sabor irresistible de nuestro pan con ajo! Perfecto para acompañar tus comidas, combina la crocancia del pan fresco con un toque sabroso y aromático de ajo. ¡Un deleite que realza cada bocado!",
  },
  {
    id: 10,
    nombre: "Paquete de Salchichas",
    precio: 9.99,
    imagen: "../img/productos/salchichas.jpg",
    descripcion:
      "¡Disfruta el sabor y la versatilidad de nuestras salchichas! Perfectas para cualquier comida, ofrecen una textura jugosa y un sabor delicioso que realza cada plato. ¡Un clásico que siempre agrada!",
  },
  {
    id: 11,
    nombre: "Pan Baguet",
    precio: 3.99,
    imagen: "../img/productos/baget.jpg",
    descripcion:
      "¡Saborea la autenticidad de nuestra baguette fresca! Con su corteza crujiente y miga suave, es el acompañamiento perfecto para cualquier comida o para disfrutar con tus ingredientes favoritos",
  },
  {
    id: 12,
    nombre: "Café granulado",
    precio: 7.99,
    imagen: "../img/productos/cafe.jpg",
    descripcion:
      "Experimenta la comodidad y el sabor robusto del café granulado: una solución instantánea para disfrutar de un café de alta calidad en minutos. Ideal para aquellos que buscan rapidez y un sabor excepcional sin sacrificar el gusto",
  },
];

// Función para mostrar productos en el HTML
function mostrarProductos() {
  const contenedorProductos = document.getElementById("contenedor-productos");

  productos.forEach((producto) => {
    // Crear un contenedor para cada producto
    const productoElemento = document.createElement("div");
    productoElemento.classList = "product";

    // Estructura HTML para cada producto
    productoElemento.innerHTML = `

   <div class="card-Tienda">
    <div class="image-Tienda">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="image-Tienda">
        <div class="info">
         <p>${producto.descripcion}</p>
        </div>
    </div>
        <span class="title-producto">${producto.nombre}</span>
        <span class="price">$${producto.precio}</span>
    </div>
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
    productoElemento
      .getElementsByClassName("CartBtn")[0]
      .addEventListener("click", () => agregarCarrito(producto));
  });
}

// Función para manejar el evento de agregar al carrito
function agregarAlCarrito(nombreProducto) {
  alert(`${nombreProducto} ha sido agregado al carrito.`);
}

// Llamar a la función para mostrar los productos cuando la página cargue
window.onload = mostrarProductos;
