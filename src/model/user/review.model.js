import mongoose from "mongoose";


let reviewSchema = new mongoose.Schema({
    review:{type:String},
    rating:{type:String},
    ratingGivenTo:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    ratingGivenBy:{type:mongoose.Schema.Types.ObjectId, ref:'User'}

});

export const reviewModel = mongoose.model('reviews', reviewSchema);