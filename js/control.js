// verificarCarrito.js

document.addEventListener('DOMContentLoaded', () => {
    const contenedorPedidos = document.getElementById('contenedor-pedidos');
    const cuentaSpan = document.getElementById('cuenta');
    const botonIrProductos = document.getElementById('boton-ir-productos');
    let memoria = JSON.parse(localStorage.getItem("productos")) || [];

    // Función para actualizar la tabla y el total de productos
    function actualizarTabla() {
        contenedorPedidos.innerHTML = ''; // Limpiar el contenedor antes de actualizar

        if (memoria.length === 0) {
            redirigirASinElementos();
            return;
        }

        memoria.forEach(producto => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td class="foto"><img src="${producto.imagen}" alt="${producto.nombre}" class="foto"></td>
                <td class="producto">${producto.nombre}</td>
                <td class="unitario">$${producto.precio.toFixed(2)}</td>
                <td class="adde">
                    <button class="menos" data-id="${producto.id}">-</button>
                    ${producto.cantidad}
                    <button class="mas" data-id="${producto.id}">+</button>
                </td>
                <td class="total">$${(producto.cantidad * producto.precio).toFixed(2)}</td>
                <td class="Eliminar">
                    <button class="Eliminar" data-id="${producto.id}">
                        <img src="../img/icon/borrar.png" class="borrar" alt="Eliminar">
                    </button>
                </td>
            `;
            contenedorPedidos.appendChild(fila);
        });

        // Agregar manejadores de eventos después de actualizar la tabla
        document.querySelectorAll('.menos').forEach(button => {
            button.addEventListener('click', manejarMenos);
        });
        document.querySelectorAll('.mas').forEach(button => {
            button.addEventListener('click', manejarMas);
        });
        document.querySelectorAll('.Eliminar').forEach(button => {
            button.addEventListener('click', manejarEliminar);
        });

        // Actualizar el total de productos
        actualizarCuenta();
    }

    // Función para redirigir a la página sin elementos
    function redirigirASinElementos() {
        window.location.href = '../pages/Error.html';
    }

    // Función para actualizar el total de productos en el carrito
    function actualizarCuenta() {
        const totalProductos = memoria.reduce((total, producto) => total + producto.cantidad, 0);
        cuentaSpan.textContent = totalProductos;

        if (totalProductos === 0) {
            redirigirASinElementos();
        }
    }

    // Función para manejar el clic en el botón "menos"
    function manejarMenos(event) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const producto = memoria.find(p => p.id === id);
        if (producto && producto.cantidad > 0) {
            producto.cantidad--;
            if (producto.cantidad === 0) {
                memoria = memoria.filter(p => p.id !== id); // Eliminar el producto si la cantidad es 0
            }
            actualizarLocalStorage();
            actualizarTabla();
        }
    }

    // Función para manejar el clic en el botón "mas"
    function manejarMas(event) {
        const id = parseInt(event.target.getAttribute('data-id'));
        const producto = memoria.find(p => p.id === id);
        if (producto) {
            producto.cantidad++;
            actualizarLocalStorage();
            actualizarTabla();
        }
    }

    // Función para manejar el clic en el botón "Eliminar"
    function manejarEliminar(event) {
        const id = parseInt(event.target.getAttribute('data-id'));
        memoria = memoria.filter(p => p.id !== id);
        actualizarLocalStorage();
        actualizarTabla();
    }

    // Función para actualizar el localStorage
    function actualizarLocalStorage() {
        localStorage.setItem('productos', JSON.stringify(memoria));
    }

    // Inicializar la tabla
    actualizarTabla();
});
