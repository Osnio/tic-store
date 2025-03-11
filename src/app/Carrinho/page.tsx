"use client"
import { Backpack } from "lucide-react"

import foto from '../../../public/n42ogaQn32o.png'
import foto1 from '../../../public/JyDmUaXMib4.png'
import foto2 from '../../../public/dG4Eb_oC5iM.png'

import { ItensDoCarrinho } from "../components/ItemCarrinho"

export default function Carrinho(){
    return(
        <div className="py-5 grid bg-[#F0F0F5] ">

            <div className=" flex font-medium text-sm text-[#617480] items-center gap-1 w-20 cursor-pointer relative top-[40] left-[164] ">
                <Backpack />
                <p>Voltar</p>
            </div>

            <div className="flex gap-9 justify-center items-center py-16 h-max">
                <div className="grid gap-5">

                    <h1 className="font-medium text-4xl text-[#41414D]" ><strong>Seu Carrinho</strong></h1>
                    <p className="font-medium text-base py-4 text-[#41414D]">Total (3 produtos) <strong>R$161,00</strong></p>
                    
                    <ItensDoCarrinho 
                        Imagem={foto}
                        titulo="Caneca de cerâmica rústica"
                        paragrafo="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto"
                        preco="R$ 40,00"
                    />

                    <ItensDoCarrinho 
                        Imagem={foto1}
                        titulo="Caneca de cerâmica rústica"
                        paragrafo="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto"
                        preco="R$ 40,00"
                    />

                    <ItensDoCarrinho 
                        Imagem={foto2}
                        titulo="Caneca de cerâmica rústica"
                        paragrafo="Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto"
                        preco="R$ 40,00"
                    />   
                </div>

                <div className="w-352 h-[840]  bg-[#fff] px-4">
                    <h1 className="font-semibold text-2xl text-[#41414D] py-2"><strong>RESUMO DO PEDIDO</strong></h1>
                    <div className="flex justify-between text-base text-[#41414D py-4">
                        <h2>Subtotal de produtos</h2>
                        <p>R$ 161, 00</p>
                    </div>
                    <div className="flex justify-between text-base text-[#41414D py-4">
                        <h2>Entrega</h2>
                        <p>R$ 40,00</p>
                    </div>
                    <hr className="text-[#DCE2E5]" />
                    <div className="flex font-semibold justify-between text-base text-[#41414D py-4">
                        <h2>Total</h2>
                        <p> R$ 201,00</p>
                    </div>

                    <div className="grid gap-[300]">
                        <div className="w-[303] cursor-pointer h-11 my-11 rounded bg-[#51B853] justify-center flex items-center text-[#f5f5fa]">
                            <p>FINALIZAR A COMPRA</p>
                        </div>
                        <div className="font-medium text-sm underline text-[#737380] ">
                            <p className="py-2 cursor-pointer duration-300 hover: text-[#41414D] hover:font-semibold">AJUDA</p>
                            <p className="py-2 cursor-pointer duration-300 hover: text-[#41414D] hover:font-semibold">REEMBOLSOS</p>
                            <p className="py-2 cursor-pointer duration-300 hover: text-[#41414D] hover:font-semibold">ENTREGAS E FRETE</p>
                            <p className="py-2 cursor-pointer duration-300 hover: text-[#41414D] hover:font-semibold">TROCAS E DEVOLUÇÕES</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}