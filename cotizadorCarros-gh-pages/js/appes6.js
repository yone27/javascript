// contructor para seguro
class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca
        this.anio = anio
        this.tipo = tipo
    }
    cotizarSeguro() {
        /*
            1 = americano 1.15
            2 = asiatico 1.05
            3 = europep 1.35
        */
        let cantidad
        const base = 2000
    
        switch(this.marca) {
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
    
        // Leer el año
        const diferencia = new Date().getFullYear() - this.anio
        // cada año de diferencia hay que reducir 3% el valor del seguro
        cantidad -= ((diferencia * 3)* cantidad / 100)
        /*
            si el seguro es basico 9 30%
            si el seguro es completo 9 50%
        */
    
        if(this.tipo === 'basico') {
            cantidad *= 0.30
        }else{
            cantidad *= 0.50
        }
        
        return cantidad
    }
}


// contructor ui
class Interfaz {
    //mensaje que se imprime en el html
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div')
        if(tipo === 'error') {
            div.classList.add('mensaje', 'error')
        }else{
            div.classList.add('mensaje', 'correcto')
        }
        div.innerHTML = `${mensaje}`
        formulario.insertBefore(div, document.querySelector('.form-group'))
    
        setTimeout(function(){
            document.querySelector('.mensaje').remove()
        },3000)
    }
    //imprime el resultado de la cotizacion
    mostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado')
        let marca
        switch(seguro.marca) {
            case '1': 
                marca = 'Americano'
                break
            case '2': 
                marca = 'Asiatico'
                break
            case '3': 
                marca = 'Europeo'
                break
        }
        // crear un div
        const div = document.createElement('div')
        div.innerHTML = `
        Tu resumen: 
        Marca: ${marca}
        Año: ${seguro.anio}
        Marca: ${seguro.tipo}
        Total: ${total}
        `
        const spinner = document.querySelector('#cargando img')
        spinner.style.display = 'block'
        setTimeout(function(){
            spinner.style.display = 'none'
            resultado.appendChild(div)
        },3000)
    }
}


// eventlistener
const formulario = document.getElementById('cotizar-seguro')

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    //leer la marca selecionada del select
    const marca = document.getElementById('marca')
    const marcaSeleccionada = marca.options[marca.selectedIndex].value

    //leer el año selecionada
    const anio = document.getElementById('anio')
    const anioSeleccionado = anio.options[anio.selectedIndex].value

    // lee el vlor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value

    // crear instancia de interfaz
    const interfaz = new Interfaz()

    // revisamos que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        // interfaz imprimiendo error
        interfaz.mostrarMensaje('Faltan datos, revisa el form y prueba de nuevo', 'error')
    }else{
        // limpiar results anteriores
        const resultados = document.querySelector('#resultado div')
        if(resultados != null) {
            resultados.remove()
        }
        // todo ok
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo)
        
        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro()
        // mostrar el result
        interfaz.mostrarResultado(seguro, cantidad)
        interfaz.mostrarMensaje('Cotizando... ', 'exito')
    }
})


const max = new Date().getFullYear(),
    min = max - 20,
    selectAnios = document.getElementById('anio')

for (let i= max; i>min; i--) {
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = i
    selectAnios.appendChild(option)
}