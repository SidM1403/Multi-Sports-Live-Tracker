import React from 'react';

const GameCard = ({ game, sport }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'live':
                return 'status-live';
            case 'final':
                return 'status-final';
            case 'postponed':
                return 'status-postponed';
            default:
                return 'status-scheduled';
        }
    };

    const renderMLBLineScore = () => {
        if (!game.homeLineScore || !game.awayLineScore) return null;

        const maxInnings = Math.max(9, game.homeLineScore.length, game.awayLineScore.length);

        return (
            <div className="score-grid-base mlb-line-score">
                <div className="line-score-header">Team</div>
                {[...Array(maxInnings)].map((_, i) => (
                    <div key={i} className="line-score-header">{i + 1}</div>
                ))}
                <div className="line-score-header">R</div>
                <div className="line-score-header">H</div>
                <div className="line-score-header">E</div>

                <div className="line-score-cell">{game.awayTeam.abbr}</div>
                {[...Array(maxInnings)].map((_, i) => (
                    <div key={i} className="line-score-cell">
                        {game.awayLineScore[i] !== undefined ? game.awayLineScore[i] : '-'}
                    </div>
                ))}
                <div className="line-score-cell">{game.awayTeam.score}</div>
                <div className="line-score-cell">{game.awayHits || 0}</div>
                <div className="line-score-cell">{game.awayErrors || 0}</div>

                <div className="line-score-cell">{game.homeTeam.abbr}</div>
                {[...Array(maxInnings)].map((_, i) => (
                    <div key={i} className="line-score-cell">
                        {game.homeLineScore[i] !== undefined ? game.homeLineScore[i] : '-'}
                    </div>
                ))}
                <div className="line-score-cell">{game.homeTeam.score}</div>
                <div className="line-score-cell">{game.homeHits || 0}</div>
                <div className="line-score-cell">{game.homeErrors || 0}</div>
            </div>
        );
    };

    return (
        <div className={`game-card ${getStatusClass(game.status)}`}>
            <div className="game-header">
                <span className={`status-badge ${getStatusClass(game.status)}`}>
                    {game.status.toUpperCase()}
                </span>
                <span className="game-time">{game.startTime}</span>
            </div>

            <div className="teams-container">
                <div className="team away-team">
                    {game.awayTeam.logo && (
                        <img src={game.awayTeam.logo} alt={game.awayTeam.name} className="team-logo" />
                    )}
                    <div className="team-info">
                        <div className="team-name">{game.awayTeam.name}</div>
                        <div className="team-abbr">{game.awayTeam.abbr}</div>
                    </div>
                    <div className="team-score">{game.awayTeam.score || 0}</div>
                </div>

                <div className="team home-team">
                    {game.homeTeam.logo && (
                        <img src={game.homeTeam.logo} alt={game.homeTeam.name} className="team-logo" />
                    )}
                    <div className="team-info">
                        <div className="team-name">{game.homeTeam.name}</div>
                        <div className="team-abbr">{game.homeTeam.abbr}</div>
                    </div>
                    <div className="team-score">{game.homeTeam.score || 0}</div>
                </div>
            </div>

            {sport === 'mlb' && game.status !== 'scheduled' && renderMLBLineScore()}

            {sport === 'mlb' && game.status === 'live' && (
                <div className="game-info">
                    Inning: {game.isTopInning ? '▲' : '▼'} {game.inning}
                </div>
            )}

            {(sport === 'nhl' || sport === 'nba') && game.period && (
                <div className="game-info">
                    Period: {game.period} {game.clock && `- ${game.clock}`}
                </div>
            )}

            {game.venue && (
                <div className="game-venue">📍 {game.venue}</div>
            )}
        </div>
    );
};

export default GameCard;
