import React, { useEffect } from 'react';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const FootballPage = () => {
    const { setCurrentSport } = useSports();

    useEffect(() => {
        setCurrentSport('football');
    }, [setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport="football" />
            <FilterPanel />
            <GameGrid sport="football" />
        </div>
    );
};

export default FootballPage;
