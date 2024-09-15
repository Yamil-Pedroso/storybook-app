import axios from 'axios';
import API_BASE_URL from './api';
import { IGames } from '../types/types';

export const getGames = async () => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/games`);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createGame = async (game: IGames) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/games`, game);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteGame = async (id: string) => {
    try {
        const { data } = await axios.delete(`${API_BASE_URL}/games/${id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
}
