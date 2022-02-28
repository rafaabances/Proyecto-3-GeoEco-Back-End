const express = require("express")
const Comment = require("../models/Comment")
const CommentRouter = express.Router();


CommentRouter.get("/comments", async (req, res)=>{
    let Comments = await Comment.find({}) // Se hace con find ( find viene de mongoose) para buscar dentro de la colección, así devuelve todos los objetos que hay en Author
    try {
        
    return res.status(200).send({
        success: true,
        Comments
    })

} catch (error) {
    return res.status(500).send({
        success: false,
        message: error.message
    }) 
}

})

CommentRouter.get("/findcomment/:id", async (req, res) => {
    const {
        id
    } = req.params
    try {
        let comment = await Comment.findById(id).populate("user") // propiedad en comment,js, la de  user está en minúsculas

        //errores antes de la respuesta final

        if (!comment) {
            res.status(400).send({
                success: false,
                message: error.message
            })
        }

        res.status(200).send({
            success: true,
            message: "Comentario encontrado",
            comment
        })

        // res.status(200).json({ // también se puede poner con json
        //     success: true,
        //     message: "Autor encontrado",
        //     author
        // })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

CommentRouter.post("/newcomment", async (req, res) => {
    const {
      user,
      commentText

    } = req.body

    let comment = new Comment({ // viene del modelo user
       user : user,
       commentText
    })


    if (commentText.length < 2 ) {
        return res.status(400).send({
            success: false,
            message: "El comentario es demasiado corto"
        })
    }

    if (!commentText) {
        return res.status(400).send({
            success: false,
            message: "No has escrito ningún comentario"
        })
    }


    await comment.save()
    return res.status(200).send({
        success: true,
        message: "Comentario creado",
        comment
    })
})

CommentRouter.put("/updatecomment/:id", async(req, res)=>{
    const {id} = req.params
    const {user, commentText} = req.body
    try {
        
    await User.findOneAndUpdate(id,{user,commentText}) 
    
    if (!commentText) {
        return res.status(400).send({
            success: false,
            message: "No has escrito ningún comentario"
        })
    }
   

    return res.status(200).send({
        success: true,
        message: "Comentario Editado"
    })

} catch (error) {
    res.status(500).send({
        success: false,
        message: error.message
    })
}
})


CommentRouter.delete("/deletecomment/:id", async (req, res)=>{
    const{id} = req.params
    try {
        await Comment.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Comentario eliminado"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        }) 
    }
})





module.exports = CommentRouter