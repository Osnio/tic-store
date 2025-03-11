import Image from "next/image";
import { MensagemIcon } from "./messagemIcon"
import { RecycleIcon } from "lucide-react";
import { useState } from "react";

interface componnentsPros{
    Imagem: any
    titulo: string
    paragrafo: string
    preco: string
}
export function ItensDoCarrinho({Imagem, titulo, paragrafo, preco}:componnentsPros){

    // Para elimiar os itens da lista
    const[close, setClose]=useState(true)
    //para dicionar a quantidade de itens da lista de compra
    const[AdicionarItem, setItem]=useState(1)
    return(
        <>
            
            {close ? (        
                <div className="flex items-center">
                    <Image src={Imagem} width={187.7} className="rounded-l-lg"   alt=""/>
                    <div className="w-[536] h-[220] rounded-r-lg flex gap-2 px-5    items-center bg-[#fff]" >
                        <div className="grid gap-7">
                            <div className="flex justify-between items-center" >
                                <h1 className="font-light text-xl text-[#41414D]" >{titulo}</h1>
                                <RecycleIcon onClick={()=>setClose(!close) } className="text-[#DE3838] cursor-pointer" />
                            </div>
                            <p className="font-normal text-xs text-justify  text-[#41414D]">{paragrafo}</p>
                            <div className="flex justify-between items-center">
                                <div className="grid gap-3 items-center justify-center">
                                    <p className="w-[60] items-center flex justify-center px-2 h-[40] text-[#737380] border border-[#A8A8B3]  cursor-pointer rounded-lg  ">{AdicionarItem}</p>
                                    <div className="flex gap-2 ">
                                        <button className="w-11 text-[#737380] items-center flex justify-center border boder-[#A8A8B3] rounded-lg duration-300 hover:text-[#fff] hover:bg-[#51B853]" onClick={()=> setItem(AdicionarItem => AdicionarItem + 1) }>+</button>
                                        <button className="w-10 text-[#737380] items-center flex justify-center border boder-[#A8A8B3] rounded-lg duration-300 hover:text-[#fff] hover:bg-[#51B853]" onClick={()=> setItem(AdicionarItem => AdicionarItem - 1) }>-</button>
                                    </div>
                                </div>
                                <p className="font-semibold text-lg text-[#09090A]"> {preco}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ): <MensagemIcon />}
            
        </>
    )
}