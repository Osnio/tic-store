"use client"
import Image from "next/image"
import foto from '../../../public/Frame 37@2x.png'
import { Backpack } from "lucide-react"
import { ShoppingBagIcon } from "lucide-react";


interface  ProdutoType{
    Imagem: any
    titulo: string
    subtitulo: string
    paragrafo: string
    preco: number
    ParagrafoDaDescricao:string
    FecharModal: ()=>void
}


export function Produto({Imagem, titulo,subtitulo, paragrafo, preco, ParagrafoDaDescricao, FecharModal}:ProdutoType){
  

    return(
        <div>
            <div className=" p-[40] absolute bottom-[40%] top-[70%] left-[18%] right-[50%] h-[500] rounded-lg w-[900] m-auto bg-[#5D5D6D] py-16">
                <div onClick={FecharModal}  className=" flex items-center gap-1 w-20 cursor-pointer relative top-[-24] text-[#fff] ">
                    <Backpack />
                    <p>Voltar</p>
                </div>

                    
                <div className=" flex gap-8 justify-center">

                    <div className=" w-[640]">
                            <Image src={Imagem}  className="m-auto" alt=""/>
                    </div>

                    <div className="grid gap-[188]">
                        <div >
                            <h4 className="font-normal text-xl text-[#fff] ">{subtitulo}</h4>
                            <h1 className="font-light text-4xl text-[#fff] py-2 " >{titulo} </h1>
                            <h2 className="font-semibold text-2xl text-[#fff] py-4"  >R$ {preco},00</h2> 
                            <p className="font-normal text-xs text-[#fff]">{paragrafo}</p>
                            <div className=" my-10">
                                <h1 className="font-medium text-2xl py-3  text-[#fff]">Descrição</h1>
                                <p className=" w-[448] font-normal text-xs text-justify  text-[#fff]">{ParagrafoDaDescricao}</p>
                            </div>
                        </div>

                       
                    </div>

                </div>
            </div>            
        </div>
    )
}