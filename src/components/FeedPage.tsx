'use client'

import { useState } from "react"
import PostCard from "./PostCard";


type Post = {
  id: number;
  autor: string;
  conteudo: string;
  like: number;
};


export default function FeedPage(){

    const [post, setPost] = useState<Post[]>([
        {id:1, autor:'Davi', conteudo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqdMPSUobqm-7KslN-d0gdmOgrXHThFUVsA&s',like:0},

        {id:2, autor:'tinho', conteudo:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d9/fa/1b/lost-valley.jpg?w=900&h=500&s=1',like:0},
        {id:3, autor:'Dandan', conteudo:'https://cdn-imgix.headout.com/tour/7064/TOUR-IMAGE/0b1e2944-7608-4712-aa1d-45b1052eefd4-4445-dubai-img-worlds-of-adventure-tickets-07.jpeg?auto=format&w=900&h=562.5&q=90&ar=16%3A10&fit=crop',like:0},
    ])
    
    const handleLike = (id: number) => {
    setPost((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, like: post.like + 1 } : post
      )
    );
  };

    return(
        <div className="bg-gray-400 px-2 py-3 rounded-2xl">
            <h1 className="text-center text-4xl">Feed</h1>
            {post.map((post)=>(
                <PostCard post={post} key={post.id} onLike={handleLike} />
            ))}

        </div>
    )
}