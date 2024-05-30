import axios from 'axios'

const baseAPI = axios.create({
    baseURL: 'https://sitereceitas-ce6j.onrender.com/api' //http://localhost:3001/api
})

function requestConfig(nome, cpf) {
    return {
      headers: {
        nome: nome,
        cpf: cpf
      },
    };
}

async function buscarUmaReceita(id){
    return await baseAPI.get(`/receita/${id}`)
}

async function buscarReceitas(){
    return await baseAPI.get("/receita");
}

async function cadastrarReceitas({nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, imagem},{nome,cpf}) {
    const config = requestConfig(nome,cpf)
    const usuario = await login({nome, cpf});
    const id_usuario = usuario.data.result.id;

    return baseAPI.post("/receita",{nome_receita, categoria, ingredientes, modo_preparo, tempo_preparo, id_usuario, imagem},config);
}
  
async function cadastrar({nome, cpf, sexo, endereco, telefone, data_nascimento}) {
    return baseAPI.post("/usuario",{nome, cpf, sexo, endereco, telefone, data_nascimento});
}
  
async function login({nome, cpf}) {
    return baseAPI.post("/login", {nome, cpf});
}

const api = {
    buscarUmaReceita,
    buscarReceitas,
    cadastrarReceitas,
    cadastrar,
    login,
};

export default api;