"use client"
import { useState } from "react";
import { Heart, } from "lucide-react";


interface ConterLikeProps {
    initial: number;
}

export function CounterLike({initial}:ConterLikeProps){

    const [Counter, setCounter] = useState(initial)

    return(
        <div className="flex flex-col gap-4 rounded-full w-2xl mt-3 justify-center bg-blue-400  py-3">

            <h1 className="text-2xl font-extrabold text-center">Seu Like: {Counter}</h1>
            <div className="flex justify-center">
            <button className="px-3 py-2  bg-white rounded-full " onClick={()=>{setCounter(Counter+1)}}><Heart color="red" /></button>
            </div>
            

            
        </div>
    )
}