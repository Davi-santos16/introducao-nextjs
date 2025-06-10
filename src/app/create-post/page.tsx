'use client'

import { useState } from "react";
import axios from "axios";


type FormData = {
    title:string;
    body:string;
}

type RespondeData = {
    id:number
    title:string;
    body:string;
}
export default function CreatePost(){

    const [formData, setFormaData] = useState<FormData>(
        {title:"",body:""
    })

    const [respondeData, setRespondeData] = useState<RespondeData | null>(
        null
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormaData({
            ...formData,
            [event.target.name]:event.target.value

        })
    
    }

    const HandleSubmit = async (event: React.FormEvent)=>{
        event.preventDefault();

       const {data} = await axios.post("https://jsonplaceholder.typicode.com/posts", formData, {headers:{"Content-Type":"application/json"}})
       setRespondeData(data)
      
    }

    return(
        <div className="flex justify-center p-8">
            <div >
                <h1 className="text-2xl font-bold mb-4 ">Criar Novo Post</h1>
                <form onSubmit={HandleSubmit}>
                    <div>
                        <label className="block text-sm font-medium ">Titulo</label>
                        <input
                        className="mt-1 border rounded px-5 py-2 w-full"
                        type="text"
                        name="title"
                        placeholder="Seu Titulo"
                        value={formData.title}
                        required
                        onChange={handleChange}
                        
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Conteudo</label>
                        <textarea 
                        name="body"
                        className="mt-1 border rounded px-5 py-2 w-full"
                        rows={3}
                        onChange={handleChange}
                        value={formData.body}
                        />
                    </div>
                    <button className="bg-violet-500 hover:bg-violet-600 text-white px-3 py-2 rounded cursor-pointer  ">
                        publicar
                    </button>
                </form>
                {respondeData && (
                    <div className="mt-6 border border-green-500 bg-green-100">
                        <p>
                            post Criado com sucesso!
                        </p>
                        <p>{respondeData.id}</p>
                        <p>Titulo:{respondeData.title}</p>
                        <p>conteudo:{respondeData.body}</p>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

