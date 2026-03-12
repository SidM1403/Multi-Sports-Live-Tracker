import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
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
    const loadGames = useCallback(async () => {
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
        } catch (err) {
            setError(err.message || 'Failed to fetch games');
            setGames([]);
        } finally {
            setLoading(false);
        }
    }, [currentSport, currentDate]);

    // Apply filters and search to games
    const applyFiltersAndSearch = useCallback(() => {
        let result = [...games];

        // Apply status filter
        if (currentFilter !== 'all') {
            result = result.filter((game) => game.status === currentFilter);
        }

        // Apply search query
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter((game) => {
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
        }

        setFilteredGames(result);
    }, [games, currentFilter, searchQuery]);

    // Filter games by status
    const filterGames = useCallback((filter) => {
        setCurrentFilter(filter);
    }, []);

    // Search games by team name
    const searchGames = useCallback((query) => {
        setSearchQuery(query);
    }, []);

    // Sort games
    const sortGames = useCallback((sortBy) => {
        setFilteredGames((prevGames) => {
            let sorted = [...prevGames];

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

            return sorted;
        });
    }, []);

    // Load API status
    const loadAPIStatus = useCallback(async () => {
        try {
            const response = await fetchAPIStatus();
            setApiStatus(response.status || {});
        } catch (err) {
            console.error('Failed to fetch API status:', err);
        }
    }, []);

    // Reset filters when sport or date changes
    useEffect(() => {
        setCurrentFilter('all');
        setSearchQuery('');
    }, [currentSport, currentDate]);

    // Load games when sport or date changes
    useEffect(() => {
        loadGames();
    }, [loadGames]);

    // Apply filters and search when games, filter, or search query changes
    useEffect(() => {
        applyFiltersAndSearch();
    }, [applyFiltersAndSearch]);

    // Load API status on mount
    useEffect(() => {
        loadAPIStatus();
    }, [loadAPIStatus]);

    const value = useMemo(
        () => ({
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
            setCurrentDate,
        }),
        [
            currentSport,
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
        ]
    );

    return <SportsContext.Provider value={value}>{children}</SportsContext.Provider>;
};
