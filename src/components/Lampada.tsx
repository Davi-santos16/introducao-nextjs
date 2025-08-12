"use client"

import { useState } from "react"


export default function Lampada(){
  
    const [Lampada, setLampada] = useState(false)

    const Lapadas = {
        ligada:"https://static.vecteezy.com/ti/vetor-gratis/p1/5032239-lampada-acesa-gratis-vetor.jpg",
        desligada:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDeL9UsENPmrtuHxoOb9BAw3i8nyW4705Ag&s"

    }

    function alterar(){

        setLampada((prev)=> !prev)

    }

    return(
        <div className="flex justify-center  flex-col gap-4 ">

            <div className="mt-3  ">
                <img src={Lampada ? Lapadas.ligada: Lapadas.desligada}
                 alt=""
                 className="w-40 h-40"
                 
                  />
            </div>

            <div className="mt-3 flex justify-center">
                <button onClick={alterar} className="px-8 py-3 rounded bg-blue-700 hover:bg-blue-600 ">
                    {Lampada ? "desligar" : "ligar"}
                    
                    </button>
            </div>
        </div>
    )
}