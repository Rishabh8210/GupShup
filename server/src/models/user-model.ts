import { Document, Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import { SALT } from "../configs/server-config";
import { UserAttributes } from "../types/user-types";

export interface UserDocument extends UserAttributes, Document {}

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required for storing user data'],
        unique: [true, 'Email should be unique across database'],
        trim: true,
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email_type: {
        type: String,
        required: true,
        trim: true
    },
    country_code: {
        type: Number,
        required: false,
    },
    phone_number: {
        type: String,
        sparse: true,
        trim: true,
        unique: true
    },
    bio: {
        type: String,
        required: [false, 'Bio is an optional field'],
        trim: true,
        default: "Hey! there i'm using GupShup"
    },
    profile_pic: {
        type: String,
        required: [false, 'User profile pic is an optional field'],
        trim: true,
        default: ''
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function (next) {
    const user = this

    if((user.isModified('password') || user.isNew) && SALT) {
        const saltRounds = parseInt(SALT);
        if(isNaN(saltRounds)){
            return next(new Error('Invalid SALT value'));
        }

        try {
            user.password = await bcrypt.hash(user.password, parseInt(SALT))
        } catch (error) {
            console.log("Error while hashing password: ", error);
            return next(new Error('Error while Hashing password'));
        }
    }

    next();
})

const User = model<UserDocument>('Users', userSchema);
export default User;