import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// API Service Functions
export const fetchMLBGames = async (date) => {
    try {
        const response = await api.get(`/mlb/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching MLB games:', error);
        throw error;
    }
};

export const fetchCricketMatches = async (date) => {
    try {
        const response = await api.get(`/cricket/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Cricket matches:', error);
        throw error;
    }
};

export const fetchMLSGames = async (date) => {
    try {
        const response = await api.get(`/mls/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching MLS games:', error);
        throw error;
    }
};

export const fetchNHLGames = async (date) => {
    try {
        const response = await api.get(`/nhl/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching NHL games:', error);
        throw error;
    }
};

export const fetchNBAGames = async (date) => {
    try {
        const response = await api.get(`/nba/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching NBA games:', error);
        throw error;
    }
};

export const fetchFootballGames = async (date) => {
    try {
        const response = await api.get(`/football/${date}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Football games:', error);
        throw error;
    }
};

export const fetchAPIStatus = async () => {
    try {
        const response = await api.get('/status');
        return response.data;
    } catch (error) {
        console.error('Error fetching API status:', error);
        throw error;
    }
};

export default api;
