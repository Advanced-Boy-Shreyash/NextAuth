import User from '@/models/userModel';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            const updatedUser = await User.findByIdAndUpdate(userId, { $set: { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 } })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                }
            })
        }

        var transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_USER, // not a good practice should be in .env file
                pass: process.env.EMAIL_PASSWORD // not a good practice should be in .env file
            }
        });
        const mailOptions = {
            from: 'ramsham3939@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your Email" : "Reset your Password",
            html: `<p> Click <a href="${process.env.DOMAIN}/
             verifyemail?token = ${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            <br/></p>`
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse
    } catch (error: any) {

    }
}