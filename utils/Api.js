import axios from "axios";

const Api = axios.create({
    baseURL: 'https://c60e-182-2-140-15.ngrok-free.app',
    timeout: 30 * 1000,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
    },
});


export default Api