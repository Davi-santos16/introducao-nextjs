'use client'

import { useState } from "react"

const ListaCompras = [
  { id: 1, Produto: "Arroz", Valor: 12.99 },
]

export function ListaDeCompras() {
  const [comprado, setComprado] = useState(false)

  return (
    <div>
      {ListaCompras.map((produto) => (
        <ul className="flex gap-1" key={produto.id}>
          <input
            type="checkbox"
            onClick={() => { setComprado(!comprado) }}
          />
          <li
            className={`${
              comprado
                ? 'text-red-800 bg-red-100 hover:bg-red-200 line-through'
                : 'text-black'
            }`}
          >
            {produto.Produto} {produto.Valor}
          </li>
        </ul>
      ))}
    </div>
  )
}
