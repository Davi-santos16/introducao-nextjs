

type postProps = {
    id: number;
    autor: string;
    conteudo: string;
    like:number

}

type postCardProps = {
    post:postProps
    onLike:(id:number) => void
}


export default function PostCard({post, onLike }: postCardProps){
    return(
        <div className="rounded py-4 px-2 bg-blue-100 mt-2">
            <h1 className="text-2xl font-bold text-center">{post.autor}</h1>
            <div className="bg-gray-200 w-96 h-50 rounded">
             <img className="w-full h-full" src={post.conteudo} alt="" />

            </div>
            <div className="flex mt-3 gap-2 items-center">
                <button className="bg-blue-500 px-3 py-1 rounded " onClick={()=>{onLike(post.id)}}>curtir</button>
                <p>{post.like} Curtidas</p>

            </div>
            
        </div>
    )
}