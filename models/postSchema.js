import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
 caption : {
        type : String,
        required : true
    },
    user: {
        // to store the object id
        type : mongoose.Schema.Types.ObjectId,
        // collection name
        ref:'User'
    },
    image : {
        type : String,
        required : true
    }
})
const post = mongoose.model("Post",postSchema)
export default post;