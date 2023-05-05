import { userType } from "../../framework/database/model/mode";
import { UserImplements } from "../../framework/database/repository/userImplement/userImplement";

export const userInterface = (repository:ReturnType <UserImplements>) => {
     const  doSignup =async (name:string,phone:string) =>{
        return repository.doSignup(name,phone).then((res)=>{
            console.log("interf",res);
            
            return res
        })
        .catch((Err)=>{
            return Err
        })
    }
    const getUser =async (userId:string) => {
        return repository.getUser(userId).then((user)=>{
            return user
        })
        .catch((err:Error)=>{
            return err
        })
    }
    const login = async (phone:string) => {
        return repository.doLogin(phone).then((user)=>{
            return user
        })
        .catch((err)=>{
            return err
        })
    }
    const getUserByPhone = async (phone:string) => {
        return repository.getUserByPhone(phone).then((user)=>{
            return user
        })
        .catch((err)=>{
            return err
        })
    }
    const getAllUsers = async (userId:string) => {
        return repository.getAllUsers(userId).then((users)=>{
            return users
        })
    }
    return {
        doSignup,
        getUser,
        login,
        getUserByPhone,
        getAllUsers
    }
}

export type UserInt = typeof userInterface