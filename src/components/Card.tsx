interface CardProps {
  img: string;
  Titulo: string;
  SubTitulo: string;
}

export default function Card({ img, Titulo, SubTitulo }: CardProps) {
  return (
    <div className="bg-purple-500 w-90 h-40 rounded-2xl p-5 m-3 shadow-xl/30 ">
      <div>
        <div className="text-4xl mb-4">{img}</div>
        <h3 className="mb-1">{Titulo}</h3>
        <p>{SubTitulo}</p>
      </div>
    </div>
  );
}
