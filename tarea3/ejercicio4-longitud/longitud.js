var metros
var pulgadas 
var pies 
var millas 
var centimetros
var kilometros

metros = parseFloat(prompt('Ingrese la cantidad de metros que se desea convertir'))
pulgadas = metros * 39.37
pies = metros * 3.281 
millas = metros / 1609.344
centimetros = metros * 100
kilometros = metros / 1000

alert(metros + ' metros equivalen a ' + pulgadas + ' pulgadas')
alert(metros + ' metros equivalen a ' + pies + ' pies')
alert(metros + ' metros equivalen a ' + millas + ' millas')
alert(metros + ' metros equivalen a ' + centimetros + ' centimetros')
alert(metros + ' metros equivalen a ' + kilometros + ' kilómetros')

console.log(metros + ' metros equivalen a ' + pulgadas + ' pulgadas')
console.log(metros + ' metros equivalen a ' + pies + ' pies')
console.log(metros + ' metros equivalen a ' + millas + ' millas')
console.log(metros + ' metros equivalen a ' + centimetros + ' centimetros')
console.log(metros + ' metros equivalen a ' + kilometros + ' kilómetros')