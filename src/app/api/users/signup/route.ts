import { connectDB } from "@/db/dbConfig";
import User from "@/models/User-model"
import { NextRequest ,NextResponse } from "next/server";
import { SendEmail } from "@/Helpers/mailer";
import bcryptjs from 'bcryptjs'
connectDB()

export async function POST(request:NextRequest){
    try {   
        const reqBody = await request.json()
        let {username , email , password } = reqBody
        console.log(reqBody);
        
        const user = await User.findOne({email:email})

        if(user){
           return  NextResponse.json({erro:"User is already exist"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassowrd = await bcryptjs.hash(password,salt) 

        const NewUser = new User({
            username,
            email,
            password:hashPassowrd
        })

        const SavedUser = await NewUser.save()
        console.log(SavedUser);



        await SendEmail({email,emailType:"VERIFIED",userId:SavedUser._id})

        return NextResponse.json({message:"user registerd successfully",
            success:true,
            SavedUser
        })
        

    } catch (error:any) {
        return NextResponse.json({ error : error.message},{status:500});
    }
}