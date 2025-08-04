import NavBar from "@/components/NavBar"
import  Button  from "@/components/Button"

export default function About(){
    return(

        <div>
            <NavBar links={
                    [
                      {label:"Inicio", href:"/"},
                      {label:"Sobre", href:"/about"},
                      {label:"Produtos", href:"/products"}
                    ]}/>
            <h1>Sobre nos</h1>
            <p>Informaçoes sobre a empresa</p>
            <Button label='Click-me'/>
            <Button label='Aperte'/>
            <Button label='so olhe'/>
            <Button label='la ele'/>
        </div>
    )
}