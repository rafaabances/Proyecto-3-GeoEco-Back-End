const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User" //viene del modelo User.js model (-- se pone este: User , UserSchema)
    },
    commentText: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})





module.exports = mongoose.model("Comment", CommentSchema)