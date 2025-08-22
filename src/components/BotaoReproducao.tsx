'use client'
import { Pause, Play } from "lucide-react";
import { useState } from "react";


export default function BotaoReproducao (){

    const [click, setClick] = useState(false)

    return(
        <button
        onClick={()=>{setClick(!click)}}
         className={`flex justify-center items-center gap-1 mt-4 rounded-full ${click? 'bg-red-800': 'bg-green-700'} py-2 px-2 `}>
            {click ? <Pause/> : <Play/> }
        </button>
    )
}