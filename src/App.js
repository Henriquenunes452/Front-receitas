import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Receitas from "./components/Receitas";
import ReceitasUsuario from "./components/ReceitasUsuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/receitas/usuario" element={<ReceitasUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
