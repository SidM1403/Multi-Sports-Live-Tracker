import React, { useEffect } from 'react';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const NHLPage = () => {
    const { setCurrentSport } = useSports();

    useEffect(() => {
        setCurrentSport('nhl');
    }, [setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport="nhl" />
            <FilterPanel />
            <GameGrid sport="nhl" />
        </div>
    );
};

export default NHLPage;
