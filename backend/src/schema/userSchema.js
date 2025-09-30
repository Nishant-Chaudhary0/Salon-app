import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxLength:10
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLenght:5,
        maxLength:10
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

export default mongoose.model("User", UserSchema);