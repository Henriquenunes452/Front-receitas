import { useNavigate } from "react-router-dom"



export default function Cadastro(){

    const navigate=useNavigate()

    return (

        
            <div className ="cadastro bg">


                <div className="cadastrouser">


                  <h2>Cadastro de Usuário</h2>
                    
                    <form className="formcadastro" onsubmit="return validateForm()"/>
                        <label className="test" for="username">Nome de usuário:</label>
                        <input type="text" id="username" name="username" required/>

                        <label className="test" for="data de nascimento">Data de Nascimento:</label>
                        <input type="date" id="date" name="data de nascimento" required/>

                        <label className="test" for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" maxlength="11" required/>

                        <label className="test" for="endereço">Endereço:</label>
                        <input type="location" id="endereço" name="endereço" required/>

                        <label className="test" for="telefone">Telefone</label>
                        <input type="text" id=" telefone" name="telefone" required/>

                        <label className="test" for="sexo"> Escolha o Sexo: </label>
                        <select className="test" id="sexo" name="sexo">
                            <option
                            value ="M">Masculino</option>
                            <option
                            value ="F">Feminino</option>
                        </select>

                        <div className="botaoreturn">

                            <button type="submit">Cadastrar</button>

                            <button onClick={()=>{navigate("/")}}> Voltar </button>

                        </div>


                    <form/>
                    
                </div>


                
               
                

            </div>
       
        
            
        
    )
}