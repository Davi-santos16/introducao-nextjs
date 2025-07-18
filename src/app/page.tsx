import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import PlaceForm from "@/components/PlaceForm";


export default function Home() {
  return (
    <div className="">
      <NavBar links={
        [
          { label: "Inicio", href: "/" },
          { label: "Sobre", href: "/about" },
          { label: "Produtos", href: "/products" }
        ]} />
        <div className="flex justify-center m-10 font-bold">
          <h1 className="text-3xl  ">Recurso principais</h1>
        </div>
        <div className="flex justify-center ">
          <Card
            img="🚀"
            Titulo="Emoji de Foguete"
            SubTitulo="Elon Musk"
          />
          <Card
            img="🔥"
            Titulo="Emoji de Fogo"
            SubTitulo="salr"
          />
          <Card
            img="😂"
            Titulo="Emoji rindo"
            SubTitulo="slar"
          />
        </div>
        <div className="flex justify-center ">
        <PlaceForm lat={22} lng={-23}/>

        </div>
        
       
    </div >
  );
}