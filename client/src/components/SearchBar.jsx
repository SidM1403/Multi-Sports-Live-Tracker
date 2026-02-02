import React from 'react';
import { useSports } from '../context/SportsContext';

const SearchBar = ({ placeholder = 'Search teams...' }) => {
    const { searchQuery, searchGames } = useSports();

    const handleSearch = (e) => {
        searchGames(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
