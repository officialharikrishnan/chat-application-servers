import { UserInt } from "../repository/userInt";

export const userByPhoneUse =async (phone:string,repository:ReturnType <UserInt>) => {
    return repository.getUserByPhone(phone).then((user)=>{
        return user
    })
    .catch((err:Error)=>{
        return err
    })
}