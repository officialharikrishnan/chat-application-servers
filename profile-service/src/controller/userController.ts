import { UserImplements } from "../framework/database/repository/userImplement/userImplement";
import { UserInt } from "../application/repository/userInt";
import { signUpUse } from "../application/useCase/signUpUse";
import { Request,Response } from "express";
import { getUserUse } from "../application/useCase/getUserUse";
import { loginUse } from "../application/useCase/loginUse";
import { userByPhoneUse } from "../application/useCase/getUserByPhoneUse";
import { allUsersUse } from "../application/useCase/getAllUsersUse";
export const userController = (
    userInter:UserInt,
    userImpl:UserImplements
)=>{
    const repository = userInter(userImpl())

    const userSignup=(req:Request,res:Response)=>{
        const {name,phone}=req.body
        console.log(name,phone);
        
        signUpUse(name,phone,repository).then((response)=>{
            console.log("conrolller",response);
            
            res.send(response)
        })
        .catch((Err)=>{
            res.send(Err)
        })
    }
    const getUser = (req:Request,res:Response)=>{
        const userId=req.params.id
        console.log(userId);
        
        getUserUse(userId,repository).then((user)=>{
            res.send(user)
        })
        .catch((err:Error)=>{
            res.send(err)
        })
    }
    const getUserByPhone = (req:Request,res:Response)=>{
        const {phone}=req.body
        
        userByPhoneUse(phone,repository).then((user)=>{
            if(!user){
                res.status(204).send(res)
            }else{
                res.send(user)
            }
        })
        .catch((err)=>{
            console.log("err",err);
            
            res.send(err)
        })
    }
    const userLogin = (req:Request,res:Response)=>{
        const {phone}=req.body
        loginUse(phone,repository).then((user)=>{
            res.send(user)
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    const getAllUsers = (req:Request,res:Response)=>{
        const userId=req.params.id
        allUsersUse(userId,repository).then((users)=>{
            res.send(users)
        })
    }
    return {
        userSignup,
        getUser,
        userLogin,
        getUserByPhone,
        getAllUsers
    }
}
