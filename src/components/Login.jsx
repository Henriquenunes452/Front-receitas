import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import api from "../Api";

export default function Login(){
    const { logar } = useAuth();
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        nome: "",
        cpf: "",
    });

    function handleLogin(e) {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const verificar = await api.login(login);
            if (Object.keys(verificar.data.result).length !== 0){
                logar(verificar.data.result.nome,verificar.data.result.cpf);
                navigate("/receitas");
            }
        } catch (error) {
            console.log(error)
            return
        }
    }

    return (

        <div className="cadastro bg">


            <div className="cadastrouser">




                <h2>Login</h2>


                <form className="formcadastro">


                    

                    <label className="test" for="nome">Nome de Usuário:</label>
                    <input type="text" id="username" name="nome" onChange={handleLogin} required/>

                    



                    


                    <label className="test" for="cpf">CPF:</label>                    
                    <input type="text" id="cpf" name="cpf" onChange={handleLogin} required/>

                    



                    <div className="botaoreturn">

                        <button onClick={handleSubmit}>Login</button>
                        <button onClick={()=>{navigate("/cadastro")}}>Cadastro</button>


                    </div>


                </form>


            </div>


        </div>

    )
}