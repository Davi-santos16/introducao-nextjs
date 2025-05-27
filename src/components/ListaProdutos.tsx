'use client';

export default function ListaProdutos() {
  const products = [
    { id: 1, nome: 'Maçã', preco: 10 },
    { id: 2, nome: 'Banana', preco: 5 },
    { id: 3, nome: 'Goiaba', preco: 7 }
  ];

  return (
    <div>
      
      <ul>
        {products.map((produto) => (<li key={produto.id}>{produto.nome}, R${produto.preco}</li>
        ))}
      </ul>
    </div>
  );
}