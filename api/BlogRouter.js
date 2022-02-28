const express = require("express")
const Blog = require("../models/Blog")
const BlogRouter = express.Router();


BlogRouter.get("/news", async (req, res) => {
    let news = await Blog.find({}) // Se hace con find ( find viene de mongoose) para buscar dentro de la colección, así devuelve todos los objetos que hay en Author
    try {

        return res.status(200).send({
            success: true,
            news
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

BlogRouter.get("/findnew/:id", async (req, res) => {
    const {
        id
    } = req.params
    try {
        let blog = await Blog.findById(id).populate("user").populate({path:'commentNew', select:'user commentText'}).populate("category")

        //errores antes de la respuesta final

        if (!blog) {
            res.status(400).send({
                success: false,
                message: error.message
            })
        }

        res.status(200).send({
            success: true,
            message: "Noticia o artículo encontrado",
            blog
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


BlogRouter.post("/newarticle", async (req, res) => {
    const {
        titleNew,
        user,
        noticia,
        commentNew,
        category

    } = req.body
    let blog = new Blog({ // viene del modelo user
        titleNew,
        user: user,
        noticia,
        commentNew: commentNew,
        category: category
    })

    if (titleNew.length < 5) {
        return res.status(400).send({
            success: false,
            message: "Título del artículo demasiado corto"
        })
    }



    if (!titleNew || !noticia) {
        return res.status(400).send({
            success: false,
            message: "No has completado todos los campos"
        })
    }


    await blog.save()
    return res.status(200).send({
        success: true,
        blog
    })
})

BlogRouter.put("/updatenew/:id", async (req, res) => {
    const {
        id
    } = req.params
    const {
        titleNew,
        user,
        noticia,
        commentNew,
        category
    } = req.body
    try {

        if (titleNew.length < 10) {
            return res.status(400).send({
                success: false,
                message: "Título del artículo demasiado corto"
            })
        }

        if (!titleNew || !noticia) {
            return res.status(400).send({
                success: false,
                message: "No has completado todos los campos"
            })
        }


        await Blog.findOneAndUpdate(id, {
            titleNew,
            user,
            noticia,
            commentNew,
            category
        })


        return res.status(200).send({
            success: true,
            message: "Noticia Modificado"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})


BlogRouter.delete("/deletenew/:id", async (req, res)=>{
    const{id} = req.params
    try {
        await Blog.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Noticia eliminado"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        }) 
    }
})



module.exports = BlogRouter