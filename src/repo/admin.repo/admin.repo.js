import mongoose from "mongoose";
import { userModel } from "../auth.repo/auth.repo.js";

export const changeToAdmin = async(id)=>
    {
        let user = await userModel.findById(id);
        let updateUser = await user.updateOne({userRole:'admin'});
        return updateUser;
    }

export const deleteUser = async(id)=>{
    let user = await userModel.findByIdAndDelete(id);
    return user;
}