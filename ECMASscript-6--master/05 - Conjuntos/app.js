// conjuntos definen listas de elementos que no se repiten
// objeto con valors sin clave
let languages = new Set()

// add elements
languages.add('php')
languages.add('java')
languages.add('c#').add('go')

console.log(languages)
// tiene php
console.log(languages.has('php'))
// cantidad de elementos
console.log(languages.size)
// Eliminar elementos
console.log(languages.delete('php'))
// Iterar
languages.forEach(languages=> console.log(languages))
