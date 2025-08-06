"use client"
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import CommentForm from "@/components/CommentForm";
import  {CommentList}  from "@/components/CommentList";
import { useState } from "react"

type Comentario = {
  nome: string;
  mensagem: string;
  data: Date;
};


export default function Home() {
    const [comentarios, setComentarios] = useState<Comentario[]>([]);

    function handleAddComment(nome: string, mensagem: string) {
    const novoComentario = {
      nome,
      mensagem,
      data: new Date(),
    };
    setComentarios((prev) => [...prev, novoComentario]);
  }


  return (
    <div className="">
      <NavBar links={
        [
          { label: "Inicio", href: "/" },
          { label: "Sobre", href: "/about" },
          { label: "Produtos", href: "/products" }
        ]} />
        <div className="flex justify-center m-10 font-bold">
          <h1 className="text-3xl  ">Recurso principais</h1>
        </div>
        <div className="flex justify-center ">
          <Card
            img="🚀"
            Titulo="Emoji de Foguete"
            SubTitulo="Elon Musk"
          />
          <Card
            img="🔥"
            Titulo="Emoji de Fogo"
            SubTitulo="salr"
          />
          <Card
            img="😂"
            Titulo="Emoji rindo"
            SubTitulo="slar"
          />
        </div>
        <div >
          <h1 className="text-white mb-4">Deixe seu comentário</h1>
          <CommentForm onAddComment={handleAddComment} />
          <div className="mt-3 ">
            <h2 className="text-black mb-2 text-2xl text-center">Comentários:</h2>
            <div className="flex justify-center">
            <CommentList comentarios={comentarios} />

            </div>
        </div>
    </div>
        
        
       
    </div >
  );
}