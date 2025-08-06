type CommentProps = {
    nome:string
    mensagem:string
    data:Date

}

export default function comment({nome, mensagem, data}:CommentProps){
    return(
        <div className=" bg-gray-700 mt-1 py-5 px-4 rounded  ">
             <p className="text-white">Seu Nome: {nome}</p>
             <p className="text-white">Sua Mensagem: {mensagem}</p>
           
             
             <small className="text-red-400" >{data.toLocaleString()}</small>
        </div>
    )
}