"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";


function page() {
    const router = useRouter();

    const ClicktoLogOut = async ()=>{
       try {
         const responce = await axios.get("/api/users/logout")
         console.log("log-out successful: ");
         toast.success("log-out successful!");
         router.push("/");
       } catch (error: any) {
        console.log("log-out failed", error);
        toast.error(error.response?.data?.message || error.message);
      } 
    }
  return (
    <>
     <div>
        <button onClick={ClicktoLogOut}>log-out</button>
     </div>
    </>
  )
}

export default page