import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    userName:{type:String},
    userEmail:{type:String},
    userMobile:{type:String},
    userPassword:{type:String},
    userRole:{type:String,
         enum:['admin', 'employee'],
         default:'employee'
        }
})
export default userSchema;