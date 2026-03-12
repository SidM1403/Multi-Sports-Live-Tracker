import React from 'react';

const EmptyState = ({ icon = '🏟️', title = 'No Data', message = 'No information available.' }) => {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">{icon}</div>
            <h3 className="empty-state-title">{title}</h3>
            <p className="empty-state-message">{message}</p>
        </div>
    );
};

export default EmptyState;
