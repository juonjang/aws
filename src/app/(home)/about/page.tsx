import React from 'react'
import AboutContent from '../ui/AboutContent'
import { Metadata } from 'next';
import { notFound } from 'next/navigation';



export const metadata : Metadata = {
    title: " about USE",
    description : "ระบบรายงานข้อมูลโรงพยบาล"
};

async function getData () {
    // const res = await  fetch('https://api.codingthailand.com/api/version')
    // const res = await  fetch('https://api.codingthailand.com/api/version',{
    //   next:{ revalidate: 10}//ดึงข้อมูลทุกๆ 10 วิ
    const res = await  fetch('https://api.codingthailand.com/api/version',{
      cache:"no-cache", // ไม่ cache ข้อมูลจะอัพเดทเลยทันที แต่จะช้า
    })
        // if(res.status==404){
        //   notFound();
        // }
    if (!res.ok){
        throw new Error("ไม่สามารถเชื่อมต่อฐานข้อมูลได้")
    }
    return res.json() ; 
}



export default async function AboutPage() {
  const data = await getData();
  return (
    <div>
        <AboutContent data={data}/>
    </div>
  )
}
