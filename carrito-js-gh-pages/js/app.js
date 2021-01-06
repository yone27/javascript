// Variables
const listaCarrito = document.querySelector('#lista-carrito tbody')
// Event listeners
document.getElementById('lista-cursos').addEventListener('click', addCourse)
document.getElementById('lista-carrito').addEventListener('click', deleteCourse)
document.addEventListener('DOMContentLoaded', cargarCursos)
document.getElementById('vaciar-carrito').addEventListener('click', deleteAllCourse)

// Funtions
function cargarCursos() {
    let items = obtenerItemsLocalStorage()
    
    items.forEach(function(item){
        listaCarrito.innerHTML += item
    })
}

function addCourse(e) {
    e.preventDefault()

    if(e.target.classList.contains('agregar-carrito')) {
        let curso = e.target.parentElement.parentElement

        const infoCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }
        
        let item = `
            <tr data-id="${infoCurso.id}">
                <td>
                    <img src="${infoCurso.imagen}" class="imagen-curso u-full-width">
                </td>
                <td>
                    <h4>${infoCurso.titulo}</h4>
                </td>
                <td>
                    <p class="precio">${infoCurso.precio}</p>
                </td>
                <td>
                    <a href="#" class="borrar-item-cart">X</a>
                </td>
            </tr>
        `

        listaCarrito.innerHTML += item

        //add to localStorage
        agregarItemLocalStorage(item)
    }
}

//add to localStorage
function agregarItemLocalStorage(item) {
    let items
    items = obtenerItemsLocalStorage()
    items.push(item)   
    localStorage.setItem('items', JSON.stringify(items))
}

function obtenerItemsLocalStorage() {
    let items
    if(localStorage.getItem('items')===null) {
        items=[]
    }else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items
}

function deleteCourse(e) {
    e.preventDefault()

    if(e.target.className === 'borrar-item-cart') {
        let item = e.target.parentElement.parentElement
        borrarItemLocalStorage(item.getAttribute('data-id'))
        item.remove()
    }
    return false
}

function borrarItemLocalStorage(item) {
    let items= obtenerItemsLocalStorage(), itemBorrar = `data-id="${item}"`
    items.forEach(function(item, index) {
        if(item.includes(itemBorrar)) {
            items.splice(index, 1)
        }
    })
    localStorage.setItem('items', JSON.stringify(items))
}

function deleteAllCourse(e) {
    e.preventDefault()

    let listaCarrito = document.querySelectorAll('#lista-carrito tbody tr')

    listaCarrito.forEach(function(item){
        item.remove()
    })

    /*while(listaCursos.firschild) {
        listaCursos.removeChild(listaCursos.firschild)
    }*/
}