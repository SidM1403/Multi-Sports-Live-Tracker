import React, { useEffect } from 'react';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const MLBPage = () => {
    const { setCurrentSport } = useSports();

    useEffect(() => {
        setCurrentSport('mlb');
    }, [setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport="mlb" />
            <FilterPanel />
            <GameGrid sport="mlb" />
        </div>
    );
};

export default MLBPage;
