import { connectDB } from "@/db/dbConfig";
import User from "@/models/User-model"
import { NextRequest ,NextResponse } from "next/server";

connectDB()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);
        const user = await User.findOne({verifyToken:token , verifyTokenExpiry:{$gt:Date.now()}})

        if(!user){
            return NextResponse.json({error:"User Not Found"},{status:400})
        }
        

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        console.log(user);
        
        await user.save()

        return NextResponse.json({message:"email verified successfully"},{status:400})


    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}