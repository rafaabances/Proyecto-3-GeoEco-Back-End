const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
    titleVideo: {
        type: String,
        required: true
    },
    videov: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    commentVideo:{
        type: mongoose.Types.ObjectId,
        ref: "Comment"
    },
}, {
    timestamps: true
})





module.exports = mongoose.model("Video", VideoSchema)