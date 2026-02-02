import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSports } from '../context/SportsContext';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentSport, filterGames, currentDate, setCurrentDate } = useSports();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const sports = [
        { id: 'mlb', label: 'MLB', icon: '⚾', path: '/mlb', color: '#0066cc' },
        { id: 'cricket', label: 'Cricket', icon: '🏏', path: '/cricket', color: '#00a651' },
        { id: 'mls', label: 'MLS', icon: '⚽', path: '/mls', color: '#e31c23' },
        { id: 'nhl', label: 'NHL', icon: '🏒', path: '/nhl', color: '#0066cc' },
        { id: 'nba', label: 'NBA', icon: '🏀', path: '/nba', color: '#ff6b00' },
        { id: 'football', label: 'Football', icon: '⚽', path: '/football', color: '#00a651' },
    ];

    const handleSportClick = (sport, path) => {
        setCurrentSport(sport);
        navigate(path);
    };

    const handleQuickFilter = (filterType) => {
        switch (filterType) {
            case 'live':
                filterGames('live');
                break;
            case 'today':
                const today = new Date().toISOString().split('T')[0];
                setCurrentDate(today);
                filterGames('all');
                break;
            case 'favorites':
                // Placeholder for favorites functionality
                alert('Favorites feature coming soon!');
                break;
            default:
                filterGames('all');
        }
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-section">
                <div className="sidebar-title">Sports</div>
                <ul className="sidebar-menu">
                    {sports.map((sport) => (
                        <li key={sport.id} className="sidebar-item">
                            <a
                                href="#"
                                className={`sidebar-link ${location.pathname === sport.path || (location.pathname === '/' && sport.id === 'mlb')
                                        ? 'active'
                                        : ''
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSportClick(sport.id, sport.path);
                                }}
                            >
                                <span className="sidebar-icon">{sport.icon}</span>
                                {!isCollapsed && <span>{sport.label}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-section">
                <div className="sidebar-title">Quick Filters</div>
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <a
                            href="#"
                            className="sidebar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                handleQuickFilter('live');
                            }}
                        >
                            <span className="sidebar-icon">🔴</span>
                            {!isCollapsed && <span>Live Now</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a
                            href="#"
                            className="sidebar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                handleQuickFilter('favorites');
                            }}
                        >
                            <span className="sidebar-icon">⭐</span>
                            {!isCollapsed && <span>Favorites</span>}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a
                            href="#"
                            className="sidebar-link"
                            onClick={(e) => {
                                e.preventDefault();
                                handleQuickFilter('today');
                            }}
                        >
                            <span className="sidebar-icon">📅</span>
                            {!isCollapsed && <span>Today</span>}
                        </a>
                    </li>
                </ul>
            </div>

            <button
                className="btn btn-outline btn-sm"
                onClick={() => setIsCollapsed(!isCollapsed)}
                style={{ width: '100%', marginTop: 'auto' }}
            >
                {isCollapsed ? '→' : '←'}
            </button>
        </aside>
    );
};

export default Sidebar;
