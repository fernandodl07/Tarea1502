/*
UNA TIENDA DE ROPA TIENE DIFERENTES PROMOCIONES SEGÚN LA CANTIDAD DE PRENDAS COMPRADAS. SI SE COMPRAN MÁS DE 3
PRENDAS, SE APLICA UN DESCUENTO DEL 10% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MÁS DE 5 PRENDAS, SE APLICA UN
DESCUENTO DEL 20% EN EL TOTAL DE LA COMPRA. SI SE COMPRAN MENOS DE 3 PRENDAS, NO HAY DESCUENTO. ESCRIBE UN PROGRAMA
QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.
*/

const cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar: "))
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario de cada prenda: "))
let totalCompra = cantidad * precioUnitario
let descuento=0

if (cantidad > 5) {
    descuento = 0.2
} else if (cantidad > 3) {
    descuento = 0.1
}else if (cantidad < 3) {
    descuento =0
}

let totalPagar = totalCompra - (totalCompra * descuento)
alert(`El total a pagar con el descuento aplicado es de: ${totalPagar.toFixed(2)} `)
