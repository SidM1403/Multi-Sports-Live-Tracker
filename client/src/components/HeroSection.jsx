import React from 'react';
import { useSports } from '../context/SportsContext';

const HeroSection = ({ sport }) => {
    const { games, filteredGames } = useSports();

    const getSportName = (sportId) => {
        const names = {
            mlb: 'Major League Baseball',
            cricket: 'Cricket',
            mls: 'Major League Soccer',
            nhl: 'National Hockey League',
            nba: 'National Basketball Association',
            football: 'Football',
        };
        return names[sportId] || sportId.toUpperCase();
    };

    const liveGames = games.filter((game) => game.status === 'live').length;
    const finalGames = games.filter((game) => game.status === 'final').length;
    const scheduledGames = games.filter((game) => game.status === 'scheduled').length;

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">{getSportName(sport)}</h1>
                <p className="hero-subtitle">
                    {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} found
                </p>

                <div className="hero-stats">
                    <div className="stat-card">
                        <div className="stat-label">Live Now</div>
                        <div className="stat-value" style={{ color: 'var(--accent-success)' }}>
                            {liveGames}
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Completed</div>
                        <div className="stat-value">{finalGames}</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Upcoming</div>
                        <div className="stat-value" style={{ color: 'var(--accent-primary)' }}>
                            {scheduledGames}
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-label">Total Games</div>
                        <div className="stat-value">{games.length}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
