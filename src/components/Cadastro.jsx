export default function Cadastro(){
    return (
        <>
            <div class="container">
        <h2>Cadastro de Usuário</h2>
        <form id="registrationForm" onsubmit="return validateForm()">
            <label for="username">Nome de usuário:</label>
            <input type="text" id="username" name="username" required>

            <label for="data de nascimento">data de nascimento:</label>
            <input type="date" id="date name="data de nascimento" required>

            <label for="cpf">cpf</label>
            <input type="text" id="cpf" name="cpf" maxlength="11" required>

            <label for="endereço">endereço:</label>
            <input type="location" id="endereço" name="endereço" required>

            <laber for="telefone">telefone</laber>
            <input type="telefone" id=" telefone" name="telefone" required>

            <label for="sexo"> escolha o sexo: </label>
            <select id="sexo" name="sexo">
                <option
                value ="M">masculino</option>
                <option
                value ="F">feminino</option>
            </select>

            <input type="submit" value="Cadastrar">
        </form>
    </div>
        </>
    )
}