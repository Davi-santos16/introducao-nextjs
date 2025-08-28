'use client'


import { ToggleDark } from "@/components/ToggleDark"
import { useState } from "react"


export default function DarkTheme(){

    const [isDark, setIsDark] = useState(false)

    const handleToggleTheme = () =>{
        setIsDark(isDark => !isDark)
    }


    return(
    <div className={`h-screen flex flex-col justify-center items-center transition-all duration-200 
       ${isDark ? 'bg-gray-900 text-white':'bg-amber-50 text-black' }`}>
            <p className="text-3xl">pagina {isDark? 'dark':'light'}</p>
            

            <ToggleDark isDark={isDark} onToggle={handleToggleTheme}/>
            
        </div>
    )
}