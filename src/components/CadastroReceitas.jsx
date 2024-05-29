import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../Api";


export default function CadastroReceitas(){
    const {nome, cpf} = useAuth();
    const navigate=useNavigate()

    const [receita, setReceita] = useState({
        nome_receita: "",
        imagem: "",
        ingredientes:"",
        modo_preparo:"",
        tempo_preparo: 0,
        categoria: "salgadas",
        id_usuario: 0,
    });

    function handleReceita(e) {
        setReceita({ ...receita, [e.target.name]: e.target.value });
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const verificar = await api.cadastrarReceitas(receita,{nome,cpf});
            console.log(receita)
            if (Object.keys(verificar.data.result).length !== 0){
                navigate("/receitas");
            }
        } catch (error) {
            console.log(error)
            return
        }    
    }

    useEffect(()=>{
        if (!nome || !cpf ) navigate("/");
        window.scrollTo(0,0);
    },[nome,cpf,navigate])

    return (
        <div className="cadastro bg">
            <form className="cadastrouser" action="">
                <h2>Cadastre aqui!</h2>   

                <div className="small">
                    <div >
                        <label className="test" htmlFor="nome_receita">Nome da receita:</label>
                        <input className="smallInput" type="text" name="nome_receita" onChange={handleReceita} required/>
                        
                    </div>

                    <div>
                        <label className="test" htmlFor="categoria">Categoria:</label>
                        <select className="test" name="categoria" onChange={handleReceita} required>
                            <option value ="salgadas">salgadas</option>
                            <option value ="doces">doces</option>
                        </select>
                    </div>
                </div>

                <label className="test" htmlFor="tempo_preparo">Tempo de preparo:</label>
                <input type="number" name="tempo_preparo" onChange={handleReceita} required/>

                <label className="test" htmlFor="ingredientes">Ingredientes:</label>
                <input type="text" name="ingredientes" onChange={handleReceita} required/>

                <label className="test" htmlFor="modo_preparo">Modo de preparo:</label>
                <textarea rows="4" name="modo_preparo" onChange={handleReceita} required/>


                <label className="test" htmlFor="imagem">Imagem da receita:</label>
                <input type="file" name="imagem" className="btn btn-success" accept="image/*"/>

                <div className="botaoreturn">
                    <button onClick={handleSubmit}>Cadastrar</button>
                    <button onClick={()=>{navigate("/receitas")}}>Voltar</button>
                </div>
            </form>
        </div>
    )
}