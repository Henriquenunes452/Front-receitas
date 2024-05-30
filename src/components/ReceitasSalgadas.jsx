import { useEffect, useState } from "react";
import Menu from "./compartilhado/Menu";
import api from "../Api";
import { useNavigate } from "react-router-dom";


export default function ReceitasSalgadas(){
    const [receitas, setReceitas] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo(0,0);
        async function getReceitas(){
            const {data} = await api.buscarReceitas();
            if (data.result.length>0) setReceitas(data.result);
        }
        getReceitas();
    },[])

    return (
        <div className="bg">
            <header  id="home">
                <div className="containersec">
                   <Menu/>
                </div>
                <button id="back-to-top">^</button>
            </header>

            <div className="titulo">
                <span className="text-title color-laranja">Receitas</span>
                <h2 className="text-md color-cinza-1">Receitas Salgadas</h2>

                <div className="receitaContainer">
                    {receitas.filter(receita => receita.categoria === 'salgadas').map(receita=>{ return (
                        <div key={receita.id} className="receitasOrdem">
                                <button className="rctslg" onClick={()=>{navigate(`/receitas/${receita.id}`)}}>
                                    <h2>{receita.nome_receita}</h2>
                                    <img className="fts" src={receita.imagem} alt=""/>
                                </button>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )      
}