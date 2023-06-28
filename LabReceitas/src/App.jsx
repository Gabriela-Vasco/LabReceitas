import "./App.css"
import Home from "./pages/Home/Home";

function App() {

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

//TODO:
//[] - Implementar React Router 
  //[] - Componente NavBar/Header
//[] - Página de Erro
//[] - Página de Receitas
//[] - Usar o JSONserver para armazenar as receitas ao invés do LocalStorage
//[] - Instalar e usar em alguma imagem na Home a biblioteca do Gabriel de imagens
//[] - Estilizar melhor o projeto
//[] - Trabalhar na responsividadde
//[] - Ver sobre indexação no Google(SEO) e aplicar no projeto, assim como fazer com que parte dele 
//seja servido por SSR(Server Side Rendering) e não apenas por CSR(Client Side Rendering)
//[] - Aplicar filtros para as receitas, ordenação por sorting (?)
//[] - Aplicar paginação ma página de receitas
//[] - Criar uma página de detalhe da receita
//[] - As receitas devem ter uma url única na página de detalhe da receita, os filtros e a 
//ordenação também devem ser acessados via parâmetros na url


