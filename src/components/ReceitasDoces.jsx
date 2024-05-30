import { useEffect, useState } from "react";
import Menu from "./compartilhado/Menu";
import api from "../Api";


export default function ReceitasDoces(){
    const [receitas, setReceitas] = useState([]);

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
                <h2 className="text-md color-cinza-1">Receitas Doces</h2>

                <div className="receitaContainer">

                    {receitas.map(receita=>{ return (
                        <div key={receita.id} className="receitasOrdem">
                                <button className="rctslg">
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