import React from 'react';
import { useSports } from '../context/SportsContext';
import GameCard from './GameCard';

const GamesContainer = ({ sport }) => {
    const { filteredGames, loading, error, loadGames } = useSports();

    if (loading) {
        return (
            <div className="games-container">
                <div className="loading">Loading {sport.toUpperCase()} games...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="games-container">
                <div className="error">
                    Error: {error}
                    <button onClick={loadGames} className="retry-btn">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (filteredGames.length === 0) {
        return (
            <div className="games-container">
                <div className="no-games">No games found for this date.</div>
            </div>
        );
    }

    return (
        <div className="games-container">
            {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} sport={sport} />
            ))}
        </div>
    );
};

export default GamesContainer;
