function agregarCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("productos")) || [];

  const glosaryProducto = memoria.findIndex((p) => p.id === producto.id);

  if (glosaryProducto === -1) {
    producto.cantidad = 1;
    memoria.push(producto);
  } else {
    memoria[glosaryProducto].cantidad += 1;
  }

  localStorage.setItem("productos", JSON.stringify(memoria));
  actualizarContenedorCarrito();
}

// Función para actualizar el contenedor del carrito
function actualizarContenedorCarrito() {
  // Obtener el contador del carrito
  const cuentaElemento = document.getElementById("cuenta");

  // Obtener la memoria del carrito desde localStorage
  const memoria = JSON.parse(localStorage.getItem("productos")) || [];

  // Calcular la cantidad total de productos en el carrito
  const cantidadTotal = memoria.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  // Actualizar el contador en la interfaz
  cuentaElemento.textContent = cantidadTotal;
}

// Agregar eventos a los botones de agregar al carrito
function configurarBotonesAgregar() {
  const botones = document.querySelectorAll(".CartBtn");
  botones.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      const productoElemento = evento.target.closest(".producto-item");
      const productoId = parseInt(productoElemento.getAttribute("data-id"), 10);
      const productoNombre = productoElemento.querySelector("h3").textContent;

      // Crear un objeto de producto
      const producto = {
        id: productoId,
        nombre: productoNombre,
      };

      // Agregar el producto al carrito
      agregarCarrito(producto);
    });
  });
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", () => {
  // Configurar los botones de agregar al carrito
  configurarBotonesAgregar();
  // Actualizar el contador del carrito al cargar la página
  actualizarContenedorCarrito();
});
