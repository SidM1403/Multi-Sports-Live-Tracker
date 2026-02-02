import React from 'react';
import { useSports } from '../context/SportsContext';

const StatsCards = ({ sport }) => {
    const { games, filteredGames } = useSports();

    const getTotalGames = () => games.length;

    const getLiveGames = () => games.filter((g) => g.status === 'live').length;

    const getFinalGames = () => games.filter((g) => g.status === 'final').length;

    const getAverageScore = () => {
        if (games.length === 0) return 0;

        const total = games.reduce((sum, game) => {
            return sum + (game.homeTeam?.score || 0) + (game.awayTeam?.score || 0);
        }, 0);

        return (total / games.length).toFixed(1);
    };

    const getScoreLabel = () => {
        switch (sport) {
            case 'mlb':
                return 'Avg Total Runs';
            case 'nba':
                return 'Avg Total Points';
            case 'mls':
            case 'football':
                return 'Avg Total Goals';
            case 'nhl':
                return 'Avg Total Goals';
            default:
                return 'Avg Score';
        }
    };

    return (
        <div className="stats">
            <div className="stat-card">
                <div className="stat-number">{getTotalGames()}</div>
                <div className="stat-label">Total Games</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">{getLiveGames()}</div>
                <div className="stat-label">Live Games</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">{getFinalGames()}</div>
                <div className="stat-label">Final Games</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">{getAverageScore()}</div>
                <div className="stat-label">{getScoreLabel()}</div>
            </div>
        </div>
    );
};

export default StatsCards;
