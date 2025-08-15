
import Calculadora from "@/components/Calculadora"
import { CounterLike } from "@/components/CounterLike"
import Lampada from "@/components/Lampada"
import MiniDisplay from "@/components/MiniDisplay"

export default function About(){

    return(

        <div>
            {/* <NavBar links={
                    [
                      {label:"Inicio", href:"/"},
                      {label:"Sobre", href:"/about"},
                      {label:"Produtos", href:"/products"}
                    ]}/> */}
            {/* <h1>Sobre nos</h1>
            <p>Informaçoes sobre a empresa</p>
            <Button label='Click-me'/>
            <Button label='Aperte'/>
            <Button label='so olhe'/>
            <Button label='la ele'/> */}
            {/* <Counter initial={0}/> */}
            {/* <CounterLike initial={0}/> */}
            {/* <Lampada/> */}
            {/* <MiniDisplay/> */}
            <Calculadora/>
        </div>
    )
}