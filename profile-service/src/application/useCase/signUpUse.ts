import { userType } from "../../framework/database/model/mode";
import { UserInt } from "../repository/userInt";

export const signUpUse =async (name:string,phone:string,repository:ReturnType <UserInt>) => {
    return repository.doSignup(name,phone).then((res)=>{
        console.log("usecase",res);
        
        return res
    })
    .catch((Err)=>{
        return Err
    })
}