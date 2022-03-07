const express = require("express")
const Video = require("../models/Video")
const VideoRouter = express.Router();
const auth = require("../middleware/auth") // esto para que el newvideo solo lo pueda hacer alguien que esté logueado
const authAdmin = require("../middleware/authAdmin") // esto para que solo lo pueda hacer el administrador



VideoRouter.get("/videos", auth, async (req, res) => {
    let videos = await Video.find({}) // Se hace con find ( find viene de mongoose) para buscar dentro de la colección, así devuelve todos los objetos que hay en Author
    try {

        return res.status(200).send({
            success: true,
            videos
        })

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
})

VideoRouter.get("/findvideo/:id", auth, async (req, res) => {
    const {
        id
    } = req.params
    try {
        // let video = await Video.findById(id, "titleVideo category user commentV")
        // .populate({ path: 'user', select: 'name' }).populate("category").populate("commentVideo")
        let video = await Video.findById(id, "user").populate({
            path: 'commentV',
            select: 'commentTextVideo'
        })


        //errores antes de la respuesta final

        if (!video) {
            res.status(400).send({
                success: false,
                message: error.message
            })
        }

        res.status(200).send({
            success: true,
            message: "Video encontrado",
            video
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


VideoRouter.post("/newvideo", auth, authAdmin, async (req, res) => {
    const {
        titleVideo,
        videoV,
        category,
        user,

    } = req.body
    let video = new Video({ // viene del modelo user
        titleVideo,
        videoV,
        category: category,
        user: user,
    })

    if (titleVideo.length < 10) {
        return res.status(400).send({
            success: false,
            message: "Título del vídeo demasiado corto"
        })
    }



    if (!titleVideo || !videoV) {
        return res.status(400).send({
            success: false,
            message: "No has completado todos los campos"
        })
    }


    await video.save()
    return res.status(200).send({
        success: true,
        message: "Vídeo creado",
        video
    })
})

VideoRouter.put("/updatevideo/:id", auth, authAdmin, async (req, res) => {
    const {
        id
    } = req.params
    const {
        titlevideo,
        videoV,
        category,
        user,
        commentvideo
    } = req.body
    try {

        // if (titlevideo.length < 10) {
        //     return res.status(400).send({
        //         success: false,
        //         message: "Título del vídeo demasiado corto"
        //     })
        // }



        // if (!titlevideo || !videoV || !DNI) {
        //     return res.status(400).send({
        //         success: false,
        //         message: "No has completado todos los campos"
        //     })
        // }



        await Video.findByIdAndUpdate(id, {
            titlevideo,
            videoV,
            category,
            user,
            commentvideo
        })




        return res.status(200).send({
            success: true,
            message: "Video Modificado"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})


VideoRouter.delete("/deletevideo/:id", auth, authAdmin, async (req, res) => {
    const {
        id
    } = req.params
    try {
        await Video.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Video eliminado"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
})



module.exports = VideoRouter