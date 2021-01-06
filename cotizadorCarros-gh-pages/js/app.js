// Seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca
    this.anio = anio
    this.tipo = tipo
}
Seguro.prototype.cotizarSeguro = function (info) {
    /*
        1 = americano 1.5
        2 = asiatio 1.05
        3 = europeo 1.35
    */
    let cantidad
    const base = 2000

    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break
        case '2':
            cantidad = base * 1.05
            break
        case '3':
            cantidad = base * 1.35
            break
    }

    // leer el año
    const diferencia = new Date().getFullYear() - this.anio
    //cada año de diferencia hay que reducir 3% el valro del seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100

    if (this.tipo === 'basico') {
        cantidad *= 1.30
    } else {
        cantidad *= 1.50
    }

    return cantidad
}

// Todo lo que se muestra
function Interfaz() { }

Interfaz.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement('div')
    if (tipo === 'error') {
        div.classList.add('error', 'mensaje')
    } else {
        div.classList.add('correcto', 'mensaje')
    }

    div.innerHTML = `${mensaje}`
    formulario.insertBefore(div, document.querySelector('.form-group'))

    setTimeout(function () {
        document.querySelector('.mensaje').remove()
    }, 2000)
}
Interfaz.prototype.mostrarResultado = function (seguro, total) {
    const resultado = document.getElementById('resultado')
    let marca
    switch (seguro.marca) {
        case '1':
            marca = 'Americano'
            break;
        case '2':
            marca = 'Asiatico'
            break; 
        case '3':
            marca = 'Europeo'
            break;
        default:
            break;
    }

    //crear div
    const div = document.createElement('div')
    div.innerHTML = `
        <p class='header'   >Tu resumen:</p>
        <p>Marca: ${marca}</p>
        <p>Año: ${seguro.anio}</p>
        <p>Marca: ${seguro.tipo}</p>
        <p>Total: ${total}</p>
    `
    const spinner = document.querySelector('#cargando img')
    spinner.style.display = 'block'
    setTimeout(function(){
        spinner.style.display = 'none'
        resultado.appendChild(div)
    }, 2000)
}


// Event listeners
const formulario = document.getElementById('cotizar-seguro')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    //leer la marca seleccionada del select
    const marca = document.getElementById('marca')
    const marcaSeleccionada = marca.options[marca.selectedIndex].value

    //leer el año seleccionado del select
    const anio = document.getElementById('anio')
    const anioSeleccionado = anio.options[anio.selectedIndex].value

    //valor del radio buton 
    const tipo = document.querySelector('input[name="tipo"]:checked').value

    const interfaz = new Interfaz()

    //validamos los campos
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        // imprimiendo error de interfaz
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario', 'error')
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div')
        if(resultados !== null) {
            resultados.remove()
        }
        //instanciar seguro
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo)
        const cantidad = seguro.cotizarSeguro(seguro)
        interfaz.mostrarResultado(seguro, cantidad)
        interfaz.mostrarMensaje('Cotizando...', 'exito')
    }
})



const max = new Date().getFullYear(),
    min = max - 20
const selectAnios = document.getElementById('anio')

for (let i = max; i > min; i--) {
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    selectAnios.appendChild(option)
}