import mongoose,{Schema} from "mongoose";

const PostSchema=new Schema({
    message:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true,
        default:"empty"
    },
    postBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

export const Post=mongoose.model("Post",PostSchema)
