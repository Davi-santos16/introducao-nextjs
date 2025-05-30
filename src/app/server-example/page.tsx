import ClientCounter from "@/components/ClientCounter"
import NavBar from "@/components/NavBar"

export default function ServerExample(){
    // const data = await fetchDataFromDbB()
    const data = 'dados do bd'
        return(
            <div>
                <NavBar/>
                <h1>dados do servidor</h1>
                <p>{data}</p>
                <ClientCounter/>
            </div>

    )
}