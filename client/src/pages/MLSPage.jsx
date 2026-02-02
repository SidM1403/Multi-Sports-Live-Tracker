import React, { useEffect } from 'react';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const MLSPage = () => {
    const { setCurrentSport } = useSports();

    useEffect(() => {
        setCurrentSport('mls');
    }, [setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport="mls" />
            <FilterPanel />
            <GameGrid sport="mls" />
        </div>
    );
};

export default MLSPage;
