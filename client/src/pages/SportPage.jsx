import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSports } from '../context/SportsContext';
import HeroSection from '../components/HeroSection';
import FilterPanel from '../components/FilterPanel';
import GameGrid from '../components/GameGrid';

const SportPage = () => {
    const { sport } = useParams();
    const { setCurrentSport } = useSports();

    useEffect(() => {
        if (sport) {
            setCurrentSport(sport);
        }
    }, [sport, setCurrentSport]);

    return (
        <div className="sport-page">
            <HeroSection sport={sport} />
            <FilterPanel />
            <GameGrid sport={sport} />
        </div>
    );
};

export default SportPage;
