import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const LOCAL_STORAGE_KEY = ["receitas-nome","receitas-cpf"];
const storageNome = localStorage.getItem(LOCAL_STORAGE_KEY[0]);
const storageCpf = localStorage.getItem(LOCAL_STORAGE_KEY[1]);

export function AuthProvider({ children }) {
  const [nome, setNome] = useState(storageNome);
  const [cpf, setCpf] = useState(storageCpf);

  function logar(nome,cpf) {
    setNome(nome);
    setCpf(cpf);
    localStorage.setItem(LOCAL_STORAGE_KEY[0], nome);
    localStorage.setItem(LOCAL_STORAGE_KEY[1], cpf);
  }

  function deslogar() {
    setNome(null);
    setCpf(null);    
    localStorage.removeItem(LOCAL_STORAGE_KEY[0]);
    localStorage.removeItem(LOCAL_STORAGE_KEY[1]);
  }

  return (
    <AuthContext.Provider value={{ nome, cpf, logar, deslogar }}>
      {children}
    </AuthContext.Provider>
  );
}