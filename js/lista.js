// Espera a que todo el contenido del DOM se cargue
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de "Agregar" en la tienda
  const cartButtons = document.querySelectorAll(".CartBtn");
  const cartIcon = document.getElementById("cart-icon"); // Asegúrate de que el icono del carrito tenga este ID
  const cartItemsContainer = document.getElementById("cart-items"); // Contenedor del carrito
  let cart = []; // Array para almacenar productos en el carrito

  // Chequea si hay un carrito guardado en localStorage
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    updateCartCount();
    renderCartItems(); // Renderiza los elementos del carrito
  }

  // Función para actualizar el número de artículos en el carrito
  function updateCartCount() {
    document.getElementById("cuenta").innerText = cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  }

  // Función para agregar un producto al carrito
  function addToCart(productId, productName, productPrice) {
    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
      });
    }

    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCartItems();
  }

  // Agrega un event listener a cada botón "Agregar"
  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id; // Asume que cada botón tiene un atributo data-id con el ID del producto
      const productName = button.dataset.name; // Asume que cada botón tiene un atributo data-name con el nombre del producto
      const productPrice = parseFloat(button.dataset.price); // Asume que cada botón tiene un atributo data-price con el precio del producto
      addToCart(productId, productName, productPrice);
    });
  });

  // Renderiza los elementos del carrito
  function renderCartItems() {
    cartItemsContainer.innerHTML = ""; // Limpiar el contenedor
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
          <p><strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${
        item.quantity
      }</p>
        `;
      cartItemsContainer.appendChild(itemElement);
    });
  }

  // Agrega un event listener al ícono del carrito
  cartIcon.addEventListener("click", () => {
    // Muestra u oculta el carrito cuando se hace clic en el ícono
    if (cartItemsContainer.style.display === "block") {
      cartItemsContainer.style.display = "none";
    } else {
      cartItemsContainer.style.display = "block";
      // Despliega el carrito automáticamente
      cartItemsContainer.scrollIntoView({ behavior: "smooth" });
    }
  });
});
