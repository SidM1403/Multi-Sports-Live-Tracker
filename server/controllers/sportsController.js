import axios from 'axios';
import { getCache, setCache } from '../utils/cache.js';

// Team Logos Mappings
const MLB_TEAM_LOGOS = {
    LAA: "https://www.mlbstatic.com/team-logos/108.svg",
    HOU: "https://www.mlbstatic.com/team-logos/117.svg",
    OAK: "https://www.mlbstatic.com/team-logos/133.svg",
    TOR: "https://www.mlbstatic.com/team-logos/141.svg",
    ATL: "https://www.mlbstatic.com/team-logos/144.svg",
    MIL: "https://www.mlbstatic.com/team-logos/158.svg",
    STL: "https://www.mlbstatic.com/team-logos/138.svg",
    CHC: "https://www.mlbstatic.com/team-logos/112.svg",
    ARI: "https://www.mlbstatic.com/team-logos/109.svg",
    LAD: "https://www.mlbstatic.com/team-logos/119.svg",
    SF: "https://www.mlbstatic.com/team-logos/137.svg",
    CLE: "https://www.mlbstatic.com/team-logos/114.svg",
    SEA: "https://www.mlbstatic.com/team-logos/136.svg",
    MIA: "https://www.mlbstatic.com/team-logos/146.svg",
    NYM: "https://www.mlbstatic.com/team-logos/121.svg",
    WSH: "https://www.mlbstatic.com/team-logos/120.svg",
    BAL: "https://www.mlbstatic.com/team-logos/110.svg",
    SD: "https://www.mlbstatic.com/team-logos/135.svg",
    PHI: "https://www.mlbstatic.com/team-logos/143.svg",
    PIT: "https://www.mlbstatic.com/team-logos/134.svg",
    TEX: "https://www.mlbstatic.com/team-logos/140.svg",
    TB: "https://www.mlbstatic.com/team-logos/139.svg",
    BOS: "https://www.mlbstatic.com/team-logos/111.svg",
    CIN: "https://www.mlbstatic.com/team-logos/113.svg",
    COL: "https://www.mlbstatic.com/team-logos/115.svg",
    DET: "https://www.mlbstatic.com/team-logos/116.svg",
    KC: "https://www.mlbstatic.com/team-logos/118.svg",
    MIN: "https://www.mlbstatic.com/team-logos/142.svg",
    CWS: "https://www.mlbstatic.com/team-logos/145.svg",
    NYY: "https://www.mlbstatic.com/team-logos/147.svg",
};

const CRICKET_COUNTRY_FLAGS = {
    India: "🇮🇳",
    Australia: "🇦🇺",
    England: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    Pakistan: "🇵🇰",
    "South Africa": "🇿🇦",
    "New Zealand": "🇳🇿",
    "West Indies": "🏴‍☠️",
    "Sri Lanka": "🇱🇰",
    Bangladesh: "🇧🇩",
    Afghanistan: "🇦🇫",
    Zimbabwe: "🇿🇼",
    Ireland: "🇮🇪",
    Scotland: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    Netherlands: "🇳🇱",
    UAE: "🇦🇪",
    Nepal: "🇳🇵",
    Oman: "🇴🇲",
    USA: "🇺🇸",
    Canada: "🇨🇦",
};

// API Base URLs
const MLB_API_BASE = 'https://statsapi.mlb.com/api/v1';
const ESPN_API_BASE = 'https://site.api.espn.com/apis/site/v2/sports';
const CRICKET_API_URL = 'https://api.cricapi.com/v1/currentMatches';

// Helper Functions
const getMLBTeamLogo = (teamAbbr) => {
    return MLB_TEAM_LOGOS[teamAbbr] || 'https://www.mlbstatic.com/team-logos/league-on-dark/1.svg';
};

const getCricketCountryFlag = (countryName) => {
    const normalizedName = countryName.replace(/\s+/g, ' ').trim();

    if (CRICKET_COUNTRY_FLAGS[normalizedName]) {
        return CRICKET_COUNTRY_FLAGS[normalizedName];
    }

    for (const [country, flag] of Object.entries(CRICKET_COUNTRY_FLAGS)) {
        if (
            normalizedName.toLowerCase().includes(country.toLowerCase()) ||
            country.toLowerCase().includes(normalizedName.toLowerCase())
        ) {
            return flag;
        }
    }

    return '🏏';
};

// MLB Controller
export const getMLBGames = async (req, res) => {
    try {
        const { date } = req.params;
        const cacheKey = `mlb_${date}`;

        // Check cache first
        const cachedData = getCache(cacheKey);
        if (cachedData) {
            return res.json({ success: true, data: cachedData, cached: true });
        }

        const response = await axios.get(
            `${MLB_API_BASE}/schedule?sportId=1&date=${date}&hydrate=team,linescore,decisions`,
            { timeout: 10000 }
        );

        let games = [];
        if (response.data.dates && response.data.dates.length > 0 && response.data.dates[0].games) {
            games = response.data.dates[0].games.map(transformMLBGame);
        }

        // Cache for 5 minutes
        setCache(cacheKey, games, 300);

        res.json({ success: true, data: games, cached: false });
    } catch (error) {
        console.error('MLB API Error:', error.message);
        res.status(500).json({ success: false, error: error.message, data: [] });
    }
};

const transformMLBGame = (apiGame) => {
    const homeTeam = {
        name: apiGame.teams.home.team.teamName || apiGame.teams.home.team.name,
        abbr: apiGame.teams.home.team.abbreviation,
        city: apiGame.teams.home.team.locationName,
        logo: getMLBTeamLogo(apiGame.teams.home.team.abbreviation),
        score: apiGame.teams.home.score || 0,
    };

    const awayTeam = {
        name: apiGame.teams.away.team.teamName || apiGame.teams.away.team.name,
        abbr: apiGame.teams.away.team.abbreviation,
        city: apiGame.teams.away.team.locationName,
        logo: getMLBTeamLogo(apiGame.teams.away.team.abbreviation),
        score: apiGame.teams.away.score || 0,
    };

    let status = 'scheduled';
    if (apiGame.status.detailedState) {
        const state = apiGame.status.detailedState.toLowerCase();
        if (state.includes('live') || state.includes('progress') || apiGame.status.statusCode === 'I') {
            status = 'live';
        } else if (state.includes('final') || apiGame.status.statusCode === 'F') {
            status = 'final';
        } else if (state.includes('postponed') || state.includes('suspended')) {
            status = 'postponed';
        }
    }

    const homeLineScore = [];
    const awayLineScore = [];
    if (apiGame.linescore && apiGame.linescore.innings) {
        apiGame.linescore.innings.forEach((inningData) => {
            homeLineScore.push(inningData.home ? inningData.home.runs || 0 : 0);
            awayLineScore.push(inningData.away ? inningData.away.runs || 0 : 0);
        });
    }

    while (homeLineScore.length < 9) homeLineScore.push(0);
    while (awayLineScore.length < 9) awayLineScore.push(0);

    return {
        id: apiGame.gamePk.toString(),
        homeTeam,
        awayTeam,
        homeHits: apiGame.linescore?.teams?.home?.hits || apiGame.teams.home.hits || 0,
        awayHits: apiGame.linescore?.teams?.away?.hits || apiGame.teams.away.hits || 0,
        homeErrors: apiGame.linescore?.teams?.home?.errors || apiGame.teams.home.errors || 0,
        awayErrors: apiGame.linescore?.teams?.away?.errors || apiGame.teams.away.errors || 0,
        status,
        inning: apiGame.linescore?.currentInning || 9,
        isTopInning: apiGame.linescore?.isTopInning || false,
        homeLineScore,
        awayLineScore,
        startTime: status === 'scheduled'
            ? new Date(apiGame.gameDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : 'Started',
        date: new Date(apiGame.gameDate).toLocaleDateString(),
        venue: apiGame.venue ? apiGame.venue.name : 'TBD',
    };
};

// Cricket Controller
export const getCricketMatches = async (req, res) => {
    try {
        const { date } = req.params;
        const cacheKey = `cricket_${date}`;

        const cachedData = getCache(cacheKey);
        if (cachedData) {
            return res.json({ success: true, data: cachedData, cached: true });
        }

        const response = await axios.get(CRICKET_API_URL, {
            params: {
                apikey: process.env.CRICKET_API_KEY,
                offset: 0,
            },
            timeout: 10000,
        });

        let matches = [];
        if (response.data && response.data.data) {
            matches = response.data.data.map(transformCricketMatch);
        }

        setCache(cacheKey, matches, 300);

        res.json({ success: true, data: matches, cached: false });
    } catch (error) {
        console.error('Cricket API Error:', error.message);
        res.status(500).json({ success: false, error: error.message, data: [] });
    }
};

const transformCricketMatch = (match) => {
    // Extract team names
    const teams = match.teams || [];
    const teamInfo = match.teamInfo || [];

    // Create home and away teams
    const homeTeam = {
        name: teams[0] || 'Team 1',
        abbr: teams[0]?.substring(0, 3).toUpperCase() || 'T1',
        logo: getCricketCountryFlag(teams[0] || ''),
        score: match.score?.[0]?.r || 0,
    };

    const awayTeam = {
        name: teams[1] || 'Team 2',
        abbr: teams[1]?.substring(0, 3).toUpperCase() || 'T2',
        logo: getCricketCountryFlag(teams[1] || ''),
        score: match.score?.[1]?.r || 0,
    };

    let status = 'scheduled';
    if (match.status && match.status.toLowerCase().includes('live')) {
        status = 'live';
    } else if (match.status && match.status.toLowerCase().includes('complete')) {
        status = 'final';
    }

    return {
        id: match.id,
        homeTeam,
        awayTeam,
        name: match.name,
        matchType: match.matchType,
        status,
        venue: match.venue || 'TBD',
        date: match.date,
        startTime: new Date(match.dateTimeGMT).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
};

// MLS Controller
export const getMLSGames = async (req, res) => {
    try {
        const { date } = req.params;
        const cacheKey = `mls_${date}`;

        const cachedData = getCache(cacheKey);
        if (cachedData) {
            return res.json({ success: true, data: cachedData, cached: true });
        }

        const formattedDate = date.replace(/-/g, '');
        const response = await axios.get(
            `${ESPN_API_BASE}/soccer/usa.1/scoreboard?dates=${formattedDate}`,
            { timeout: 10000 }
        );

        let games = [];
        if (response.data && response.data.events) {
            games = response.data.events.map((event) => transformESPNGame(event, 'mls'));
        }

        setCache(cacheKey, games, 300);

        res.json({ success: true, data: games, cached: false });
    } catch (error) {
        console.error('MLS API Error:', error.message);
        res.status(500).json({ success: false, error: error.message, data: [] });
    }
};

// NHL Controller
export const getNHLGames = async (req, res) => {
    try {
        const { date } = req.params;
        const cacheKey = `nhl_${date}`;

        const cachedData = getCache(cacheKey);
        if (cachedData) {
            return res.json({ success: true, data: cachedData, cached: true });
        }

        const formattedDate = date.replace(/-/g, '');
        const response = await axios.get(
            `${ESPN_API_BASE}/hockey/nhl/scoreboard?dates=${formattedDate}`,
            { timeout: 10000 }
        );

        let games = [];
        if (response.data && response.data.events) {
            games = response.data.events.map((event) => transformESPNGame(event, 'nhl'));
        }

        setCache(cacheKey, games, 300);

        res.json({ success: true, data: games, cached: false });
    } catch (error) {
        console.error('NHL API Error:', error.message);
        res.status(500).json({ success: false, error: error.message, data: [] });
    }
};

// NBA Controller
export const getNBAGames = async (req, res) => {
    try {
        const { date } = req.params;
        const cacheKey = `nba_${date}`;

        const cachedData = getCache(cacheKey);
        if (cachedData) {
            return res.json({ success: true, data: cachedData, cached: true });
        }

        const formattedDate = date.replace(/-/g, '');
        const response = await axios.get(
            `${ESPN_API_BASE}/basketball/nba/scoreboard?dates=${formattedDate}`,
            { timeout: 10000 }
        );

        let games = [];
        if (response.data && response.data.events) {
            games = response.data.events.map((event) => transformESPNGame(event, 'nba'));
        }

        setCache(cacheKey, games, 300);

        res.json({ success: true, data: games, cached: false });
    } catch (error) {
        console.error('NBA API Error:', error.message);
        res.status(500).json({ success: false, error: error.message, data: [] });
    }
};

// Football Controller
export const getFootballGames = async (req, res) => {
    try {
        const { date } = req.params;
        const cacheKey = `football_${date}`;

        const cachedData = getCache(cacheKey);
        if (cachedData) {
            return res.json({ success: true, data: cachedData, cached: true });
        }

        const formattedDate = date.replace(/-/g, '');
        const response = await axios.get(
            `${ESPN_API_BASE}/soccer/eng.1/scoreboard?dates=${formattedDate}`,
            { timeout: 10000 }
        );

        let games = [];
        if (response.data && response.data.events) {
            games = response.data.events.map((event) => transformESPNGame(event, 'football'));
        }

        setCache(cacheKey, games, 300);

        res.json({ success: true, data: games, cached: false });
    } catch (error) {
        console.error('Football API Error:', error.message);
        res.status(500).json({ success: false, error: error.message, data: [] });
    }
};

// Generic ESPN Game Transformer
const transformESPNGame = (event, sport) => {
    const competition = event.competitions[0];
    const homeTeam = competition.competitors.find((c) => c.homeAway === 'home');
    const awayTeam = competition.competitors.find((c) => c.homeAway === 'away');

    let status = 'scheduled';
    if (event.status.type.state === 'in') {
        status = 'live';
    } else if (event.status.type.state === 'post') {
        status = 'final';
    }

    return {
        id: event.id,
        homeTeam: {
            name: homeTeam.team.displayName,
            abbr: homeTeam.team.abbreviation,
            logo: homeTeam.team.logo,
            score: parseInt(homeTeam.score) || 0,
        },
        awayTeam: {
            name: awayTeam.team.displayName,
            abbr: awayTeam.team.abbreviation,
            logo: awayTeam.team.logo,
            score: parseInt(awayTeam.score) || 0,
        },
        status,
        startTime: new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date(event.date).toLocaleDateString(),
        venue: competition.venue?.fullName || 'TBD',
        period: event.status.period || 0,
        clock: event.status.displayClock || '',
    };
};

// API Status Controller
export const getAPIStatus = async (req, res) => {
    const status = {
        mlb: 'Unknown',
        cricket: 'Unknown',
        mls: 'Unknown',
        nhl: 'Unknown',
        nba: 'Unknown',
        football: 'Unknown',
    };

    // Test each API with timeout
    const testAPI = async (name, testFn) => {
        try {
            await testFn();
            status[name] = 'Working';
        } catch (error) {
            console.error(`${name.toUpperCase()} API test failed:`, error.message);
            status[name] = 'Error';
        }
    };

    await Promise.all([
        testAPI('mlb', () => axios.get(`${MLB_API_BASE}/schedule?sportId=1`, { timeout: 5000 })),
        testAPI('cricket', () =>
            axios.get(CRICKET_API_URL, {
                params: { apikey: process.env.CRICKET_API_KEY, offset: 0 },
                timeout: 5000,
            })
        ),
        testAPI('mls', () =>
            axios.get(`${ESPN_API_BASE}/soccer/usa.1/scoreboard`, { timeout: 5000 })
        ),
        testAPI('nhl', () =>
            axios.get(`${ESPN_API_BASE}/hockey/nhl/scoreboard`, { timeout: 5000 })
        ),
        testAPI('nba', () =>
            axios.get(`${ESPN_API_BASE}/basketball/nba/scoreboard`, { timeout: 5000 })
        ),
        testAPI('football', () =>
            axios.get(`${ESPN_API_BASE}/soccer/eng.1/scoreboard`, { timeout: 5000 })
        ),
    ]);

    res.json({ success: true, status });
};
