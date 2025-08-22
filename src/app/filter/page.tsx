import { LikeButton } from "@/components/LikeButton"


export default function Filter(){
    const frutas = ['uva', 'maçã', 'melancia', 'carambola']


    const resultado = frutas.filter((fruta)=>{
        const primeiraletra = fruta[0]
        const ultimaletra = fruta[fruta.length -1]
        if (ultimaletra == 'a' && primeiraletra== 'm') {
            return true
        }
        else{
            return false
        }
    })

    console.log(resultado)

    return(
        <div className="flex justify-center ">
            <LikeButton/>


        </div>
    )
}