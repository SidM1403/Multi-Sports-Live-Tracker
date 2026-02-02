import React, { createContext, useContext, useState, useEffect } from 'react';
import {
    fetchMLBGames,
    fetchCricketMatches,
    fetchMLSGames,
    fetchNHLGames,
    fetchNBAGames,
    fetchFootballGames,
    fetchAPIStatus,
} from '../services/api';

const SportsContext = createContext();

export const useSports = () => {
    const context = useContext(SportsContext);
    if (!context) {
        throw new Error('useSports must be used within a SportsProvider');
    }
    return context;
};

export const SportsProvider = ({ children }) => {
    const [currentSport, setCurrentSport] = useState('mlb');
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [currentFilter, setCurrentFilter] = useState('all');
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiStatus, setApiStatus] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch games based on current sport and date
    const loadGames = async () => {
        setLoading(true);
        setError(null);

        try {
            let response;

            switch (currentSport) {
                case 'mlb':
                    response = await fetchMLBGames(currentDate);
                    break;
                case 'cricket':
                    response = await fetchCricketMatches(currentDate);
                    break;
                case 'mls':
                    response = await fetchMLSGames(currentDate);
                    break;
                case 'nhl':
                    response = await fetchNHLGames(currentDate);
                    break;
                case 'nba':
                    response = await fetchNBAGames(currentDate);
                    break;
                case 'football':
                    response = await fetchFootballGames(currentDate);
                    break;
                default:
                    response = { data: [] };
            }

            setGames(response.data || []);
            setFilteredGames(response.data || []);
        } catch (err) {
            setError(err.message || 'Failed to fetch games');
            setGames([]);
            setFilteredGames([]);
        } finally {
            setLoading(false);
        }
    };

    // Filter games by status
    const filterGames = (filter) => {
        setCurrentFilter(filter);

        if (filter === 'all') {
            setFilteredGames(games);
        } else {
            const filtered = games.filter((game) => game.status === filter);
            setFilteredGames(filtered);
        }
    };

    // Search games by team name
    const searchGames = (query) => {
        setSearchQuery(query);

        if (!query) {
            filterGames(currentFilter);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const searched = games.filter((game) => {
            const homeTeamMatch =
                game.homeTeam?.name?.toLowerCase().includes(lowerQuery) ||
                game.homeTeam?.abbr?.toLowerCase().includes(lowerQuery) ||
                game.homeTeam?.city?.toLowerCase().includes(lowerQuery);

            const awayTeamMatch =
                game.awayTeam?.name?.toLowerCase().includes(lowerQuery) ||
                game.awayTeam?.abbr?.toLowerCase().includes(lowerQuery) ||
                game.awayTeam?.city?.toLowerCase().includes(lowerQuery);

            return homeTeamMatch || awayTeamMatch;
        });

        setFilteredGames(searched);
    };

    // Sort games
    const sortGames = (sortBy) => {
        let sorted = [...filteredGames];

        if (sortBy === 'score') {
            sorted.sort((a, b) => {
                const aTotal = (a.homeTeam?.score || 0) + (a.awayTeam?.score || 0);
                const bTotal = (b.homeTeam?.score || 0) + (b.awayTeam?.score || 0);
                return bTotal - aTotal;
            });
        } else if (sortBy === 'time') {
            sorted.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
        }

        setFilteredGames(sorted);
    };

    // Change date
    const changeDate = (period) => {
        const today = new Date();
        let targetDate;

        switch (period) {
            case 'yesterday':
                targetDate = new Date(today);
                targetDate.setDate(today.getDate() - 1);
                break;
            case 'today':
                targetDate = today;
                break;
            case 'tomorrow':
                targetDate = new Date(today);
                targetDate.setDate(today.getDate() + 1);
                break;
            default:
                targetDate = new Date(period);
        }

        setCurrentDate(targetDate.toISOString().split('T')[0]);
    };

    // Load API status
    const loadAPIStatus = async () => {
        try {
            const response = await fetchAPIStatus();
            setApiStatus(response.status || {});
        } catch (err) {
            console.error('Failed to fetch API status:', err);
        }
    };

    // Load games when sport or date changes
    useEffect(() => {
        loadGames();
    }, [currentSport, currentDate]);

    // Load API status on mount
    useEffect(() => {
        loadAPIStatus();
    }, []);

    const value = {
        currentSport,
        setCurrentSport,
        games,
        filteredGames,
        currentFilter,
        currentDate,
        loading,
        error,
        apiStatus,
        searchQuery,
        loadGames,
        filterGames,
        searchGames,
        sortGames,
        changeDate,
        setCurrentDate,
    };

    return <SportsContext.Provider value={value}>{children}</SportsContext.Provider>;
};
