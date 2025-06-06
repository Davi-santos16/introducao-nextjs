'use client'

import { useState, useEffect } from "react"

type Post =  {
    id: number;
    title: string;
    body: string;
}


export default function PostsPage(){
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(()=>{
        const fetchPost = async ()=>{
           const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
           const data = await res.json()
           setPosts(data)
        }
        fetchPost()

    },[])


    return(

        

        <div className="bg-gray-200 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Ultimos posts</h1>
             {posts.map((post)=>(
                <div key={post.id} className="bg-violet-400 p-4 m-4 rounded-3xl shadow-2xl">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-700">{post.body}</p>
                </div>
             ))
             }
            

        </div>
    )
}