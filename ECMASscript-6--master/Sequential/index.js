const {taskOne, taskTwo} = require('./tasks')
// Codigo secuencial
async function main(){
    // Midiendo el timing
    try{
        // Start time
        console.time('Measuring time')
        // Codigo de manera paralela
        const results = await Promise.all([taskOne(),taskTwo()])

        console.timeEnd('Measuring time')
        // end time
        
        console.log('Task one ',results[0])
        console.log('Task two ',results[1])
    }catch(e){
        console.log(e)
    }
}

main()
