import { connectDB } from "@/db/dbConfig";
import User from "@/models/User-model"
import { NextRequest ,NextResponse } from "next/server";
import { SendEmail } from "@/Helpers/mailer";
import bcryptjs from 'bcryptjs'
import { getDataFromToken } from "@/Helpers/getDataFromToken";
connectDB()

export async function POST(request:NextRequest){
    const userId =   await getDataFromToken(request)
    console.log(userId);
    const user = await User.findOne({_id: userId}).select("-password")
    console.log(user);
    
    if(!user){
        return NextResponse.json({error: "invalid token"},{status:500})
    }

    return NextResponse.json({
        message:"user found",
        data:user
    })
}