import React, { useEffect } from 'react';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const CricketPage = () => {
    const { setCurrentSport } = useSports();

    useEffect(() => {
        setCurrentSport('cricket');
    }, [setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport="cricket" />
            <FilterPanel />
            <GameGrid sport="cricket" />
        </div>
    );
};

export default CricketPage;
