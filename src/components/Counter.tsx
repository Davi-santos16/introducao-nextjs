"use client"
import { useState } from "react"

interface countProps {
    initial: number
}

export function Counter (props: countProps){
    const [Count, SetCount] = useState(props.initial)


    return(
        <div className="flex justify-center flex-col">
            <h1 className="bg-blue-500 text-2xl text-center py-2">Contagem:{Count}</h1>
            <div className="flex justify-center gap-1.5 mt-3">

            <button onClick={()=>{SetCount(Count + 1)}} className="bg-green-700 hover:bg-green-800 py-2 px-5 rounded text-white">Incrementar</button>

             <button onClick={()=>{SetCount(Count - 1)}} className="bg-red-700 hover:bg-red-800 py-2 px-5 rounded text-white
             ">Decrementar</button>
            </div>
        </div>
    )
}