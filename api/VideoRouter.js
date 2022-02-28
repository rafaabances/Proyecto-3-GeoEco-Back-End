const express = require("express")
const Video = require("../models/Video")
const VideoRouter = express.Router();


VideoRouter.get("/videos", async (req, res) => {
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

VideoRouter.get("/findvideo/:id", async (req, res) => {
    const {
        id
    } = req.params
    try {
        let video = await Video.findById(id).populate("category").populate("user").populate("commentVideo")

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


VideoRouter.post("/newvideo", async (req, res) => {
    const {
        titleVideo,
        videov,
        category,
        user,
        commentVideo

    } = req.body
    let video = new Video({ // viene del modelo user
        titleVideo,
        videov,
        category: category,
        user: user,
        commentVideo: commentVideo
    })

    if (titleVideo.length < 10) {
        return res.status(400).send({
            success: false,
            message: "Título del vídeo demasiado corto"
        })
    }



    if (!titleVideo || !videov ) {
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

VideoRouter.put("/updatevideo/:id", async (req, res) => {
    const {
        id
    } = req.params
    const {
        titlevideo,
        videov,
        category,
        user,
        commentvideo
    } = req.body
    try {

        if (titlevideo.length < 10) {
            return res.status(400).send({
                success: false,
                message: "Título del vídeo demasiado corto"
            })
        }



        if (!titlevideo || !videov || !DNI) {
            return res.status(400).send({
                success: false,
                message: "No has completado todos los campos"
            })
        }



        await Video.findOneAndUpdate(id, {
            titlevideo,
            videov,
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


VideoRouter.delete("/deletevideo/:id", async (req, res)=>{
    const{id} = req.params
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