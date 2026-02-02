import React from 'react';

const LoadingSkeleton = ({ count = 6 }) => {
    return (
        <div className="games-grid">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="game-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-lg)' }}>
                        <div className="skeleton" style={{ width: '80px', height: '24px' }}></div>
                        <div className="skeleton" style={{ width: '60px', height: '24px' }}></div>
                    </div>

                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
                            <div className="skeleton" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)' }}></div>
                            <div style={{ flex: 1 }}>
                                <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
                                <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
                            </div>
                            <div className="skeleton" style={{ width: '40px', height: '40px' }}></div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                            <div className="skeleton" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)' }}></div>
                            <div style={{ flex: 1 }}>
                                <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
                                <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
                            </div>
                            <div className="skeleton" style={{ width: '40px', height: '40px' }}></div>
                        </div>
                    </div>

                    <div className="skeleton" style={{ width: '100%', height: '40px', marginTop: 'var(--spacing-md)' }}></div>
                </div>
            ))}
        </div>
    );
};

export default LoadingSkeleton;
