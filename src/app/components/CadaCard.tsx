"use client"
import Image from "next/image"
import { ShoppingBagIcon } from "lucide-react"
import { useState } from "react"


//Tipagem das propriedades que o componente recebe
interface Cardprops{
    ImagemUrl: any
    titulo: string
    preco: number
    abrirModal: ()=>void
    adicionarAoCarrinho: ()=> void
}



export function CadaCard({ImagemUrl, titulo, preco,abrirModal, adicionarAoCarrinho}:Cardprops){
    
   
    return(
        <div  className=" w-[270] cursor-pointer " >
            <Image onClick={abrirModal}   src={ImagemUrl} alt="" className="rounded-t-lg w-[270]" />
            <div className=" w-[270] px-3 items-center grid bg-[#fff] h-[120]">
                <h2 className="my-1.5 text-[#41414D]"  >{titulo}</h2>
                <hr className=" bg-[#DCE2E5] h-[1]" />
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[14] py-3  text-[#09090A]" > R$ {preco},00</h3>
                    <div onClick={adicionarAoCarrinho} className=" w-[150] h-11 p-2 flex gap-1 rounded items-center justify-center cursor-pointer  bg-[#115D8C] text-[#F5F5FA]">
                        <ShoppingBagIcon width={15} />
                        <p className="font-medium text-xs">Adicionar ao carrinho</p>
                    </div>

                </div>
            </div>
        </div>
    )
}