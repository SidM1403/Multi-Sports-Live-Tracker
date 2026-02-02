import React, { useEffect } from 'react';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const NBAPage = () => {
    const { setCurrentSport } = useSports();

    useEffect(() => {
        setCurrentSport('nba');
    }, [setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport="nba" />
            <FilterPanel />
            <GameGrid sport="nba" />
        </div>
    );
};

export default NBAPage;
