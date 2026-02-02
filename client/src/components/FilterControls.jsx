import React from 'react';
import { useSports } from '../context/SportsContext';

const FilterControls = () => {
    const { currentFilter, filterGames } = useSports();

    const filters = [
        { id: 'all', label: 'All Games' },
        { id: 'live', label: 'Live' },
        { id: 'final', label: 'Final' },
        { id: 'scheduled', label: 'Scheduled' },
    ];

    return (
        <div className="controls filter-controls">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    className={`btn ${currentFilter === filter.id ? 'active' : ''}`}
                    onClick={() => filterGames(filter.id)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default FilterControls;
