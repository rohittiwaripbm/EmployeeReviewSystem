import mongoose from "mongoose"
import { reviewModel } from "../../model/user/review.model.js"



export const saveReviews = async (data) => {
    let review = new reviewModel({ rating: data.rating, review: data.review, ratingGivenBy: data.ratingGivenBy, 
        ratingGivenTo: data.ratingGivenTo });

        await review.save();
    if (review) {
        return true;
    }
    else {
        return false;
    }
}


export const getMyratings = async(userID) => {
    let ratings =  await reviewModel.find({ratingGivenTo:userID});
    return ratings;
}