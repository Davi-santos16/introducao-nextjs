'use client'
import { useState } from "react"

export default function ClientCounter() {
    const [count, setCount] = useState(0)

    function Clicar() {
        setCount(count+ 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Clicar}>Incrementar</button>
        </div>
    )
}
