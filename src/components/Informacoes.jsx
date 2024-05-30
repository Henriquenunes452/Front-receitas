import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Api";
import Menu from "./compartilhado/Menu";

export default function Informacoes(){
    const { id } = useParams();
    const [receita, setReceita] = useState({});

    useEffect(()=>{
        async function getReceita(){
            const {data} = await api.buscarUmaReceita(+id);
            console.log(data.result)
            if (!!data.result) setReceita(data.result);
        }
        getReceita();
    },[])

    return(
    <div className="bg">
        <header  id="home">
            <div className="container">
                <Menu/>
                <div className="call">
                    <div className="left receitaImg">
                        <img src={receita.imagem} alt=""/>
                    </div>
                    <div className="rightInfo">
                        <h2 className="color-laranja text-gd">{receita.nome_receita}</h2>

                        <span className="text-title color-laranja">Categoria:</span>
                        <p className="text-pq">
                            {receita.categoria}
                        </p>

                        <span className="text-title color-laranja">Tempo de preparo:</span>
                        <p className="text-pq">
                           Tempo de preparo: {receita.tempo_preparo} minutos
                        </p>

                        <span className="text-title color-laranja">Ingredientes</span>
                        <p>
                            {receita.ingredientes}
                        </p>

                        <span className="text-title color-laranja">Modo de preparo</span>
                        <p>
                            {receita.modo_preparo}
                        </p>


                        
                    </div>
                    {/*<section >
                        <div className="container">
                            <div className="call">
                                <div className="left">
                                </div>
                                <div className="right">                                    </div>
                            </div>
                        </div>
                    </section>*/}

                </div>
            </div>
        </header>

    </div>)
};