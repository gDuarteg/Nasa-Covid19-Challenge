import axios from "axios";

// Problema no emulador do android, usar ip local da rede
const URL = "https://nasa.brartc.com/";
const api = axios.create({ baseURL: URL });

export default { api };
