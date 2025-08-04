import ClientCounter from "@/components/ClientCounter"
import NavBar from "@/components/NavBar"
import Card from "@/components/Card2"

export default function ServerExample(){
    // const data = await fetchDataFromDbB()
    const data = 'dados do bd'
        return(
            <div>
                <NavBar links={
                        [
                          {label:"Inicio", href:"/"},
                          {label:"Sobre", href:"/about"},
                          {label:"Produtos", href:"/products"}
                        ]}/>
                <h1>dados do servidor</h1>
                <p>{data}</p>
                <ClientCounter/>

                <Card ImageUrl="https://viagem.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/02/comemoracao-disney-e1614010798887.jpg?w=750" Description="Disney ne pai" Title="Na Disney"/> 
            </div>

    )
}