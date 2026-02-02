import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSports } from '../context/SportsContext';

const SportTabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentSport } = useSports();

    const tabs = [
        { id: 'mlb', label: '⚾ MLB', path: '/mlb' },
        { id: 'cricket', label: '🏏 Cricket', path: '/cricket' },
        { id: 'mls', label: '⚽ MLS', path: '/mls' },
        { id: 'nhl', label: '🏒 NHL', path: '/nhl' },
        { id: 'nba', label: '🏀 NBA', path: '/nba' },
        { id: 'football', label: '⚽ Football', path: '/football' },
    ];

    const handleTabClick = (sport, path) => {
        setCurrentSport(sport);
        navigate(path);
    };

    return (
        <div className="sport-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`tab-btn ${location.pathname === tab.path || (location.pathname === '/' && tab.id === 'mlb') ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab.id, tab.path)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default SportTabs;
