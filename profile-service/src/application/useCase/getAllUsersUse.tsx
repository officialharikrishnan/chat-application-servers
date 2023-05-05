import { UserInt } from "../repository/userInt";

export const allUsersUse =async (userId:string,repository:ReturnType <UserInt>) => {
    return repository.getAllUsers(userId).then((users)=>{
        return users
    })
}