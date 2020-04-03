import axios from "axios";

// Problema no emulador do android, usar ip local da rede
const URL = "192.168.1.103";
const api = axios.create({ baseURL: `http://${URL}:3000/` });

export default api;
