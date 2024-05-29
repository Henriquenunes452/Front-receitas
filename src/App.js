import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Receitas from "./components/Receitas";
import ReceitasUsuario from "./components/ReceitasUsuario";
import ReceitasDoces from "./components/ReceitasDoces";
import ReceitasSalgadas from "./components/ReceitasSalgadas";
import CadastroReceitas from "./components/CadastroReceitas";
import { AuthProvider } from "./contexts/AuthContext";
import './reset.css';
import './assets/style.css';

function App() {


  
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/receitas/usuario" element={<ReceitasUsuario />} />
        <Route path="/categoria/salgadas" element={<ReceitasSalgadas />} />
        <Route path="/categoria/doces" element={<ReceitasDoces />} />
        <Route path="/cadastro/receitas" element={<CadastroReceitas />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
