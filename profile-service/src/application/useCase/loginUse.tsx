import { UserInt } from "../repository/userInt";


export const loginUse =async (phone:string,repository:ReturnType <UserInt>) => {
    return repository.login(phone).then((user)=>{
        return user
    })
    .catch((err)=>{
        return err
    })
}