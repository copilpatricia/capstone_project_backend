import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
    // user is is associated with a review - allows the user to create a review
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
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