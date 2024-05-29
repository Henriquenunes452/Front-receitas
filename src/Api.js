import axios from 'axios'

const baseAPI = axios.create({
    baseURL: 'http://localhost:3001/api' // https://sitereceitas.onrender.com/ 
})

function requestConfig(nome,cpf) {
    return {
      headers: {
        nome: {nome},
        cpf:{cpf}
      },
    };
}

async function cadastrar({nome, cpf, sexo, endereco, telefone, data_nascimento}) {
    return baseAPI.post("/usuario",{nome, cpf, sexo, endereco, telefone, data_nascimento});
}
  
async function login({nome, cpf}) {
    return baseAPI.post("/login", {nome, cpf});
}

const api = {
    cadastrar,
    login,
};

export default api;