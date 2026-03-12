import React from 'react';
import { useSports } from '../context/SportsContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { currentDate, setCurrentDate, apiStatus, searchGames } = useSports();
    const [searchTerm, setSearchTerm] = React.useState('');

    const getWorkingAPIs = () => {
        const statuses = Object.values(apiStatus);
        return statuses.filter((status) => status === 'Working').length;
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        searchGames(value);
    };

    const changeDate = (days) => {
        const current = new Date(currentDate);
        current.setDate(current.getDate() + days);
        setCurrentDate(current.toISOString().split('T')[0]);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img
                    src="/logo.svg"
                    alt="ScoreJano"
                    className="navbar-logo"
                />
                <span className="brand-name">ScoreJano</span>
            </div>

            <div className="navbar-search">
                <div className="search-bar">
                    <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search teams..."
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="navbar-actions">
                <div className="date-picker-group">
                    <button
                        className="btn btn-sm btn-outline"
                        onClick={() => changeDate(-1)}
                        title="Previous day"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <input
                        type="date"
                        className="input"
                        value={currentDate}
                        onChange={(e) => setCurrentDate(e.target.value)}
                        style={{ width: '150px', fontSize: '0.875rem' }}
                    />
                    <button
                        className="btn btn-sm btn-outline"
                        onClick={() => changeDate(1)}
                        title="Next day"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="api-status">
                    <span className={`status-dot ${getWorkingAPIs() >= 4 ? 'status-success' : 'status-warning'}`}></span>
                    <span className="status-text">{getWorkingAPIs()}/6 APIs</span>
                </div>

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
