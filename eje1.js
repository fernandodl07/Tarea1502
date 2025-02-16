/*
UNA EMPRESA OFRECE UN BONO DE PRODUCTIVIDAD A SUS TRABAJADORES, DEPENDIENDO DEL NÚMERO DE UNIDADES PRODUCIDAS
EN UN MES. SI SE PRODUCEN MÁS DE 100 UNIDADES, SE OTORGA UN BONO DEL 5% DEL SALARIO. SI SE PRODUCEN MÁS DE 200 UNIDADES,
SE OTORGA UN BONO DEL 10% DEL SALARIO. SI SE PRODUCEN MENOS DE 100 UNIDADES, NO HAY BONO. ESCRIBE UN PROGRAMA QUE
CALCULE EL BONO A OTORGAR Y MUESTRE EL SALARIO TOTAL A RECIBIR.
*/
const salario = parseInt(prompt("Ingrese el salario: "))
const cantUnidades = parseInt(prompt("Ingrese la cantidad de unidades: "))
let aumento=0

if(cantUnidades >=200){
    aumento = salario + (salario *0.10)
}else if(cantUnidades >=100 && cantUnidades <=199){
    aumento = salario + (salario *0.05)
}else {
    aumento = salario
}
alert(`El aumento es de : ${aumento} `)
