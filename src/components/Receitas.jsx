import time from "../assets/imgs/time.png"
import time2 from "../assets/imgs/time2.png";
import comida1 from "../assets/imgs/imgcomida1.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Menu from "./compartilhado/Menu";
import CategoriasContainer from "./compartilhado/CategoriasContainer";

export default function Receitas(){
    const navigate=useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className="bg">
            <header  id="home">
                <div className="container">
                    <Menu/>
                    <div className="call">
                        <div className="left">
                            <img src={comida1} alt=""/>
                        </div>
                        <div className="right">
                            <h1 className="color-laranja text-gd">Receitas Deliciosas</h1>
                            <h2 className="color-cinza-1 text-md">Faça você mesmo comidas de restaurantes luxuosos</h2>
                            <p className="text-pq">
                                Neste site você encontrará receitas de dar água na boca, com instruções fáceis, didáticas 
                                e rápidas. Saboreie essas explosões de sabores!
                            </p>
                            <button>Ver receitas</button>
                        </div>
                    </div>
                </div>
                <button id="back-to-top" onClick={()=>{window.scrollTo(0,0)}}>^</button>
            </header>

            <section  id="about">
                <div className="container">
                    <div className="call">
                        <div className="left">
                            <span className="text-title color-laranja">Sobre nós</span>
                            <h2 className="text-md color-cinza-1">Através de muitas pesquisas, separamos as melhores receiras.</h2>
                            <p>
                                Somos um grupo de jovens programadores, Pedro Henrik, Danilo Sabino, Henrique Nunes, Nathan Seixas, Clarice e Henrique Gracelasso.
                                E estamos desenvolvendo este site com a finalidade de ajudar pessoas apaixonadas por culinária e também aquela pessoa que quer apenas
                                impressionar os amigos no final de semana. Para saber mais sobre cada um de nós, clique no botão abaixo e conheça-nos!
                            </p>
                            <button>Saiba Mais</button>
                        </div>
                        <div className="right">
                            <img className="fototime"src={time} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <CategoriasContainer tipo={'salgadas'}/>

            <CategoriasContainer tipo={'doces'}/>

            <div className="receitasuser ">

                <h2>Quer cadastrar sua receita? Clique no botão abaixo!</h2>

                <button onClick={()=>{navigate("/cadastro/receitas")}}>Cadastre sua receita!</button>
            </div>
            


        </div>
    )
}