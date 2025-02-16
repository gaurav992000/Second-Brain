
import mongoose, { Schema ,model} from "mongoose";

const NotesSchema=new Schema({
    notes:String,
    userId:{type:mongoose.Types.ObjectId,ref:'user',require:true}
})

export const NotesModel=model("notes",NotesSchema)

