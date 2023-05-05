import mongoose from "mongoose";
import { User, userType } from "../../model/mode";

export const userImplements = () => {
  const doSignup =async (name:string,phone:string) => {
    return User.create({name,phone})
      .then((res) => {
        console.log(res);
        
        return res._id;
      })
      .catch((err) => {
        return err;
      });
  };
   const doLogin =async (phone:string) => {
    return User.findOne({phone:phone}).then((user)=>{
        return user?._id
    })
    .catch((err:Error)=>{
        return err
    })
   };
  const getUser =async (userId:string) => {
   return User.findOne({_id: new mongoose.Types.ObjectId(userId)})
   .then((user)=>{
    return user
   })
   .catch((Err:Error)=>{
    return Err
   })

  }
  const getUserByPhone = async (phone:string) => {
    return User.findOne({phone:phone})
    .then((user)=>{
        return user
    })
    .catch((err:Error)=>{
        return err
    })
  }
  const getAllUsers = async (userId:string) => {
    return User.find({_id:{$ne: new mongoose.Types.ObjectId(userId)}})
    .then((users)=>{
        console.log(users);
        
        return users
    })
  }
  return { 
    doSignup,
    doLogin,
    getUser,
    getUserByPhone,
    getAllUsers
 };
};

export type UserImplements = typeof userImplements;
