// Maps:  Estructuras de datos creaados atraves de una clave : valor es un obj
let mapa = new Map()

// Contruimos el mapa - setting  
mapa.set('nombre', 'Pikachu')
mapa.set('color', 'Amarillo')
mapa.set('tipo', 'Electrico')

console.log(mapa)

// Accediendo a sus elements
let name =  mapa.get('nombre')
console.log(name)

// Si tiene una clave
let valor =  mapa.has('tipo')
console.log(valor)

// Eliminar clave
let tipo =  mapa.delete('tipo')
console.log(tipo)