import ClientCounter from "@/components/ClientCounter"
import NavBar from "@/components/NavBar"
import Card from "@/components/Card2"

export default function ServerExample(){

     const DadosCard = [
        {id:1, 
        Title:"Superman",
        Description: "Um herói movido pela crença e pela esperança na bondade da humanidade",
        category: "Filme", 
        ImageUrl:"https://i.redd.it/o-superman-do-cavill-era-visualmente-muito-melhor-que-o-do-v0-a5nmbn83iagf1.jpg?width=640&format=pjpg&auto=webp&s=1aee4d24c71a362b723c320a8f96e57a07894293"
        },

        {id:2,
        Title: "Batman",
        Description: "Morcego" ,
        category: "Filme" , 
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCS69TX3psqxQNrCKHSQC-TVsQKVf8sG5jA&s"
        },

        {id:3,
        Title: "spiderman",
        Description: "Homem-Aranha",
        category: "Filme" ,
        ImageUrl:"https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABdVcHcZydCwoxFN3zeAasxt_fGl0f40voZnolOpSh2WnH__sOhBM3tNbOaDLCoeoLBTH2OKC214Nt3cfEuKtHmZa_XZFVOXjvZYm.jpg?r=a05" 
        },

        {id:4,
        Title: "Boneco Assassino",
        Description: "Boneco assassino",
        category: "Filme" , 
        ImageUrl:"https://s2-globo-play.glbimg.com/GapyfMoek17y0lsTi_r-qhZ_A-Q=/362x536/https://s2-globo-play.glbimg.com/4BWui0ffch2D-uOmEbkGaktCdYo=/https://s2.glbimg.com/hWBki7p1bRk8MoautgaOVjzze4k=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2023/U/d/qDmjBARo6AcdEUyBloRA/2023-3689-o-culto-de-chucky-poster.jpg" 
        },

        {id:5,
        Title: "Pega a visão",
        Description: "Livro por Rick Chesther" , 
        category: "Livro" , 
        ImageUrl:"https://a-static.mlcdn.com.br/800x600/livro-pega-a-visao/magazineluiza/223795200/80e0bd2e5cfb61e1e04d6c8a871055ec.jpg"
       },


        {id:6,
        Title: "O Homem Mais Rico Da Babilonia", 
        Description: "O Homem Mais Rico da Babilônia (em inglês: The Richest Man in Babylon) " , 
        category: "Livro" , 
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqxEURbwCf9Zka3-y_At541897SpZPme46A&s"
       },
       
    ]
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

                <div className=" mt-2 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
                    {DadosCard.map((produto) =>(<Card key={produto.id} Description={produto.Description} Title={produto.Title} category={produto.category} ImageUrl={produto.ImageUrl} />))}
                </div> 
            </div>

    )
}