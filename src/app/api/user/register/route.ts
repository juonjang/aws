import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { hash,genSalt } from "bcrypt";


export async function POST(request:NextRequest){

    const body = await request.json() as Prisma.UserCreateInput;
    //1.เช็ก loginname ซ้ำ
   const userExist = await prisma.user.findUnique({where:{loginname : body.loginname}});
   if (userExist!==null){
    return NextResponse.json({message:"มีผู้ใช้ user นี้แล้วในระบบแล้ว"},{status:400});
   }

    //2.เข้ารหัส passwords
         const salt = await genSalt(10);
         const hashPassword = await hash(body.password, salt);
    



    //3.เพิ่มข้อมูลตาราง users

    await prisma.user.create({
        data:{
            fullname: body.fullname,
            loginname: body.loginname,
            password: hashPassword
        }
    })

    return NextResponse.json({message:"success"},{status:201})

}