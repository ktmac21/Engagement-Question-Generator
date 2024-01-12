import mongoose from "mongoose";

const questionSchema = mongoose.Schema ({
    question: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }, 

});


export const Questions = mongoose.model("Questions", questionSchema);