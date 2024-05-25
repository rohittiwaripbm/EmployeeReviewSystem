import { getAllUsersExceptHimself, getUserById } from "../../repo/auth.repo/auth.repo.js";
import { changeToAdmin,deleteUser } from "../../repo/admin.repo/admin.repo.js";



export const getUsers = async (req, res) => {
    let userID = req.userID;
    let users = await getAllUsersExceptHimself(userID);
    res.render('admin.views/changePost', { users: users });
}

export const makeEmployeeAdmin = async (req, res) => {
    let id = req.params.id;
    let updatedUser = await changeToAdmin(id);
    let userID = req.userID;
    let users = await getAllUsersExceptHimself(userID);
    res.render('admin.views/changePost', { users: users });
}

export const deletePage = async(req, res)=>
    {
        let id = req.userID;
        let users = await getAllUsersExceptHimself(id);
        res.render('admin.views/deleteUser', { users: users });
    }

export const deleteuser = async(req, res)=>
    {
        let id = req.userID;
        let userID = req.params.id;
        let deletedUser = await deleteUser(userID);
        let users = await getAllUsersExceptHimself(id);
        res.render('admin.views/deleteUser', { users: users });


    }