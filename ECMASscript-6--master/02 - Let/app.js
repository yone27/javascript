function ejemploVar(){
    var x = 100;
    if(true){
        var x = 50;
        console.log(x) //50
    }
    console.log(x) //50
}
function ejemploLet(){
    // las variables let funcionan en bloques
    let x = 100;
    if(true){
        let x = 50;
        console.log(x) //50
    }
    console.log(x) //100
}
// ejemploVar()
ejemploLet()
