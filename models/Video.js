const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
    titleVideo: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    videoV:{
        type: Object,
    },
    date:{
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    commentV: [{
        type: mongoose.Types.ObjectId,
        ref: "CommentVideo"
    }, ],
}, {
    timestamps: true
})





module.exports = mongoose.model("Video", VideoSchema)