import React, { useState } from 'react';
import { useSports } from '../context/SportsContext';

const FilterPanel = () => {
    const { currentFilter, filterGames, sortGames, searchGames } = useSports();
    const [isExpanded, setIsExpanded] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const statusFilters = [
        { id: 'all', label: 'All Games', icon: '📊' },
        { id: 'live', label: 'Live', icon: '🔴' },
        { id: 'final', label: 'Final', icon: '✅' },
        { id: 'scheduled', label: 'Scheduled', icon: '📅' },
    ];

    const sortOptions = [
        { id: 'time', label: 'By Time', icon: '⏰' },
        { id: 'score', label: 'By Score', icon: '🔢' },
    ];

    const handleSearch = (value) => {
        setSearchTerm(value);
        searchGames(value);
    };

    return (
        <div className="filter-panel">
            <div className="filter-header">
                <h3 className="filter-title">Filters & Sorting</h3>
                <button
                    className="btn btn-sm btn-outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? '▲' : '▼'}
                </button>
            </div>

            {isExpanded && (
                <div className="filter-grid">
                    <div className="filter-group">
                        <label className="filter-label">Status</label>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {statusFilters.map((filter) => (
                                <button
                                    key={filter.id}
                                    className={`btn btn-sm ${currentFilter === filter.id ? 'btn-primary' : 'btn-outline'
                                        }`}
                                    onClick={() => filterGames(filter.id)}
                                >
                                    <span>{filter.icon}</span>
                                    <span>{filter.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Sort By</label>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {sortOptions.map((option) => (
                                <button
                                    key={option.id}
                                    className="btn btn-sm btn-outline"
                                    onClick={() => sortGames(option.id)}
                                >
                                    <span>{option.icon}</span>
                                    <span>{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Search Teams</label>
                        <div className="search-bar">
                            <span className="search-icon">🔍</span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search by team name..."
                                value={searchTerm}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterPanel;
