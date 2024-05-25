import { signupRepo, loginRepo } from "../../repo/auth.repo/auth.repo.js";
import jwt from 'jsonwebtoken';


export const getSignup = (req, res) => {
    res.render('auth.views/signup');
}

export const postSignup = async (req, res) => {
    //after getSignin route will be here
    // console.log(req.body)
    let user = await signupRepo(req.body);
    // console.log('came in postSignup page');
    // console.log(user);
    if (user.status) {
        res.render('user.views/adminDashboard')
    }
    else {
        res.render('auth.views/signup', { err: user.data });
    }
}


export const getLogin = (req, res) => {
    res.render('auth.views/login',{err:null});
}


export const postLogin = async(req, res) => {
    // console.log(req.body);
    let user = await loginRepo(req.body);
    // console.log(user)
    if (user.status) {
        //Creating JWT Token
        const token = jwt.sign({id:user.data._id, userName:user.data.userName, userEmail:user.data.userEmail,userRole:user.data.userRole},process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE_TIME});
        //setting cookies
        const cookieOptions = {
            maxAge: Number(process.env.COOKIE_MAX_AGE),
            httpOnly:true,
            secure:true
        }
        res.cookie('jwtToken', token,cookieOptions);
        // res.cookie('userID', user.data._id,cookieOptions);
        // res.cookie('email', user.data.userEmail,cookieOptions);
        // res.cookie('userRole', user.data.userRole,cookieOptions);

        res.redirect("/user");
    }
    else{
        res.render('auth.views/login',{err:user.data})
    }
}

export const logout = (req,res)=>
    {
        res. clearCookie('jwtToken');
        res.render('auth.views/login',{err:null});
    }