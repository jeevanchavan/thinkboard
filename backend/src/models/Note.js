import mongoose from "mongoose";

// 1: you need create the schema
// 2: you would create model based of that schema

const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        }
    },
    {timestamps:true}  // created at, update at
)

const Note = mongoose.model("Note",noteSchema);

export default Note;