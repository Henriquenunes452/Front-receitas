import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function CadastroReceitas(){

    

    const navigate=useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return (
        <div className="bg">

            <form action=""></form>

        </div>
    )
}