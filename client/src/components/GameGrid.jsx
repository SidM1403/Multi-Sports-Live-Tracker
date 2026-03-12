import React from 'react';
import { useSports } from '../context/SportsContext';
import GameCard from './GameCard';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';

const GameGrid = ({ sport }) => {
    const { filteredGames, loading, error } = useSports();

    if (loading) {
        return (
            <div className="games-grid">
                {[...Array(6)].map((_, index) => (
                    <LoadingSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <EmptyState
                icon="⚠️"
                title="Error Loading Games"
                message={error}
            />
        );
    }

    if (filteredGames.length === 0) {
        return (
            <EmptyState
                icon="🏟️"
                title="No Games Found"
                message="Try adjusting your filters or selecting a different date."
            />
        );
    }

    return (
        <div className="games-grid">
            {filteredGames.map((game, index) => (
                <GameCard key={game.id || index} game={game} sport={sport} />
            ))}
        </div>
    );
};

export default GameGrid;
