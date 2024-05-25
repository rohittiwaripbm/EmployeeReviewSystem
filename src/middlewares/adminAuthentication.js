export const adminAuth = (req, res, next)=>{
    if(req.userRole=='admin')
        {
            next();
        }
    else{
        res. clearCookie('jwtToken');
        res.render('auth.views/login', { err: "Unusual activity happend please login again !" });
    }
}