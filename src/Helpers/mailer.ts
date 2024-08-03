import User from "@/models/User-model";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

export const SendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFIED") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set:{
          forgotPasswordToken: hashToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        }
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORDS,
      },
    });

    const MailOPtion = {
      from: "E-commerce", // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY" ? "VERIFY YOUR EMAIL" : "Reset Your Password", // Subject line
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyemail?token=${hashToken}
            </p>`,
    };
    const mailResponce = await transport.sendMail(MailOPtion);
    return mailResponce;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
