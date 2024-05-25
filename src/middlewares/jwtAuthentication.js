import jwt from 'jsonwebtoken'
export const jwtAuth = (req, res, next) => {
    const token = req.cookies.jwtToken;
    if (!token) {
        res.render('auth.views/login', { err: "Please login" })
    }
    else {
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
            // console.log(payload);
            res.locals.userEmail = payload.userEmail;
            res.locals.userRole = payload.userRole;
            res.locals.userName = payload.userName;
            
            req.userID = payload.id;
            req.userEmail = payload.userEmail;
            req.userRole = payload.userRole;
            req.userName = payload.userName;
            // console.log('printing locals'+ res.locals.userEmail)
            let data={
                id:payload.id,
                userName:payload.userName,
                userEmail:payload.userEmail,
                userRole:payload.userRole
            }
            const cookieOptions = {
                maxAge: Number(process.env.COOKIE_MAX_AGE),
                httpOnly:true,
                secure:true
            }
            const newToken = jwt.sign(data, process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE_TIME});
            res.cookie('jwtToken', newToken,cookieOptions)


            next();
        } catch (error) {
            res.render('auth.views/login', { err: "Please login" });
        }
    }
}