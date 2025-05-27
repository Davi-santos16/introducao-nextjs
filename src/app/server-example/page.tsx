import ClientCounter from "@/components/ClientCounter"

export default function ServerExample(){
    // const data = await fetchDataFromDbB()
    const data = 'dados do bd'
        return(
            <div>
                <h1>dados do servidor</h1>
                <p>{data}</p>
                <ClientCounter/>
            </div>

    )
}