import React from 'react';
import { useSports } from '../context/SportsContext';

const Header = () => {
    const { currentSport, apiStatus } = useSports();

    const getSportInfo = () => {
        switch (currentSport) {
            case 'cricket':
                return {
                    title: '🏏 Cricket Live Tracker',
                    subtitle: 'Real-time cricket match updates and scores',
                };
            case 'mls':
                return {
                    title: '⚽ MLS Live Tracker',
                    subtitle: 'Real-time Major League Soccer updates and scores',
                };
            case 'nhl':
                return {
                    title: '🏒 NHL Live Tracker',
                    subtitle: 'Real-time National Hockey League updates and scores',
                };
            case 'nba':
                return {
                    title: '🏀 NBA Live Tracker',
                    subtitle: 'Real-time National Basketball Association updates and scores',
                };
            case 'football':
                return {
                    title: '⚽ Football Live Tracker',
                    subtitle: 'Real-time European Football updates and scores',
                };
            case 'mlb':
            default:
                return {
                    title: '⚾ Enhanced MLB Tracker',
                    subtitle: 'Real-time and Historical Major League Baseball scores',
                };
        }
    };

    const { title, subtitle } = getSportInfo();

    const getWorkingAPIs = () => {
        const statuses = Object.values(apiStatus);
        return statuses.filter((status) => status === 'Working').length;
    };

    return (
        <div className="header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="api-status">
                APIs: {getWorkingAPIs()}/6 Working
            </div>
        </div>
    );
};

export default Header;
