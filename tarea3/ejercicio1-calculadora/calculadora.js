var numero1 
var numero2 

numero1 = parseFloat(prompt('Ingresa el primer valor'))
numero2 = parseFloat(prompt('Ingresa el segundo valor'))

var resultSuma = numero1 + numero2
var resultResta = numero1 - numero2
var resultMultiplicacion = numero1 * numero2
var resultDivision = numero1 / numero2
var Residuo = numero1 % numero2
var resultCuadrado = Math.pow(numero1, 2)
var resultCubo = Math.pow(numero2, 3)

console.log(numero1 + ' + ' + numero2 + ' = ' + resultSuma)
console.log(numero1 + ' - ' + numero2 + ' = ' + resultResta)
console.log(numero1 + ' * ' + numero2 + ' = ' + resultMultiplicacion)
console.log(numero1 + ' / ' + numero2 + ' = ' + resultDivision)
console.log(numero1 + ' % ' + numero2 + ' = ' + Residuo)
console.log(numero1 + ' ^ ' + '2' + ' = ' + resultCuadrado)
console.log(numero2 + ' ^ ' + '3' + ' = ' + resultCubo)

alert(numero1 + ' + ' + numero2 + ' = ' + resultSuma)
alert(numero1 + ' - ' + numero2 + ' = ' + resultResta)
alert(numero1 + ' * ' + numero2 + ' = ' + resultMultiplicacion)
alert(numero1 + ' / ' + numero2 + ' = ' + resultDivision)
alert(numero1 + ' % ' + numero2 + ' = ' + Residuo)
alert(numero1 + ' ^ ' + '2' + ' = ' + resultCuadrado)
alert(numero2 + ' ^ ' + '3' + ' = ' + resultCubo)

/* var x = parseInt(prompt("Enter a Value", "0"), 10);
var y = parseInt(prompt("Enter a Value", "0"), 10); */