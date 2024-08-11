import { connectDB } from "@/db/dbConfig";
import User from "@/models/User-model"
import { NextRequest ,NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {email , password } = reqBody
        console.log(reqBody);

        const user =  await User.findOne({email:email})
        if(!user){
            return NextResponse.json({error: "User Not exist"},{status:400})
        }

      const validPassword =  await bcryptjs.compare(password,user.password)

      if(!validPassword){
          return NextResponse.json({error: "Invalid Password"},{status:401})
      }
       



      const tokenData = {
        id:user._id,
        username:user.username,
        email:user.email,
      }
      
      const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})

      const responce = NextResponse.json({message:"log-in successful",
        success:true
      })


      responce.cookies.set("token",token , {
        httpOnly:true
      })

      return responce

        
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}