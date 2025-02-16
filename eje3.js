/*
  UNA COMPAÑÍA DE SEGUROS OFRECE DIFERENTES TIPOS DE PÓLIZAS, CON DIFERENTES COBERTURAS Y PRECIOS. LA PÓLIZA BÁSICA
  TIENE UNA COBERTURA DEL 50% Y UN PRECIO DE 50 DÓLARES. LA PÓLIZA INTERMEDIA TIENE UNA COBERTURA DEL 75% Y UN PRECIO DE
  75 DÓLARES. LA PÓLIZA PREMIUM TIENE UNA COBERTURA DEL 100% Y UN PRECIO DE 100 DÓLARES. ESCRIBE UN PROGRAMA QUE
  PREGUNTE AL USUARIO QUÉ TIPO DE PÓLIZA DESEA Y CALCULE EL PRECIO TOTAL A PAGAR.
*/

let Poliza = prompt("Ingrese el tipo de póliza que desea(Básica, Intermedia, Premium): ").toLowerCase()
let precio = 0


if (Poliza === "basica"){
    precio = 50
    alert(`Genail escogiste la poliza basica, el total es : ${precio} `)
}else if (Poliza === "intermedia"){
  precio = 75
  alert(`Genail escogiste la poliza basica, el total es : ${precio} `)
}else if (Poliza === "premium"){
  precio = 100
  alert(`Genail escogiste la poliza basica, el total es : ${precio} `)
}else {
    alert("Ingrese una opcion valida entre Basica, Intermedia o Premium.")
}
