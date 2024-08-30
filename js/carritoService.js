function agregarCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    console.log(memoria);
    if (!memoria){
        const nuevoProducto = productos;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("productos",JSON.stringify([nuevoProducto]));
    } else {
        const glosaryProducto = memoria.findIndex(productos => producto.id === producto.id)
        console.log(glosaryProducto)
        if (glosaryProducto === -1){
            const nuevaMemoria = memoria;
            nuevaMemoria.push()
        }
    }
}

function getnuevoProductoMemoria(productos){
    const nuevoProducto = productos;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}