var alturaTriangulo
var baseTriangulo
var ladoTriangulo
var periTriangulo
var areaTriangulo
var radio
var circunferencia
var areaCirculo
var baseRectan
var alturaRectan
var areaRectan
var periRectan
var basemenorTrap
var basemayorTrap
var areaTrap
var periTrap
var alturaTrap
var ladoTrap

alturaTriangulo = parseFloat(prompt('Ingresa la altura del triángulo'))
baseTriangulo = parseFloat(prompt('Ingresa la medida de la base del triángulo'))
ladoTriangulo = Math.sqrt((Math.pow((baseTriangulo / 2),2)) + (Math.pow(alturaTriangulo,2)))
periTriangulo = (ladoTriangulo * 2) + baseTriangulo
areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
alert('El area del triángulo es ' + areaTriangulo)
alert('El perímetro del triángulo es ' + periTriangulo)

radio = parseFloat(prompt('Ingresa el radio del circulo'))
circunferencia = 2 * radio * 3.14159
areaCirculo = 3.14159 * (Math.pow(radio,2))
alert('El area del círculo es ' + areaCirculo)
alert('La circunferencia es ' + circunferencia)

baseRectan = parseFloat(prompt('Ingresa el valor de la base del rectángulo'))
alturaRectan = parseFloat(prompt('Ingresa la altura del rectángulo '))
areaRectan = alturaRectan * baseRectan
periRectan = (alturaRectan * 2) + (baseRectan * 2)
alert('El area del rectángulo es ' + areaRectan)
alert('El perímetro del rectángulo ' + periRectan)

basemayorTrap = parseFloat(prompt('Ingresa el valor de la base mayor del trapecio'))
basemenorTrap = parseFloat(prompt('Ingresa el valor de la base menor del trapecio'))
alturaTrap = parseFloat(prompt('Ingresa el valor de la altura del trapecio'))
areaTrap = ((basemayorTrap + basemenorTrap) / 2) * alturaTrap
ladoTrap = Math.sqrt(Math.pow(((basemayorTrap - basemenorTrap) / 2),2) + Math.pow(alturaTrap,2))
periTrap = (ladoTrap * 2) + basemenorTrap + basemayorTrap
alert('El valor del area del trapecio es ' + areaTrap)
alert('El perimetro del trapecio es ' + periTrap)

console.log('El area del triángulo es ' + areaTriangulo)
console.log('El perímetro del triángulo es ' + periTriangulo)
console.log('El area del círculo es ' + areaCirculo)
console.log('La circunferencia es ' + circunferencia)
console.log('El area del rectángulo es ' + areaRectan)
console.log('El perímetro del rectángulo ' + periRectan)
console.log('El valor del area del trapecio es ' + areaTrap)
console.log('El perimetro del trapecio es ' + periTrap)