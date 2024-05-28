import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate=useNavigate()

    return (

        <div className="cadastro bg">


            <div className="cadastrouser">




                <h2>login</h2>


                <form className="formcadastro">


                    <div>

                        <label className="test" for="username">Nome de Usuário:</label>
                        <input type="text" id="username" name="username"required/>


                    </div>



                    <div>


                        <label className="test" for="cpf">CPF:</label>                    
                        <input type="text" id="cpf" name="cpf"required/>

                    </div>



                    <div className="botaoreturn">

                        <button onClick="checklogin()">Login</button>
                        <button onClick={()=>{navigate("/cadastro")}}>Cadastro</button>


                    </div>


                </form>


            </div>


        </div>

    )
}