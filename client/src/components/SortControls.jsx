import React from 'react';
import { useSports } from '../context/SportsContext';

const SortControls = () => {
    const { sortGames } = useSports();

    return (
        <div className="controls sort-controls">
            <button className="btn" onClick={() => sortGames('score')}>
                Sort by Score
            </button>
            <button className="btn" onClick={() => sortGames('time')}>
                Sort by Time
            </button>
        </div>
    );
};

export default SortControls;
