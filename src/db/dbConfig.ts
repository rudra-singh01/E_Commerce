import mongoose from "mongoose";

export async function connectDB(){
    try {
        mongoose.connect(process.env.MONGOBD_URL!)
        const connected = mongoose.connection

        connected.on('connected',()=>{
            console.log("we are connected to Database");
            
        })
        connected.on('error',(error)=>{
            console.log("Database Connection Error",error);
            process.exit();
            
        })
    } catch (error) {
        console.log("something Went Wrong in Connection TO DataBase",error);
        
    }
}