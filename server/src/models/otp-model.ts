import { Document, model, Schema } from "mongoose";
import { OtpAttributes } from "../types/otp-types";

export interface OtpDocument extends OtpAttributes, Document {}

const otpSchema = new Schema<OtpDocument>({
    otp: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    secret: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

const Otp = model<OtpDocument>('Otps', otpSchema);
export default Otp;