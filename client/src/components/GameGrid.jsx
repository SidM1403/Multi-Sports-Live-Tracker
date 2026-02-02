import React from 'react';
import { useSports } from '../context/SportsContext';
import EnhancedGameCard from './EnhancedGameCard';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';

const GameGrid = ({ sport }) => {
    const { filteredGames, loading, error } = useSports();

    if (loading) {
        return <LoadingSkeleton count={6} />;
    }

    if (error) {
        return (
            <EmptyState
                icon="⚠️"
                title="Oops! Something went wrong"
                message={error}
                actionLabel="Try Again"
                onAction={() => window.location.reload()}
            />
        );
    }

    if (filteredGames.length === 0) {
        return (
            <EmptyState
                icon="🏟️"
                title="No games found"
                message="There are no games matching your current filters. Try adjusting your search or date selection."
            />
        );
    }

    return (
        <div className="games-grid">
            {filteredGames.map((game) => (
                <EnhancedGameCard key={game.id} game={game} sport={sport} />
            ))}
        </div>
    );
};

export default GameGrid;
