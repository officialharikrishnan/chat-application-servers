import { UserInt } from "../repository/userInt";

export const getUserUse =async (userId:string,repository: ReturnType <UserInt>)=>{
    return repository.getUser(userId).then((user)=>{
        return user
    })
    .catch((err:Error)=>{
        return err
    })
}