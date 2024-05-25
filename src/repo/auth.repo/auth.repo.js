import mongoose from "mongoose";
import userSchema from '../../model/auth.model/user.model.js'
// export const userModel = mongoose.model("User", userSchema);

export const userModel = mongoose.model("User", userSchema);

export const signupRepo = async (userDetails) => {
    
    let findUser = await userModel.findOne({
        $or: [{ userEmail: userDetails.userEmail },
        { userMobile: userDetails.userMobile }
        ]
    });

    if (!findUser) {
        let newUser = new userModel(userDetails);
        await newUser.save();
        return {
            status: true,
            data: newUser
        }
    }
    else {
        return {
            status: false,
            data: "user already exists with same email and mobile"
        }
    }

}

export const loginRepo = async(userDetails)=>{
    let user = await userModel.findOne({userEmail:userDetails.userEmail, userPassword:userDetails.userPassword});
    if(user)
        {
            return {
                status:true,
                data: user
            }
        }
    else{
        return {
            status:false,
            data:'Invalid Email or Password'
        }
    }
}


//get all Users except himself

export const getAllUsersExceptHimself = async(id) =>
    {
        const users = await userModel.find({ _id: { $ne: id } });
        return users
    }

    let page = 12;

    //have to implement it
export const getUserById= async(id)=>
    {
        let user = userModel.findById(id);
        return user;
    }