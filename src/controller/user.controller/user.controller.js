
import { getAllUsersExceptHimself, getUserById } from "../../repo/auth.repo/auth.repo.js";

import { saveReviews,getMyratings } from "../../repo/user/user.repo.js";
import { getAverage } from "../../businessLogics/getAverage.js";

export const dashboard = async (req, res) => {
    let users = await getAllUsersExceptHimself(req.userID);

    if (req.userRole == 'employee') {
        res.render('user.views/empDashboard');
    }
    else {
        res.render('user.views/adminDashboard');
    }
}


export const getAllEmployees = async (req, res) => {
    let users = await getAllUsersExceptHimself(req.userID);
    if (users) {
        res.render('user.views/reviews', { users: users })
    }
    else {
        res.send('something went wrong')
    }


}

//Getting all the employees except himself
//if employee display total users on dashboard else display admin Functions on Dashboard

export const getEmployeeReview = async(req, res) => {
    let userID = req.params.id;
    let user = await getUserById(userID);
    
    res.render('user.views/userReview',{user:user})
}

export const postEmployeeReview = async (req, res) => {
    let data = {
        review: req.body.review,
        rating: req.body.rating,
        ratingGivenTo:req.body.uID,
        ratingGivenBy :req.userID 
    }
    let storeData = await saveReviews(data);
    let users = await getAllUsersExceptHimself(req.userID);
    if (users) {
        res.render('user.views/reviews', { users: users })
    }
    else {
        res.send('something went wrong')
    }
}


//Have to implement get my reviews and ratings
export const getMyRatings = async(req,res)=>
    {
        let userID = req.userID;
        let ratings = await getMyratings(userID);
        // console.log(ratings)
        let userRating = getAverage(ratings);
        // Have to calculate average rating and have to send it initially sending hard coded value
        res.render('user.views/rating',{rating:userRating, reviews: ratings});
    }
