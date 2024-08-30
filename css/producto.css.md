body {
    font-family: "Chewy", system-ui;
    font-weight: normal;
    font-style: normal;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}


/* Estilos para la barra de navegación */
.navbar {
    background-color: #26355d;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
  
  .logo img {
    height: 60px;
    width: auto;
  }
  
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }
  
  .nav-list li {
    gap: 20px;
  }
  
  .nav-list a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 40px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    font-size: 25px;  
  }
  
  .nav-list a:hover {
    background-color: #e75757;
  }
  .nav-list a.carrito-compras{
    background-color: transparent;
    pointer-events: painted;
  }
  #cuenta{
    background-color: #e75757;
    border-radius: 100%;
    display: inline-block;
    width: 30px;
    line-height: 30px;
    aspect-ratio: 1;
    text-align: center;
    position: absolute;
  }
  
 /*pagina producto*/
 h2.tituloproducto{
    text-align: center;
    font-size: 100px;
    color: #e75757;
    margin-top: 80px;
    text-shadow: -3px 4px #000;
   }
   .product-list{
    background-color: #3496ffe3;
    margin-top: 5%;
    padding-top: 5%;
   }

.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.product {
    background-color: #FFEB3B; /* Amarillo */
    border: 2px solid #FFEB3B;
    border-radius: 8px;
    width: 200px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.product:hover {
    transform: scale(1.05);
}

.product img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-bottom: 2px solid #FFEB3B;
    border-radius: 8px 8px 0 0;
}

.product-title {
    font-size: 1.1em;
    margin: 10px 0;
}

.product-description {
    font-size: 0.9em;
    padding: 10px;
    color: #333;
}

.product-price {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    margin: 10px 0;
}

.add-to-cart-btn {
    background-color: #0000FF; /* Azul fuerte */
    color: white;
    border: none;
    padding: 10px 20px;
    margin-bottom: 10px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 4px;
    text-transform: uppercase;
}

.add-to-cart-btn:hover {
    background-color: #3333FF; /* Azul más claro */
}

.product-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
