import React from 'react';
import { useSports } from '../context/SportsContext';

const HeroSection = ({ sport }) => {
    const { games, filteredGames } = useSports();

    const getTotalGames = () => games.length;
    const getLiveGames = () => games.filter((g) => g.status === 'live').length;
    const getFinalGames = () => games.filter((g) => g.status === 'final').length;
    const getScheduledGames = () => games.filter((g) => g.status === 'scheduled').length;

    const getSportTitle = () => {
        const titles = {
            mlb: 'Major League Baseball',
            cricket: 'Cricket Matches',
            mls: 'Major League Soccer',
            nhl: 'National Hockey League',
            nba: 'National Basketball Association',
            football: 'European Football',
        };
        return titles[sport] || 'Sports';
    };

    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">{getSportTitle()}</h1>
                <p className="hero-subtitle">
                    Track live scores, stats, and updates in real-time
                </p>

                <div className="hero-stats">
                    <div className="hero-stat-card">
                        <div className="hero-stat-number">{getTotalGames()}</div>
                        <div className="hero-stat-label">Total Games</div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-number" style={{ color: '#ef4444' }}>
                            {getLiveGames()}
                        </div>
                        <div className="hero-stat-label">Live Now</div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-number" style={{ color: '#10b981' }}>
                            {getFinalGames()}
                        </div>
                        <div className="hero-stat-label">Completed</div>
                    </div>

                    <div className="hero-stat-card">
                        <div className="hero-stat-number" style={{ color: '#3b82f6' }}>
                            {getScheduledGames()}
                        </div>
                        <div className="hero-stat-label">Upcoming</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
