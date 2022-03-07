const express = require("express")
const Blog = require("../models/Blog")
const BlogRouter = express.Router();
const auth = require("../middleware/auth") // esto para que el newarticle solo lo pueda hacer alguien que esté logueado
const authAdmin = require("../middleware/authAdmin") // esto para que solo lo pueda hacer el administrador


BlogRouter.get("/news", auth, async (req, res) => {
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

BlogRouter.get("/findnew/:id", auth, async (req, res) => {
    const {
        id
    } = req.params
    try {
        // let blog = await Blog.findById(id).populate({ path: 'user', select: 'name' }).populate("category").populate('commentNew')
        let blog = await Blog.findById(id, "user").populate({
            path: 'commentNew',
            select: 'commentTextBlog'
        })

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


BlogRouter.post("/newarticle", auth, authAdmin, async (req, res) => { // pasamos el auth para que necesites estar logueado
    const {
        titleNew,
        noticia,
        category
    } = req.body
    // const user = User.findById(req.user.id).select("name")
    // const name = user

    const user = req.user.id

    // condición de que no hay usuario

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

    let blog = new Blog({ // viene del modelo user
        titleNew,
        user,
        noticia,
        category: category
    })
    await blog.save()
    return res.status(200).send({
        success: true,
        blog
    })
})

BlogRouter.put("/updatenew/:id", auth, authAdmin, async (req, res) => {
    const {
        id
    } = req.params
    const {
        titleNew,
        user, // eliminar
        noticia,
        commentNew, // eliminar
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


        await Blog.findByIdAndUpdate(id, {
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


BlogRouter.delete("/deletenew/:id", auth, authAdmin, async (req, res) => { // falta borrado en cascada de comentario post de usuario ....
    const {
        id
    } = req.params
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