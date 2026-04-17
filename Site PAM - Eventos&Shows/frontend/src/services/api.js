import axios from 'axios';

// Configura o cliente HTTP Axios para chamar o backend.
// Use o IP da máquina em vez de "localhost" quando testar em um celular físico.
const API = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
});

// Envia as credenciais para o backend e recebe o token JWT.
export async function loginUser(email, password) {
  return API.post('/auth/login', { email: email.trim(), password });
}

// Envia os dados do cadastro completo para o backend.
export async function registerUser(userData) {
  return API.post('/auth/register', userData);
}

// Busca os dados do endereço a partir do CEP usando a rota de CEP do backend.
export async function fetchCep(cep) {
  return API.get(`/cep/${cep}`);
}
