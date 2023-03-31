import { userModel } from "../models/User.js"

export const resolvers = {
    Query: {
        getUsers: async () => {
            const users = await userModel.find()
            return users
        },
        getUserByName: async (root, args) => {
            const user = await userModel.findOne({name: args.name})
            return user
        }
    },
    Mutation: {
        addUser: async (root, args) => {
            try {
                const newUser = new userModel({name: args.name, age: args.age, country: args.country, club: args.club})
                await newUser.save()
                return newUser
            } catch (error) {
                console.log(error)
            }
        },
        deleteUser: async (root, args) => {
            try {
                const userToDelete = await userModel.findOneAndDelete({name: args.name})
                if(!userToDelete) return null
                else return userToDelete
            } catch (error) {
                console.log(error)
            }
        },
        updateClub: async(root, args) => {
            try {
                let user = userModel.findOneAndUpdate({name: args.name}, {$set: {club: args.club}}, {returnDocument: "after"})
                return user
            } catch (error) {
                console.log(error)
            }
        }
    }
}