import express from 'express';
import {
    getMLBGames,
    getCricketMatches,
    getMLSGames,
    getNHLGames,
    getNBAGames,
    getFootballGames,
    getAPIStatus,
} from '../controllers/sportsController.js';

const router = express.Router();

// MLB Routes
router.get('/mlb/:date', getMLBGames);

// Cricket Routes
router.get('/cricket/:date', getCricketMatches);

// MLS Routes
router.get('/mls/:date', getMLSGames);

// NHL Routes
router.get('/nhl/:date', getNHLGames);

// NBA Routes
router.get('/nba/:date', getNBAGames);

// Football Routes
router.get('/football/:date', getFootballGames);

// API Status
router.get('/status', getAPIStatus);

export default router;
