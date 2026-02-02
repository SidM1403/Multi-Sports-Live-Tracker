import React from 'react';
import { useSports } from '../context/SportsContext';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { currentDate, setCurrentDate, apiStatus, searchGames } = useSports();
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = React.useState('');

    const getWorkingAPIs = () => {
        const statuses = Object.values(apiStatus);
        return statuses.filter((status) => status === 'Working').length;
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        searchGames(value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span style={{ fontSize: '1.5rem' }}>🏆</span>
                SPORTTRACKER
            </div>

            <div className="navbar-search">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search teams, games, leagues..."
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="navbar-actions">
                <input
                    type="date"
                    className="input"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                    style={{ width: '160px', fontSize: '0.875rem' }}
                />

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                }}>
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: getWorkingAPIs() >= 4 ? 'var(--primary-green)' : 'var(--primary-orange)',
                        animation: getWorkingAPIs() >= 4 ? 'pulse 2s infinite' : 'none',
                    }}></span>
                    <span>{getWorkingAPIs()}/6 APIs</span>
                </div>

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
