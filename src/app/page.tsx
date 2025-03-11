"use client"
import Organizar from "./components/organizar";
import { Cards } from "./components/Card";
import { CardNumbers } from "./components/CardNumber";
import { Produto } from "./components/Produto";
import { useState } from "react";
import Carrinho from "./Carrinho/page";
import { IconCompras } from "./components/iconCompras";
import foto1 from '../../public/-ZIalHBUCmc.png'
import foto0 from '../../public/1pv0_6QjvlI.png'


export default function Home() {
  const[isModal, setIsModal]=useState(false)
  
  function OpenModal(){
    setIsModal(true)
  }
  
  function CloseModal(){
    setIsModal(false)
  }
  const[isAdicionar, setAdicionar]= useState(0)
  
  function Adicionado(){
    setAdicionar(setAdicionar=> setAdicionar +1)
  }
  

  return (
    <main>
      <IconCompras vibe={isAdicionar}/>
      <Organizar />
      <CardNumbers />
      <Cards  abrirModal0={OpenModal} adicionando={Adicionado} />
      <CardNumbers />
      {isModal && (
        <Produto 
          Imagem={foto1} 
          subtitulo="Caneca" 
          titulo="Caneca" 
          paragrafo="Qualquer coisa"
          ParagrafoDaDescricao="resolve"
          preco={23}  
          FecharModal={CloseModal}
        />
          
      )}
      {/* {isModal &&  (
        <Produto Imagem={foto0} key={1}  FecharModal={CloseModal} />
      )} */}
      
      

    </main>
  );
}
