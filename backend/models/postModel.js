const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        desc:{
            type:String
        },
        img:{
            type:String
        },
        likes:{
            type:Array,
            default:[]
        }
    },
    {timestamps:true}
)

const Post = mongoose.model("Post",PostSchema)
module.exports = Post