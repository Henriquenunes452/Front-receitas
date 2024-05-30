import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

export default function Menu() {
    const navigate = useNavigate();
    const { deslogar } = useAuth();

    function handleDeslogar() {
        deslogar();
        navigate("/");
    }

    return (
        <div className="menu">
            <div className="logo" onClick={()=>{navigate("/receitas")}}></div>
            <div className="desktop-menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#receitas">Receitas</a></li>
                    <li><a href="#">Dicas</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a onClick={handleDeslogar} href="#">Sair</a></li>
                </ul>
            </div>
        </div>
    )
}