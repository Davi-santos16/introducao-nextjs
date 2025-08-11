import { useEffect, useState } from "react"


export default function EffectCounter(){

    const [count, SetCount] = useState(0)

    useEffect(()=>{
        alert("useEffect Executou")
        document.title = `Quantas vezes Dandan deu o Toba ${count}`

    },[count])

    return(
        <div className="text-center p-10 ">
            <h1>Contagem: {count}</h1>
            <button onClick={()=>{SetCount(count+1)}}>incrementar</button>
        </div>
    )
}