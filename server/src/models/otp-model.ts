import { Document, model, Schema } from "mongoose";
import { OtpAttributes } from "../types/otp-types";

const otpSchema = new Schema<OtpAttributes>({
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

const Otp = model<OtpAttributes>('Otps', otpSchema);
export default Otp;