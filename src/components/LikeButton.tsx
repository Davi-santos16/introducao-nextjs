
'use client'
import { HeartIcon, HeartOff } from "lucide-react";
import { useState } from "react";




export function LikeButton(){

    const [curtir, setCurtir] = useState(false)

    return(
        <button className={`flex items-center justify-center ${curtir ? 'text-red-800 bg-red-100 hover:bg-red-200' : 'text-black'}  gap-1 py-3 px-3 rounded-full mt-2`}
        onClick={()=>{setCurtir(!curtir)}}
        
        >
            <span>{curtir ? <HeartOff/>: <HeartIcon/> }</span>
            <span>{curtir ? 'Curtido' : 'Curtir'}</span>
        </button>
    )
}