import NavBar from "@/components/NavBar"
import  Button  from "@/components/Button"
import { Counter } from "@/components/Counter"
import { CounterLike } from "@/components/CounterLike"

export default function About(){

    return(

        <div className="flex justify-center">
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
            <CounterLike initial={0}/>
        </div>
    )
}