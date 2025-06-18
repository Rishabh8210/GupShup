import { createTransport } from 'nodemailer'
import { MAIL, PASS } from '../configs/server-config';

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: MAIL,
        pass: PASS
    }
})

export async function sendMail(mailAddress: string, otp: string){
    try {
        const status = await transporter.sendMail({
            from: MAIL,
            to: mailAddress,
            subject: '',
            text: `This is your otp - ${otp} please use to verify`
        })
        
        console.log("Message sent: ", status.messageId);
        return status;
    } catch (error) {
        console.log("Error(Mail-Service): Failed to send otp verification mail");
        throw error;
    }
}