// Espera a que todo el contenido del DOM se cargue
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones de "Agregar" en la tienda
    const cartButtons = document.querySelectorAll('.CartBtn');
    const cartIcon = document.getElementById('cart-icon'); // Asegúrate de que el icono del carrito tenga este ID
    const cartItemsContainer = document.getElementById('cart-items'); // Contenedor del carrito
    let cartCount = 0;

    // Chequea si hay un valor previo del carrito guardado en localStorage
    if (localStorage.getItem('cartCount')) {
        cartCount = parseInt(localStorage.getItem('cartCount'), 10);
        document.getElementById('cuenta').innerText = cartCount;
    }

    // Agrega un event listener a cada botón "Agregar"
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Incrementa el contador del carrito
            cartCount++;
            // Actualiza el elemento HTML del contador
            document.getElementById('cuenta').innerText = cartCount;
            // Guarda el nuevo valor en localStorage
            localStorage.setItem('cartCount', cartCount);
        });
    });

    // Agrega un event listener al ícono del carrito
    cartIcon.addEventListener('click', () => {
        // Muestra u oculta el carrito cuando se hace clic en el ícono
        if (cartItemsContainer.style.display === 'block') {
            cartItemsContainer.style.display = 'none';
        } else {
            cartItemsContainer.style.display = 'block';
            // Despliega el carrito automáticamente
            cartItemsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
