import prisma from "@/lib/prisma";
import { NewsType, Prisma } from "@prisma/client";

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

export async function createNewsType(data:Prisma.NewsTypeCreateInput):Promise<NewsType>{
    return await prisma.newsType.create({
        data:{title:data.title}
    })
}
export async function updateNewsType(id:number,data:Prisma.NewsTypeUpdateInput){
    return await prisma.newsType.update({
        where:{id:id},
        data:data
    })
}

export async function removeNewsType(id:number){
    return await prisma.newsType.delete({
        where : {id:id},
    })
}