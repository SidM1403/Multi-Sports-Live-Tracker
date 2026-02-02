import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema(
    {
        sport: {
            type: String,
            required: true,
            enum: ['mlb', 'cricket', 'mls', 'nhl', 'nba', 'football'],
        },
        gameId: {
            type: String,
            required: true,
            unique: true,
        },
        date: {
            type: Date,
            required: true,
        },
        homeTeam: {
            name: String,
            abbr: String,
            city: String,
            logo: String,
            score: Number,
        },
        awayTeam: {
            name: String,
            abbr: String,
            city: String,
            logo: String,
            score: Number,
        },
        status: {
            type: String,
            enum: ['scheduled', 'live', 'final', 'postponed'],
            default: 'scheduled',
        },
        venue: String,
        startTime: String,
        // Sport-specific fields
        inning: Number, // MLB
        isTopInning: Boolean, // MLB
        homeLineScore: [Number], // MLB
        awayLineScore: [Number], // MLB
        homeHits: Number, // MLB
        awayHits: Number, // MLB
        homeErrors: Number, // MLB
        awayErrors: Number, // MLB
        period: Number, // NHL, NBA
        matchType: String, // Cricket (Test, ODI, T20)
        overs: String, // Cricket
        rawData: mongoose.Schema.Types.Mixed, // Store original API response
    },
    {
        timestamps: true,
    }
);

// Index for faster queries
gameSchema.index({ sport: 1, date: 1 });
gameSchema.index({ gameId: 1 });
gameSchema.index({ status: 1 });

const Game = mongoose.model('Game', gameSchema);

export default Game;
