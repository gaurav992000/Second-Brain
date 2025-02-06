import mongoose, { model,Schema } from "mongoose";


const ContentSchema=new Schema({
    type:String,
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'  }],
    userId:{type:mongoose.Types.ObjectId,ref:'user',required:true},

})
export const contentModel=model("Content",ContentSchema)

