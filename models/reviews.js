import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        required: true
    },
    username: {
        type: String,
        

    },
    review: {
        type: String,
        
    }
}, {timestamps: true});

export default mongoose.model("Reviews", reviewsSchema)