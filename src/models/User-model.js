import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  username: { type: String, required: true ,unique: true},
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: 
  { type: String, 
    required: true
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
  forgotPasswordToken:{
    type:String,
  },
  forgotPasswordTokenExpiry:{
    type:Date,
  },
  verifyToken:{
    type:String,
  },
  verifyTokenExpiry:{
    type:Date
  }
});


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User