import axios from "axios";

export const authService = () => {
    return axios.get('https://rickandmortyapi.com/api/character/2');
}