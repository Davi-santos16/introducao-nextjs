import ClientCounter from "@/components/ClientCounter"
import NavBar from "@/components/NavBar"

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
            </div>

    )
}