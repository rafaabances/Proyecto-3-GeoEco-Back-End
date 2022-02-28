const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    titleNew: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    noticia: {
        type: String,
        required: true
    },
    commentNew: {
        type: mongoose.Types.ObjectId,
        ref: "Comment"
    },
    category:{
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
}, {
    timestamps: true
})





module.exports = mongoose.model("Blog", BlogSchema)