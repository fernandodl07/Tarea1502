/*
UN RESTAURANTE OFRECE DESCUENTOS A LOS CLIENTES SEGÚN LA EDAD. LOS MENORES DE 12 AÑOS TIENEN UN DESCUENTO DEL 50% EN
SU CONSUMO. LOS MAYORES DE 65 AÑOS TIENEN UN DESCUENTO DEL 25% EN SU CONSUMO. LOS CLIENTES ENTRE 12 Y 65 AÑOS NO
TIENEN DESCUENTO. ESCRIBE UN PROGRAMA QUE CALCULE EL DESCUENTO A APLICAR Y MUESTRE EL MONTO TOTAL A PAGAR.
*/

const consumo = parseInt(prompt("Ingrese el consumo del cliente: "))
const edad = parseInt(prompt("Ingrese la edad del cliente: "))
let descuento =0

if(edad >=65 ){
    descuento = consumo*0.25
}else if (edad <=12){
    descuento = consumo*0.5
}else if(edad>12 && edad<65){
    descuento = 0
}

let total = consumo - descuento
alert(`El aumento es de : ${total} `)
