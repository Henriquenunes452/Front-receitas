import empadinha from "../../assets/imgs/empadinha.png";
import coxinha from "../../assets/imgs/coxinhafrango.png";
import frango from "../../assets/imgs/frangofritoimg.png";
import torta from "../../assets/imgs/tortamorango.png";
import pudim from "../../assets/imgs/pudimft.png";
import bombom from "../../assets/imgs/trufamaracuja.png";
import { useNavigate } from "react-router-dom";

export default function CategoriasContainer({tipo}){
    const navigate = useNavigate();
    tipo==="salgadas"?tipo="salgadas":tipo="doces";

    const receitas = [
        // Receitas Salgadas
        {
          nome_receita: "Empadinha de camarão",
          imagem: empadinha,
          ingredientes:'',
          modo_preparo:'',
          tempo_preparo: 45,
          categoria: "salgadas",
          id_usuario: 1,
        },
        {
          nome_receita: "Coxinha de Frango",
          imagem: coxinha,
          ingredientes:'',
          modo_preparo:'',
          tempo_preparo: 60,
          categoria: "salgadas",
          id_usuario: 2,
        },
        {
          nome_receita: "Fragon frito",
          imagem:frango,
          ingredientes:'',
          modo_preparo:'',
          tempo_preparo: 30,
          categoria: "salgadas",
          id_usuario: 3,
        },
        // Receitas Doces
        {
          nome_receita: "Torta de Morango",
          imagem:torta,
          ingredientes:'',
          modo_preparo:'',
          tempo_preparo: 50,
          categoria: "doces",
          id_usuario: 4,
        },
        {
          nome_receita: "Pudim",
          imagem:pudim,
          ingredientes:'',
          modo_preparo:'',
          tempo_preparo: 20,
          categoria: "doces",
          id_usuario: 5,
        },
        {
          nome_receita: "Bombom de Maracujá",
          imagem:bombom,
          ingredientes:'',
          modo_preparo:'',
          tempo_preparo: 35,
          categoria: "doces",
          id_usuario: 6,
        },
    ];
    
    return (
        <section className="max-width" id="receitas">
            <div className="container">
                <div className="content">
                    <div className="titulo">

                        <h2 className="text-md color-cinza-1">Receitas {tipo}</h2>

                        <div className="receitassalgadas">
                            {receitas.filter(receita => receita.categoria === tipo).map(receita=>{ return (
                                <div key={receita} className="box">
                                    <button className="rctslg">
                                        <h2>{receita.nome_receita}</h2>
                                        <img className="fts" src={receita.imagem} alt=""/>
                                    </button>
                                </div>)
                            })}
                        </div>
                        
                        <button onClick={()=>{navigate(`/categoria/${tipo}`)}}>Ver Todas</button> 
                    </div>
                </div>
            </div>
        </section>
    );
}