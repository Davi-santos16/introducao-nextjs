type CardProps = {
  Title: string;
  Description: string;
  ImageUrl: string;
  category: string;
};

export default function Card({
  Description,
  Title,
  ImageUrl,
  category,
}: CardProps) {
    
  return (
    <div className="bg-green-700 m-2 mt-2 rounded-2xl px-2 py-3 overflow-hidden">
      <h1 className="font-semibold text-3xl sm:text-2xl break-words text-white text-center mb-2">
        {Title}
      </h1>

      <img
        className="w-full h-52 object-cover transition-transform duration-200 ease-in-out rounded-2xl hover:scale-110"
        src={ImageUrl}
        alt="Imagem"
      />

      <div className="flex gap-1 mt-2">
        <p className="text-white">Categoria:</p>
        <p className="text-black bg-amber-200 w-20 text-center rounded-2xl">
          {category}
        </p>
      </div>
      <div className="flex gap-1 ">
        <p className="text-white">Descriçao:</p>
        <p className="break-words text-black">{Description}</p>
      </div>
    </div>
  );
}
