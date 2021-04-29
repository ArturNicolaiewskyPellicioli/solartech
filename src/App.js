import Home from "./pages/Home";
import DadosPessoais from "./pages/AdicionarCliente/DadosPessoais";
import EnderecoPrincipal from "./pages/AdicionarCliente/EnderecoPrincipal";
import EnderecoSecundario from "./pages/AdicionarCliente/EnderecoSecundario";
import Cliente from "./pages/Cliente";
import DataContext from "./context/Datacontext";
import { useContext } from "react";



function App() {
  const { states} = useContext(DataContext);

  switch (states.page) {
    case 0:
      return (
        <Home />
      );
    
    case 1:
      return (
        <DadosPessoais />
      );
    
    case 2:
      return (
        <EnderecoPrincipal />
      );
    
    case 3:
      return (
        <EnderecoSecundario />
      );
    
    case 4:
      return (
        <Cliente />
      );
    
    default:
      return (
        <Home />
      );
  }
}

export default App;
