// funciones que devuelven datos para poder controlarlos o mostrarlos

function* MiGenerador(){
    var index = 0;
    while(index<3){
        yield index++;
    }
}

let gen = MiGenerador()
console.log(gen.next().value)
console.log(gen.next().value)