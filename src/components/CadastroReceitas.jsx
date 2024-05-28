import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function CadastroReceitas(){

    

    const navigate=useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className="cadastro bg">

            <div className="cadastrouser">

            <h2>Cadastre aqui!</h2>    

            <form action="">

                <label className="test" for="nome">Nome da receita:</label>
                <input type="text" id="nome" riquired/>

                <label className="test" for="descricao">Descrição da receita:</label>
                <input type="text" id="descricao" riquired/>

                <label className="test" for="ingredientes">Ingredientes:</label>
                <input type="text" id="ingredientes" riquired/>

                <label className="test" for="preparo">Modo de preparo:</label>
                <input type="text" id="preparo" riquired/>

                <label className="test" for="img">Imagem da receita:</label>
                <input type="file" name="arquivos" class="btn btn-success" multiple/>

                <label className="test" for="nome">Nome da receita:</label>
                <input type="text" id="nome" riquired/>

                <div className="botaoreturn">


                    <button onClick="checklogin()">Cadastrar</button>
                    <button onClick={()=>{navigate("/receitas")}}>Voltar</button>


                </div>


            </form>

            </div>

        </div>
    )
}