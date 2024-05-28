import temperos from "../assets/imgs/temperos.png";
import comida1 from "../assets/imgs/imgcomida1.png";
import empadinha from "../assets/imgs/empadinha.png";
import coxinha from "../assets/imgs/coxinhafrango.png";
import frango from "../assets/imgs/frangofritoimg.png";
import torta from "../assets/imgs/tortamorango.png";
import pudim from "../assets/imgs/pudimft.png";
import bombom from "../assets/imgs/trufamaracuja.png";
import { useNavigate } from "react-router-dom";


export default function Receitas(){
    const navigate=useNavigate()
    return (
        <div className="bg">

            <header  id="home">
        <div className="container">
            <div className="menu">
                <div className="logo"></div>
                <div className="desktop-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#receitas">Receitas</a></li>
                        <li><a href="#">Dicas</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div className="call">
                <div className="left">
                    <img src={temperos} alt=""/>
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
                    <img src={comida1} alt=""/>
                </div>
            </div>
        </div>
    </section>


    <section className="max-width" id="receitas">
        <div className="container">
            <div className="content">
                <div className="titulo">

                    <span className="text-title color-laranja">Receitas</span>
                    <h2 className="text-md color-cinza-1">Receitas Salgadas</h2>

                    <div className="receitassalgadas">

                        <div className="box">
                            <button className="rctslg">
                                <h2>Empadinha de camarão</h2>
                                <img className="fts" src={empadinha} alt=""/>
                            </button>
                        </div>
                        <div className="box">
                            <button className="rctslg">
                                <h2>Coxinha de frango</h2>
                                <img className="fts" src={coxinha} alt=""/>
                            </button>
                        </div>
                        <div className="box">
                            <button className="rctslg">
                                <h2>Frango frito</h2>
                                <img className="fts" src={frango} alt=""/>
                            </button>
                        </div>

                    </div>
                    
                    <button onClick={()=>{navigate("/receitas/salgadas")}}>Ver Todas</button> 

                </div>
            </div>
        </div>
    </section>

    <section className="max-width" id="receitas">
        <div className="container">
            <div className="content">
                <div className="titulo">

                    
                    <h2 className="text-md color-cinza-1">Receitas Doces</h2>

                    <div className="receitassalgadas">

                        <div className="box">
                            <button className="rctslg">
                                <h2>Torta de Morango</h2>
                                <img className="fts" src={torta} alt=""/>
                            </button>
                        </div>
                        <div className="box">
                            <button className="rctslg">
                                <h2>Pudim</h2>
                                <img className="fts"src={pudim} alt=""/>
                            </button>
                        </div>
                        <div className="box">
                            <button className="rctslg">
                                <h2>Bombom de Maracujá</h2>
                                <img className="fts" src={bombom} alt=""/>
                            </button>
                        </div>

                    </div>
                    <button onClick={()=>{navigate("/receitas/doces")}}>Ver Todas</button> 
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}