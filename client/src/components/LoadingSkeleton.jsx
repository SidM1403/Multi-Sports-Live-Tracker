import React from 'react';

const LoadingSkeleton = () => {
    return (
        <div className="game-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div className="skeleton skeleton-text" style={{ width: '80px', height: '24px' }}></div>
                <div className="skeleton skeleton-text" style={{ width: '100px', height: '20px' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                    <div className="skeleton" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)' }}></div>
                    <div style={{ flex: 1 }}>
                        <div className="skeleton skeleton-text" style={{ width: '60%', marginBottom: '8px' }}></div>
                        <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
                    </div>
                    <div className="skeleton skeleton-text" style={{ width: '40px', height: '32px' }}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                    <div className="skeleton" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)' }}></div>
                    <div style={{ flex: 1 }}>
                        <div className="skeleton skeleton-text" style={{ width: '60%', marginBottom: '8px' }}></div>
                        <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
                    </div>
                    <div className="skeleton skeleton-text" style={{ width: '40px', height: '32px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;
