import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Receitas from "./components/Receitas";
import ReceitasUsuario from "./components/ReceitasUsuario";
import ReceitasDoces from "./components/ReceitasDoces";
import ReceitasSalgadas from "./components/ReceitasSalgadas";
import './reset.css';
import './assets/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/receitas/usuario" element={<ReceitasUsuario />} />
        <Route path="/receitas/salgadas" element={<ReceitasSalgadas />} />
        <Route path="/receitas/doces" element={<ReceitasDoces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
