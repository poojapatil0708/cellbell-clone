import UserModel, { UserType } from "../models/user-model"

export const createUserService = (data: UserType) => {
    return UserModel.create(data)
        .then((user: UserType) => {
            if (!user) throw ({ message: 'Error creating user!' });
            else {
                return user
            }
        })
        .catch((err: any) => { throw err })
}      