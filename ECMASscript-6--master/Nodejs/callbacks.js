
// Entendiendo callbacks
function requestHandler(req, res){
    // El callback espera por la respuesta de la consulta
    User.findById(req.userId, function(err, user){
        // continue to ejecution of code if error
        if(err){
            return res.send(err)
        }else{
            // if not error
            Task.findById(user.taskId, function(err, tasks){
                if(err){
                    return res.send(err)
                }else{
                    tasks.completed = true,
                    task.save(function(err){
                        // if err
                        if(err){
                            return res.send(err)
                        }else{
                            res.send("task completed");
                        }
                    })
                }
            })
        }
    })
    //


}