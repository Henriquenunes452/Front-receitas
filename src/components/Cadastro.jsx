import { useState } from "react";
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import api from "../Api";



export default function Cadastro(){
    const { logar } = useAuth();

    const [cadastro, setCadastro] = useState({
        nome: "",
        cpf: "",
        sexo: "M",
        endereco: "",
        telefone: "",
        data_nascimento:""
    });

    function handleCadastro(e) {
        setCadastro({ ...cadastro, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const verificar = await api.cadastrar(cadastro);
            console.log(verificar)
            if (Object.keys(verificar.data.result).length !== 0){
                logar(verificar.data.result.nome,verificar.data.result.cpf);
                navigate("/receitas");
            }
        } catch (error) {
            console.log(error)
            return
        }
    }

    const navigate=useNavigate()

    return (

        
            <div className ="cadastro bg">


                <div className="cadastrouser">


                  <h2>Cadastro de Usuário</h2>
                    
                    <form className="formcadastro"/>
                        <label className="test" htmlFor="username">Nome de usuário:</label>
                        <input type="text" id="username" name="nome" onChange={handleCadastro} required/>

                        <label className="test" htmlFor="data de nascimento">Data de Nascimento:</label>
                        <input type="date" id="date" name="data_nascimento" onChange={handleCadastro} required/>

                        <label className="test" htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" maxLength="11" onChange={handleCadastro} required/>

                        <label className="test" htmlFor="endereço">Endereço:</label>
                        <input type="location" id="endereço" name="endereco" onChange={handleCadastro} required/>

                        <label className="test" htmlFor="telefone">Telefone</label>
                        <input type="text" id=" telefone" name="telefone" onChange={handleCadastro} required/>

                        <label className="test" htmlFor="sexo"> Escolha o Sexo: </label>
                        <select className="test" name="sexo" onChange={handleCadastro}>
                            <option value ="M">Masculino</option>
                            <option value ="F">Feminino</option>
                        </select>

                        <div className="botaoreturn">

                            <button onClick={handleSubmit}>Cadastrar</button>

                            <button onClick={()=>{navigate("/")}}> Voltar </button>

                        </div>


                    <form/>
                    
                </div>


                
               
                

            </div>
       
        
            
        
    )
}