import React, { useState } from 'react';
import { useSports } from '../context/SportsContext';

const FilterPanel = () => {
    const { currentFilter, filterGames, sortGames } = useSports();
    const [isExpanded, setIsExpanded] = useState(true);

    const statusFilters = [
        { id: 'all', label: 'All Games' },
        { id: 'live', label: 'Live' },
        { id: 'final', label: 'Final' },
        { id: 'scheduled', label: 'Scheduled' },
    ];

    const sortOptions = [
        { id: 'time', label: 'By Time' },
        { id: 'score', label: 'By Score' },
    ];

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
                                    {filter.label}
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
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterPanel;
