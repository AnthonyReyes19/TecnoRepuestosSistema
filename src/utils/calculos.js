// Función 1: Calcular total de venta (Precio x Cantidad)
function calcularTotal(precio, cantidad) {
    if (precio < 0 || cantidad < 0) return 0; // Validación simple
    return precio * cantidad;
}

// Función 2: Verificar si hay stock suficiente
function hayStock(stockActual, cantidadSolicitada) {
    return stockActual >= cantidadSolicitada;
}

module.exports = { calcularTotal, hayStock };