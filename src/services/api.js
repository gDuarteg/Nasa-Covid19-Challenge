import axios from "axios";

// Problema no emulador do android, usar ip local da rede
const authURL = "192.168.1.103";
const auth = axios.create({ baseURL: `http://${authURL}:3000/users` });

const globalURL = "192.168.1.103";
const global = axios.create({ baseURL: `http://${globalURL}:3000/` });

export default { auth, global };
