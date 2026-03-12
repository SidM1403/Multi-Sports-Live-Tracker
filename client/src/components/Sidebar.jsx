import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const sports = [
        { id: 'mlb', label: 'MLB', path: '/mlb', color: '#3b82f6' },
        { id: 'cricket', label: 'Cricket', path: '/cricket', color: '#10b981' },
        { id: 'mls', label: 'MLS', path: '/mls', color: '#ef4444' },
        { id: 'nhl', label: 'NHL', path: '/nhl', color: '#8b5cf6' },
        { id: 'nba', label: 'NBA', path: '/nba', color: '#f59e0b' },
        { id: 'football', label: 'Football', path: '/football', color: '#06b6d4' },
    ];

    const handleSportClick = (path) => {
        navigate(path);
    };

    return (
        <div className="horizontal-sidebar">
            <div className="sidebar-label">Sports</div>
            <div className="sidebar-tabs">
                {sports.map((sport) => (
                    <button
                        key={sport.id}
                        className={`sidebar-tab ${location.pathname === sport.path ||
                                (location.pathname === '/' && sport.id === 'mlb')
                                ? 'active'
                                : ''
                            }`}
                        style={{
                            '--sport-color': sport.color
                        }}
                        onClick={() => handleSportClick(sport.path)}
                    >
                        <span className="tab-label">{sport.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
