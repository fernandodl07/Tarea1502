/*
UN CINE OFRECE DIFERENTES PRECIOS DE ENTRADA SEGÚN LA EDAD DE LOS ESPECTADORES. LOS MENORES DE 12 AÑOS PAGAN 5
DÓLARES, LOS MAYORES DE 65 AÑOS PAGAN 7 DÓLARES, Y LOS DEMÁS PAGAN 10 DÓLARES. ESCRIBE UN PROGRAMA QUE PREGUNTE LA
EDAD DEL ESPECTADOR Y CALCULE EL PRECIO DE ENTRADA.
*/
const edad = parseInt(prompt("Ingrese la edad: "))
let precioEntrada = 0

if(edad <= 12){
  precioEntrada = 5
  alert("La entrada para menores de 12 años, el precio es: $" + precioEntrada)
}else if (edad >= 65) {
  precioEntrada = 7
  alert(`La entrada para mayores de 65 años, el precio es: ${precioEntrada} `)
}else {
    precioEntrada = 10
    alert("La entrada para edades entre 12 y 65 años, el precio es: $" + precioEntrada)
}
