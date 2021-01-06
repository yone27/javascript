var x = 2;
{
    const x = 2;
}
// Exponente
x**2

// default value
function f(x, y=10){
    return x + y;
}


var numbers = [4,2,5,8,9,8]
var first = numbers.find(function(value, index){
    return value == 9

})

var numbers2 = [4, 9, 16, 25, 29];
var first2 = numbers2.findIndex(function(value, index){
    return value == 9
})

var x = Number.EPSILON
var x = Number.MIN_SAFE_INTEGER;
var x = Number.MAX_SAFE_INTEGER;


// console.log(Number.isInteger(10.5))
// console.log(Number.isSafeInteger(10))

console.log(isNaN("Hello")  )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Learnin js
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var carName = "Volvo"

var mi = new Array("pedro", "pepito", "juan");

// añadiendo elementos
mi.push("lemon")
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,"lemon","kiwi")
console.log(fruits)