"use client"
import { useState } from "react"

type CommentFormProps = {
  onAddComment: (nome: string, mensagem: string) => void;
};

export default function CommentForm ({ onAddComment }: CommentFormProps) {
    const [nome, setNome] = useState("")
    const [mensagem, setmensagem] = useState("")

    const handleSubmit = (e:React.FormEvent)=>{
          e.preventDefault();
          onAddComment(nome, mensagem);
          setmensagem("");
          setNome("")
          
    }


    return (
        <form onSubmit={handleSubmit}  className="flex justify-center" >
            <div className="flex flex-col bg-neutral-800 px-7 py-10 rounded-2xl ">
                <div>
                    <label className="text-white text-sm ">Nome:</label>
                    <input
                     placeholder="Digite Seu Nome:"
                     className="text-white w-full py-0.5 px-2 rounded bg-neutral-700"
                     type="text"
                     onChange={(e)=>setNome(e.target.value)}
                     value={nome}
                    
                    />
                </div>

            
                <div className="mt-5">
                    <label className="text-white text-sm" >Mensagem</label>
                    <input
                     placeholder="Digite uma Mensagem:"
                      type="text" 
                      className="text-white w-full py-0.5 px-2 rounded bg-neutral-700  "
                      onChange={(e)=>setmensagem(e.target.value)}
                      value={mensagem}
                      />
                      
                </div>


             <button type="submit" className="py-1 mt-5  rounded bg-white">Enviar</button>


            </div>
           
        </form>
    )
}