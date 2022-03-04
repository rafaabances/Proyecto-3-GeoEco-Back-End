const express = require("express")
const CommentBlog = require("../models/CommentBlog");
const CommentBlogRouter = express.Router();
const Blog = require("../models/Blog");
const auth = require("../middleware/auth") // esto para que el newarticle solo lo pueda hacer alguien que esté logueado
const User = require("../models/User");

CommentBlogRouter.get("/commentsblog", auth, async (req, res)=>{
    let Comments = await CommentBlog.find({}) // Se hace con find ( find viene de mongoose) para buscar dentro de la colección, así devuelve todos los objetos que hay en Author
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

// CommentRouter.get("/findcomment/:id", async (req, res) => {
//     const {
//         id
//     } = req.params
//     try {
//         let comment = await Comment.findById(id).populate("user") // propiedad en comment,js, la de  user está en minúsculas

//         //errores antes de la respuesta final

//         if (!comment) {
//             res.status(400).send({
//                 success: false,
//                 message: error.message
//             })
//         }

//         res.status(200).send({
//             success: true,
//             message: "Comentario encontrado",
//             comment
//         })

//         // res.status(200).json({ // también se puede poner con json
//         //     success: true,
//         //     message: "Autor encontrado",
//         //     author
//         // })

//     } catch (error) {
//         res.status(500).send({
//             success: false,
//             message: error.message
//         })
//     }
// })

CommentBlogRouter.get("/commentblog/:id", auth, async (req, res) => { // auth?
    const {id } = req.params;
    // const id = req.body;
    let comments = await CommentBlog.findById(id);
  
    let userId = comments.userId;
    // console.log(comments.userId);
  
    const userInfo = await User.findById(userId, "name");
    return res.json({
      success: true,
      comments,
      userInfo,
    });
  });

CommentBlogRouter.post("/newcommentblog", auth, async (req, res) => {
    const userId = req.user.id;
    const {commentTextBlog, blogId } = req.body;
   
    let comentario = new CommentBlog({
      userId,
      commentTextBlog,
      blog: blogId,
    });
  
    let newcommentBlog = await comentario.save();
  
    let commentPostBlog = await Blog.findByIdAndUpdate(userId, {
      $push: {commentNew: newcommentBlog._id },
    });
  
    return res.status(200).send({
      success: true,
      commentTextBlog: newcommentBlog
    });
  });
  
  
  
 // ---- donde comments del push, viene de tu modelo blog --- 
   

// CommentRouter.post("/newcomment", async (req, res) => {
//     const {
//       user,
//       commentText,
//       BlogId // repetir con videoId

//     } = req.body

//     let comment = new Comment({ // viene del modelo user
//        user : user,
//        commentText,

//     })


//     if (commentText.length < 2 ) {
//         return res.status(400).send({
//             success: false,
//             message: "El comentario es demasiado corto"
//         })
//     }

//     if (!commentText) {
//         return res.status(400).send({
//             success: false,
//             message: "No has escrito ningún comentario"
//         })
//     }


//     await comment.save()
//     return res.status(200).send({
//         success: true,
//         message: "Comentario creado",
//         comment
//     })
// })

CommentBlogRouter.put("/updatecommentblog/:id", auth, async(req, res)=>{
    const {id} = req.params
    const {user, commentTextBlog} = req.body
    try {
        
    await CommentBlog.findByIdAndUpdate(id,{user,commentTextBlog}) 
    
    if (!commentTextBlog) {
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


CommentBlogRouter.delete("/deletecommentblog/:id", auth, async (req, res)=>{
    const{id} = req.params
    try {
        await CommentBlog.findByIdAndDelete(id)
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





module.exports = CommentBlogRouter