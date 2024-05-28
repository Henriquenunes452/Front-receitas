import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate=useNavigate()

    return (
        <>
        <div className="login-container bg">
            <h2>login</h2>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" required/>
                <label for="cpf">cpf:</label>
                <input type="cpf" id="cpf" required/>
                <button onClick="checklogin()">Login</button>
                <button onClick={()=>{navigate("/cadastro")}}>Cadastro</button>
            </form>
        </div>
        </>
    )
}