import { findOneNewsType } from "@/services/newstype.service";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest,params:{params:{id:string}}){
    const data = await findOneNewsType(Number(params.params.id));

if (!data){
    return NextResponse.json({message:"ไม่พบข้อมูล"},{status:404})
}
    return NextResponse.json({data});

}