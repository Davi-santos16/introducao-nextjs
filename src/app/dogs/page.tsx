'use client'
import { useState, useEffect } from "react"

export default function Dogs() {
    const [dogImage, setDogImage] = useState<string | null>(null)
    
    const fetchDog = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json()
        setDogImage(data.message)
    }

    useEffect(() => { fetchDog() }, [])

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-6">Random Dogs</h1>
            
            {/* Usando <img> tradicional */}
            <div className="mb-6 w-64 h-64 overflow-hidden rounded-lg">
                {dogImage && (
                    <img
                        src={dogImage}
                        alt="Random dog"
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            
            <button 
                onClick={fetchDog}
                className="bg-blue-600 px-6 py-2 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
                Buscar Outro Cachorro
            </button>
        </div>
    )
}