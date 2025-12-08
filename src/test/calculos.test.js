const { calcularTotal, hayStock } = require('../utils/calculos');

describe('Pruebas de Lógica de Negocio', () => {
    
    // Prueba para el cálculo de total
    test('Debe calcular correctamente el total de 2 productos a $10', () => {
        expect(calcularTotal(10, 2)).toBe(20);
    });

    test('Debe devolver 0 si el precio es negativo', () => {
        expect(calcularTotal(-5, 2)).toBe(0);
    });

    // Prueba para verificación de stock
    test('Debe permitir venta si hay stock suficiente', () => {
        expect(hayStock(50, 5)).toBe(true);
    });

    test('Debe negar venta si NO hay stock suficiente', () => {
        expect(hayStock(5, 10)).toBe(false);
    });
});