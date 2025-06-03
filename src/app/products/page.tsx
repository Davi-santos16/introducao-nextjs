import ListaProdutos from "@/components/ListaProdutos";
import NavBar from "@/components/NavBar";



export default function Page() {
  return (
    <div>
      <NavBar links={
              [
                {label:"Inicio", href:"/"},
                {label:"Sobre", href:"/about"},
                {label:"Produtos", href:"/products"}
              ]}/>
      <h2>Rota de Produtos</h2>
      <ListaProdutos/>
      
    </div>
  );
}