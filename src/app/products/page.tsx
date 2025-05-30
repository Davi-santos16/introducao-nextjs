import ListaProdutos from "@/components/ListaProdutos";
import NavBar from "@/components/NavBar";



export default function Page() {
  return (
    <div>
      <NavBar/>
      <h2>Rota de Produtos</h2>
      <ListaProdutos/>
      
    </div>
  );
}