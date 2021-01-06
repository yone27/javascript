// Repasando async await //
async function requestHandlers(req, res){
    /* Como este codigo toma tiempo le debemos decir "espera"  await*/

    // manejando errores de manera sincrona
    try {
        // find user by req.userId
        const user = await User.findById(req.userId);
        // Ahora buscamos las tareas de este usuario
        const tasks = await Task.findById(user.tasksId)
        // Guardamos 
        await tasks.save()
    
        req.send('task completed')
    }catch(e){
        res.send(e)
    }
}