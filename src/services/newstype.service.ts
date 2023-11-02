import prisma from "@/lib/prisma";
import { NewsType } from "@prisma/client";

export async function findAllNewsType(): Promise<NewsType[]> {
    return await prisma.newsType.findMany({
        orderBy:{id:'desc'}
    } );//select * from newsType
}

export async function findOneNewsType(id:number): Promise<NewsType| null> {
    return await prisma.newsType.findUnique({
        where :{id:id}
    })
}

export async function createNewsType(data:Promise<NewsType[]>){}

export async function updateNewsType(data:any,id:number){}

export async function removeNewsType(id:number){}