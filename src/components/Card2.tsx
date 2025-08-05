type CardProps = {
    Title: string
    Description: string;
    ImageUrl:string;
    category:string;
}

export default function Card ({Description, Title, ImageUrl, category}:CardProps){
    return(
        <div className="bg-green-700 w-90  rounded-2xl px-2 py-3 overflow-hidden">
                <h1 className="font-semibold text-3xl sm:text-2xl break-words text-white text-center mb-2">{Title}</h1>
                <div className="flex justify-center">
                <img className="w-50 h-40 transition-all duration-70 ease-in-out rounded-2xl hover:scale-110"  src={ImageUrl} alt="Imagem" />

                </div>
            <div className="py-3 rounded ">
                <p className="break-words text-black">{Description}</p>

                
                <p className="text-white">Categoria:</p>
                <p className="break-words text-black">{category}</p>

            </div>


        </div>
    )
}