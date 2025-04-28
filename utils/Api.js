import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 30 * 1000,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
    },
});


export default Api