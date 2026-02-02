import React from 'react';

const EnhancedGameCard = ({ game, sport }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'live':
                return 'status-live';
            case 'final':
                return 'status-final';
            case 'scheduled':
                return 'status-scheduled';
            default:
                return '';
        }
    };

    const renderMLBLineScore = () => {
        if (!game.homeLineScore || !game.awayLineScore) return null;

        const maxInnings = Math.max(9, game.homeLineScore.length, game.awayLineScore.length);

        return (
            <div style={{
                marginTop: 'var(--spacing-lg)',
                padding: 'var(--spacing-md)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                fontSize: '0.75rem',
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: `80px repeat(${maxInnings}, 1fr) 40px 40px 40px`, gap: '4px', marginBottom: '8px' }}>
                    <div style={{ fontWeight: 600 }}>Team</div>
                    {[...Array(maxInnings)].map((_, i) => (
                        <div key={i} style={{ textAlign: 'center', fontWeight: 600 }}>{i + 1}</div>
                    ))}
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>R</div>
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>H</div>
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>E</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: `80px repeat(${maxInnings}, 1fr) 40px 40px 40px`, gap: '4px', marginBottom: '4px' }}>
                    <div>{game.awayTeam.abbr}</div>
                    {[...Array(maxInnings)].map((_, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            {game.awayLineScore[i] !== undefined ? game.awayLineScore[i] : '-'}
                        </div>
                    ))}
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>{game.awayTeam.score}</div>
                    <div style={{ textAlign: 'center' }}>{game.awayHits || 0}</div>
                    <div style={{ textAlign: 'center' }}>{game.awayErrors || 0}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: `80px repeat(${maxInnings}, 1fr) 40px 40px 40px`, gap: '4px' }}>
                    <div>{game.homeTeam.abbr}</div>
                    {[...Array(maxInnings)].map((_, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            {game.homeLineScore[i] !== undefined ? game.homeLineScore[i] : '-'}
                        </div>
                    ))}
                    <div style={{ textAlign: 'center', fontWeight: 600 }}>{game.homeTeam.score}</div>
                    <div style={{ textAlign: 'center' }}>{game.homeHits || 0}</div>
                    <div style={{ textAlign: 'center' }}>{game.homeErrors || 0}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="game-card">
            <div className="game-card-header">
                <span className={`game-status-badge ${getStatusClass(game.status)}`}>
                    {game.status.toUpperCase()}
                </span>
                <span className="game-time">{game.startTime}</span>
            </div>

            <div className="game-teams">
                {/* Away Team */}
                <div className="team-row">
                    <div className="team-info-wrapper">
                        {game.awayTeam.logo && (
                            <div className="team-logo-wrapper">
                                <img src={game.awayTeam.logo} alt={game.awayTeam.name} className="team-logo" />
                            </div>
                        )}
                        <div className="team-details">
                            <div className="team-name">{game.awayTeam.name}</div>
                            <div className="team-abbr">{game.awayTeam.abbr}</div>
                        </div>
                    </div>
                    <div className="team-score">{game.awayTeam.score || 0}</div>
                </div>

                {/* Home Team */}
                <div className="team-row">
                    <div className="team-info-wrapper">
                        {game.homeTeam.logo && (
                            <div className="team-logo-wrapper">
                                <img src={game.homeTeam.logo} alt={game.homeTeam.name} className="team-logo" />
                            </div>
                        )}
                        <div className="team-details">
                            <div className="team-name">{game.homeTeam.name}</div>
                            <div className="team-abbr">{game.homeTeam.abbr}</div>
                        </div>
                    </div>
                    <div className="team-score">{game.homeTeam.score || 0}</div>
                </div>
            </div>

            {sport === 'mlb' && game.status !== 'scheduled' && renderMLBLineScore()}

            {sport === 'mlb' && game.status === 'live' && (
                <div style={{
                    marginTop: 'var(--spacing-md)',
                    padding: 'var(--spacing-sm)',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                }}>
                    Inning: {game.isTopInning ? '▲' : '▼'} {game.inning}
                </div>
            )}

            {(sport === 'nhl' || sport === 'nba') && game.period && (
                <div style={{
                    marginTop: 'var(--spacing-md)',
                    padding: 'var(--spacing-sm)',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                }}>
                    Period: {game.period} {game.clock && `- ${game.clock}`}
                </div>
            )}

            {game.venue && (
                <div style={{
                    marginTop: 'var(--spacing-md)',
                    padding: 'var(--spacing-sm)',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textAlign: 'center',
                }}>
                    📍 {game.venue}
                </div>
            )}

            <div style={{
                marginTop: 'var(--spacing-md)',
                display: 'flex',
                gap: 'var(--spacing-sm)',
                justifyContent: 'flex-end',
            }}>
                <button className="btn btn-sm btn-outline" title="Add to favorites">
                    ⭐
                </button>
                <button className="btn btn-sm btn-outline" title="Share">
                    🔗
                </button>
            </div>
        </div>
    );
};

export default EnhancedGameCard;
