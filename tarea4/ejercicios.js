//ejercicio 1

var btnParImpar = document.querySelector('#btnParImpar')
var resultadoParImpar = document.querySelector('#resultadoParImpar')
var numeroParImpar = document.querySelector('#numeroParImpar')

btnParImpar.addEventListener('click', () => {
    let num = Number(numeroParImpar.value) % 2
    if (num === 0) {
        resultadoParImpar.value = 'Par'
    } else {
        resultadoParImpar.value = 'Impar'
    }
})

//ejercicio 2

var btnMayorMenor = document.querySelector('#btnMayorMenor')
var numMayorMenor1 = document.querySelector('#numMayorMenor1')
var numMayorMenor2 = document.querySelector('#numMayorMenor2')
var numMayorMenor3 = document.querySelector('#numMayorMenor3')
var resultadoMayor = document.querySelector('#resultadoMayor')
var resultadoMenor = document.querySelector('#resultadoMenor')

btnMayorMenor.addEventListener('click', () => {
    let num1 = Number(numMayorMenor1.value)
    let num2 = Number(numMayorMenor2.value)
    let num3 = Number(numMayorMenor3.value)

    if(num1 > num2 && num1 > num3){
        resultadoMayor.value = num1
    } else if(num2 > num1 && num2 > num3){
        resultadoMayor.value = num2
    } else if(num3 > num1 && num3 > num2){
        resultadoMayor.value = num3
    } else {
        resultadoMayor.value = ' Los numeros son iguales'
    }

    if(num1 < num2 && num1 < num3){
        resultadoMenor.value = num1
    } else if(num2 < num1 && num2 < num3){
        resultadoMenor.value = num2
    } else if(num3 < num1 && num3 < num2){
        resultadoMenor.value = num3
    } else {
        resultadoMenor.value = ' Los numeros son iguales'
    }
})

//ejercicio 3

var saldo = document.querySelector('#saldo')
var retiro = document.querySelector('#retiro')
var saldoRestante = document.querySelector('#saldoRestante')
var btnSaldo = document.querySelector('#btnSaldo')

btnSaldo.addEventListener('click', () => {
    let numSaldo = Number(saldo.value)
    let numRetiro = Number(retiro.value)
    if (numRetiro > numSaldo){
        saldoRestante.value = ' No hay saldo suficiente'
    } else {
        saldoRestante.value = numSaldo - numRetiro
    }
})

//ejercicio 4

var precio = document.querySelector('#precio')
var cantidad = document.querySelector('#cantidad')
var precioFinal = document.querySelector('#precioFinal')
var btnDescuento = document.querySelector('#btnDescuento')

btnDescuento.addEventListener('click', () => {
    let numPrecio = Number(precio.value)
    let numCantidad = Number(cantidad.value)

    if(numCantidad < 10){
        precioFinal.value = (numPrecio * numCantidad) - ((numPrecio * numCantidad) * 0.05)
    } else if(numCantidad >= 10 && numCantidad <= 20){
        precioFinal.value = (numPrecio * numCantidad) - ((numPrecio * numCantidad) * 0.1)
    } else if(numCantidad > 20){
        precioFinal.value = (numPrecio * numCantidad) - ((numPrecio * numCantidad) * 0.15)
    }

})

//ejercicio 5

var parcial1 = document.querySelector('#parcial1')
var parcial2 = document.querySelector('#parcial2')
var parcial3 = document.querySelector('#parcial3')
var ordinario = document.querySelector('#ordinario')
var btnOrdinario = document.querySelector('#btnOrdinario')

btnOrdinario.addEventListener('click', () => {

    if(( Number(parcial1.value) + Number(parcial2.value) + Number(parcial3.value)) >= 24 && Number(parcial2.value) >= 6 && Number(parcial3.value) >= 6){
        ordinario.value = ' NO'
    } else{
        ordinario.value = ' SI'
    }
})

//ejercicio 6

var hora = document.querySelector('#hora')
var saludo = document.querySelector('#saludo')
var btnSaludo = document.querySelector('#btnSaludo')

btnSaludo.addEventListener('click', () => {
    let numHora = Number(hora.value)

    if (numHora >= 1 && numHora < 13) {
        saludo.value = ' Buenos días'
    } else if (numHora >= 13 && numHora < 20) {
        saludo.value = ' Buenas tardes'
    } else if (numHora >= 20 && numHora < 24 || numHora === 0) {
        saludo.value = ' Buenas noches'
    } else  { 
        saludo.value = ' Hora no válida'
    }
})

//ejercicio 7

var grupo = document.querySelector('#grupo')
var carrera = document.querySelector('#carrera')
var btnCarrera = document.querySelector('#btnCarrera')

btnCarrera.addEventListener('click', () => {
    if (grupo.value === 'a' || grupo.value === 'b'){
        carrera.value = 'Tecnologías de internet'
    } else if(grupo.value === 'g' || grupo.value === 'h') {
        carrera.value = 'Ingeniería en software'
    } else {
        carrera.value = 'grupo desconocido'
    }
})

//ejercicio 8

var tipoTrabajador = document.querySelector('#tipoTrabajador')
var horasTrabajadas = document.querySelector('#horasTrabajadas')
var salario = document.querySelector('#salario')
var btnSalario= document.querySelector('#btnSalario')

btnSalario.addEventListener('click', () => {
    let horas = Number(horasTrabajadas.value)

    if (tipoTrabajador.value == 1) {
        salario.value = horas * 20
    } else if (tipoTrabajador.value == 2){
        salario.value = horas * 22
    } else if (tipoTrabajador.value == 3) {
        salario.value = horas * 25
    } else {
        salario.value = 'Ingrese un tipo de trabajador válido'
    }
})

//ejercicio 9

var calificacion = document.querySelector('#calificacion')
var escalaCalificacion = document.querySelector('#escalaCalificacion')
var btnCalificacion = document.querySelector('#btnCalificacion')

btnCalificacion.addEventListener('click', () => {
    if (calificacion.value >= 0 && calificacion.value < 6) {
        escalaCalificacion.value = ' C'
    } else if (calificacion.value >= 6 && calificacion.value < 8) {
        escalaCalificacion.value = ' B'
    } else if (calificacion.value >= 8 && calificacion.value < 10) {
        escalaCalificacion.value = ' A'
    } else if (calificacion.value == 10) {
        escalaCalificacion.value = ' A+'
    } else {
        escalaCalificacion.value = ' Calificación no válida'
    }
})

//ejercicio 10

var numeroDia = document.querySelector('#numeroDia')
var dia = document.querySelector('#dia')
var btnDia = document.querySelector('#btnDia')

btnDia.addEventListener('click', () => {

    let numDia = Number(numeroDia.value)
    switch(numDia) {
        case 1:
            dia.value = ' Lunes'
            break
            case 2:
                dia.value = ' Martes'
                break
                case 3:
                    dia.value = ' Miercoles'
                    break 
                    case 4:
                        dia.value = ' Jueves'
                        break
                        case 5:
                            dia.value = ' Viernes'
                            break
                            case 6:
                                dia.value = ' Sábado'
                                break 
                                case 7:
                                    dia.value = ' Domingo'
                                    break
                                    default:
                                        dia.value = ' Ese día no existe'
    }
})

//ejercicio 11

var pesos = document.querySelector('#pesos')
var divisa = document.querySelector('#divisa')
var pesosConvert = document.querySelector('#pesosConvert')
var btnConvert = document.querySelector('#btnConvert')

btnConvert.addEventListener('click', () =>{
let cantidadPeso = Number(pesos.value)

    switch(divisa.value) {
        case 'Dolar':
        case 'Dólar':
        case 'dolar':
        case 'dólar':
            pesosConvert.value = cantidadPeso / 19.69
            break
            case 'Euro':
            case 'euro':
                pesosConvert.value = cantidadPeso / 21.55
                break
                case 'Libra':
                case 'libra':
                    pesosConvert.value = cantidadPeso / 24.22
                    break
                    default: 
                    pesosConvert.value = ' Moneda no soportada'

    }
})

//ejercicio 12 

var diaSemana = document.querySelector('#diaSemana')
var numeroPeliculas = document.querySelector('#numeroPeliculas')
var precioFinal2 = document.querySelector('#precioFinal2')
var btnPeliculas = document.querySelector('#btnPeliculas')

btnPeliculas.addEventListener('click', () => {
let numPeliculas = Number(numeroPeliculas.value)
    switch(diaSemana.value) {
        case 'lunes':
        case 'Lunes':
            if ((numPeliculas % 2) == 0) {
                precioFinal2.value = (numPeliculas * 25 ) / 2
            } else {
                precioFinal2.value = (((numPeliculas - 1) * 25) / 2) + 25
            } 
            break
             case 'Martes':
            case 'martes':
                if ((numPeliculas % 3) == 0) {
                    precioFinal2.value = (numPeliculas * (2/3) ) * 25
                } else {
                    precioFinal2.value = (((numPeliculas - (numPeliculas % 3)) * (2/3)) * 25) + ((numPeliculas % 3) * 25)
                }
                break
                case 'miércoles':
                case 'Miércoles':
                case 'miercoles':
                case 'Miercoles':    
                    precioFinal2.value = (numPeliculas * 25) - ((numPeliculas * 25) * 0.1)
                    break
                    default:
                        precioFinal2.value = numPeliculas * 25 
    }
})