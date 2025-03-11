"use client"
import Image from "next/image"
import Foto from '../../../public/Group.png'
import { useState } from "react"

export default function Organizar(){
    const [organizar, setOrganizar]= useState(false)
    return(
        <>
            <div className="flex justify-around bg-[#F0F0F5] py-7 items-center ">
                <div className="flex gap-8 items-center">
                    <p className="text-xl h-[25] cursor-pointer leading-6  text-[#41414D]  border-black" >TODOS OS PRODUTOS</p>
                    <p className="text-xl h-[25] cursor-pointer leading-6   text-[#737380] transition-all hover:text-[#41414D]">CAMISETAS</p>
                    <p className="text-xl h-[25] cursor-pointer leading-6  text-[#737380] transition-all hover:text-[#41414D]" >CANECAS</p>
                </div>
                <p className=" w-[220] h-[4] relative top-[20] right-[625] bg-[#FFA585] "></p>
             
                <div className="flex items-center transition-all hover:text-[#41414D]" >
                    <p onClick={()=> setOrganizar(!organizar)} className=" text-xl text-[#737380] cursor-pointer transition-all hover:text-[#41414D]">Organizar por</p>
                    <Image onClick={()=> setOrganizar(!organizar)} src={Foto} width={30} className="cursor-pointer " alt="" />
                </div>
            </div>
            {organizar &&(
                <div className="absolute w-0 bg-black text-[#737380]">
                    <div className="bg-[#fff] rounded-md w-48 p-3 px-3 relative top-[-22]  left-[1020]">
                        <p className="cursor-pointer transition-all hover:text-[#41414D] ">Novidades</p>
                        <p className="cursor-pointer transition-all hover:text-[#41414D]">Preço: Maior - menor</p>
                        <p className="cursor-pointer transition-all hover:text-[#41414D]">Preço: Menor - maior</p>
                        <p className="cursor-pointer transition-all hover:text-[#41414D]">Mais vendidos</p>
                    </div>
                </div> 
            )}
           
        </>
    )
}