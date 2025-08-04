type CardProps = {
    Title: string
    Description: string;
    ImageUrl:string
}

export default function Card ({Description, Title, ImageUrl}:CardProps){
    return(
        <div className="bg-green-700 card max-w-90 rounded-2xl px-2 py-3 overflow-hidden">
                <h1 className="font-semibold text-2xl break-words text-white text-center mb-2">{Title}</h1>
                <img className="transition-all duration-70 ease-in-out rounded-2xl hover:scale-110"  src={ImageUrl} alt="Imagem" />
            <div className="py-3 rounded ">
                <p className="break-words text-black">{Description}</p>

            </div>


        </div>
    )
}