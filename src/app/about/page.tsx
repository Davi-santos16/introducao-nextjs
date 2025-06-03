import NavBar from "@/components/NavBar"

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
        </div>
    )
}