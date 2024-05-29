import axios from 'axios'

const baseAPI = axios.create({
    baseURL: 'http://localhost:3001/api' // https://sitereceitas.onrender.com/ 
})

function requestConfig(nome, cpf) {
    return {
      headers: {
        nome: nome,
        cpf: cpf
      },
    };
}

async function cadastrarReceitas({nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo},{nome,cpf}) {
    const config = requestConfig(nome,cpf)
    const usuario = await login({nome, cpf});
    const id_usuario = usuario.data.result.id;

    return baseAPI.post("/receita",{nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario},config);
}
  
async function cadastrar({nome, cpf, sexo, endereco, telefone, data_nascimento}) {
    return baseAPI.post("/usuario",{nome, cpf, sexo, endereco, telefone, data_nascimento});
}
  
async function login({nome, cpf}) {
    return baseAPI.post("/login", {nome, cpf});
}

const api = {
    cadastrarReceitas,
    cadastrar,
    login,
};

export default api;