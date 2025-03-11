import foto from '../../../public/n42ogaQn32o.png'
import foto1 from '../../../public/crsQ7CNIovw.png'
import foto2 from '../../../public/-ZIalHBUCmc.png'
import foto3 from '../../../public/eyUOuA6hIMA.png'
import foto4 from '../../../public/dG4Eb_oC5iM.png'
import foto5 from '../../../public/jX2cntCbrAo.png'
import foto6 from '../../../public/sMn0sxR8v2E.png'
import foto7 from '../../../public/cmQ13SkCZmc.png'
import foto8 from '../../../public/kBJEJqWNtNY.png'
import foto9 from '../../../public/Z3CHkelnvHA.png'
import foto10 from '../../../public/JyDmUaXMib4.png'
import foto11 from '../../../public/1pv0_6QjvlI.png'
import { CadaCard} from "./CadaCard"
import { useState } from 'react'
import { Produto } from './Produto'

interface  ProdutoType{
    abrirModal0: ()=>void
    adicionando :()=>void
   
}


// simplesmente desse jeito, chama-se desistruturacao
// export function Cards({titulo, preco}){
export function Cards({abrirModal0, adicionando}:ProdutoType){

    

    return(
        <>
            <div className="">

                <div className="py-8 flex justify-center bg-[#F0F0F5] gap-10">
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0}
                        ImagemUrl={foto}
                        titulo="Caneca de cerâmica rústica"
                        preco= {40.00} 
                        
                       
                        
                    />
                    {/* <Produto Imagem={foto1}/> */}

                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto1}
                        titulo="Camiseta not today"
                        preco= {78.00} 
                        
                    />
                    
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto2}
                        titulo="Caneca Black Ring"
                        preco= {32.00} 
                    />

                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto3}
                        titulo="Camiseta Broken Saints"
                        preco= {58.00} 
                    />
                </div>
                
                {/* Card1 */}
                <div className="py-8 flex justify-center bg-[#F0F0F5] gap-10">
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto4}
                        titulo="Camiseta OutCast "
                        preco= {89.00} 
                    />
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto5}
                        titulo="Caneca The Grounds"
                        preco= {85.00} 
                    />
                    
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto6}
                        titulo="Camiseta evening"
                        preco= {69.00} 
                    />

                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto7}
                        titulo="Caneca preta fosco"
                        preco= {28.00} 
                    />
                </div>
                {/* Card2 */}
                <div className="py-8 flex justify-center bg-[#F0F0F5] gap-10">
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto8}
                        titulo="Caneca Never settle"
                        preco= {43.00} 
                    />
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto9}
                        titulo="Camiseta DREAMER"
                        preco= {55.00} 
                    />
                    
                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto10}
                        titulo="Caneca Decaf"
                        preco= {32.00} 
                    />

                    <CadaCard
                        adicionarAoCarrinho={adicionando} 
                        abrirModal={abrirModal0} 
                        ImagemUrl={foto11}
                        titulo="Camiseta Ramones"
                        preco= {92.00} 
                    />
                </div>

            </div>
        </>
    )
}