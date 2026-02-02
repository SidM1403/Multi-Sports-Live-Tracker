import React from 'react';
import { useSports } from '../context/SportsContext';

const DateSelector = () => {
    const { currentDate, changeDate, setCurrentDate } = useSports();

    const handleCustomDate = (e) => {
        setCurrentDate(e.target.value);
    };

    return (
        <div className="date-selector">
            <button className="date-btn" onClick={() => changeDate('yesterday')}>
                Yesterday
            </button>
            <button className="date-btn active" onClick={() => changeDate('today')}>
                Today
            </button>
            <button className="date-btn" onClick={() => changeDate('tomorrow')}>
                Tomorrow
            </button>
            <input
                type="date"
                className="date-input"
                value={currentDate}
                onChange={handleCustomDate}
            />
        </div>
    );
};

export default DateSelector;
