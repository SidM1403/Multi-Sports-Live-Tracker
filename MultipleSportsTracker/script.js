// Data Structures for DSA Project
class GameNode {
  constructor(game) {
    this.game = game
    this.next = null
  }
}

class GameLinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  add(game) {
    const newNode = new GameNode(game)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  toArray() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.game)
      current = current.next
    }
    return result
  }

  clear() {
    this.head = null
    this.size = 0
  }
}

class GameHashMap {
  constructor() {
    this.buckets = new Array(50)
    this.size = 0
  }

  hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.buckets.length
    }
    return hash
  }

  set(key, value) {
    const index = this.hash(key)
    if (!this.buckets[index]) {
      this.buckets[index] = []
    }

    const bucket = this.buckets[index]
    const existingPair = bucket.find((pair) => pair[0] === key)

    if (existingPair) {
      existingPair[1] = value
    } else {
      bucket.push([key, value])
      this.size++
    }
  }

  get(key) {
    const index = this.hash(key)
    const bucket = this.buckets[index]
    if (bucket) {
      const pair = bucket.find((pair) => pair[0] === key)
      return pair ? pair[1] : undefined
    }
    return undefined
  }
}

// Trie Node for search functionality
class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
    this.words = new Set() // Store full words that pass through this node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let current = this.root
    const lowerCaseWord = word.toLowerCase()
    for (let i = 0; i < lowerCaseWord.length; i++) {
      const char = lowerCaseWord[i]
      if (!current.children[char]) {
        current.children[char] = new TrieNode()
      }
      current = current.children[char]
      current.words.add(word) // Add the original word to all nodes it passes through
    }
    current.isEndOfWord = true
  }

  search(prefix) {
    let current = this.root
    const lowerCasePrefix = prefix.toLowerCase()
    for (let i = 0; i < lowerCasePrefix.length; i++) {
      const char = lowerCasePrefix[i]
      if (!current.children[char]) {
        return new Set() // No words with this prefix
      }
      current = current.children[char]
    }
    return current.words // Return all words that have this prefix
  }

  getSuggestions(prefix) {
    let current = this.root
    const lowerCasePrefix = prefix.toLowerCase()
    for (let i = 0; i < lowerCasePrefix.length; i++) {
      const char = lowerCasePrefix[i]
      if (!current.children[char]) {
        return []
      }
      current = current.children[char]
    }

    const suggestions = []
    this._collectWords(current, suggestions)
    return suggestions
  }

  _collectWords(node, suggestions) {
    if (node.isEndOfWord) {
      // This is a simplified approach. In a real scenario, you'd reconstruct the word
      // or store the full word at the end node. For auto-completion, we can just
      // return the words collected in the `words` set of the current node.
      // However, for `getSuggestions`, we want actual words.
      // A better Trie would store the word at `isEndOfWord` or reconstruct it.
      // For now, we'll use the `words` set from the search method.
      // Let's refine `getSuggestions` to use the `words` set from the search method.
    }
    // The `search` method already returns the set of words.
    // So, `getSuggestions` can just call `search` and convert the set to an array.
  }
}

// Team Logos and Flags Mapping
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
  FLA: "https://www.mlbstatic.com/team-logos/146.svg",
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
}

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
  Kenya: "🇰🇪",
  Uganda: "🇺🇬",
  Namibia: "🇳🇦",
  "Papua New Guinea": "🇵🇬",
  "Hong Kong": "🇭🇰",
  Malaysia: "🇲🇾",
  Singapore: "🇸🇬",
  Thailand: "🇹🇭",
  Bermuda: "🇧🇲",
  Jersey: "🇯🇪",
  Guernsey: "🇬🇬",
}

const MLS_TEAM_LOGOS = {
  ATL: "https://a.espncdn.com/i/teamlogos/soccer/500/20000.png", // Atlanta United FC
  ATX: "https://a.espncdn.com/i/teamlogos/soccer/500/20001.png", // Austin FC
  CLT: "https://a.espncdn.com/i/teamlogos/soccer/500/20002.png", // Charlotte FC
  CHI: "https://a.espncdn.com/i/teamlogos/soccer/500/199.png", // Chicago Fire FC
  CIN: "https://a.espncdn.com/i/teamlogos/soccer/500/19999.png", // FC Cincinnati
  COL: "https://a.espncdn.com/i/teamlogos/soccer/500/200.png", // Colorado Rapids
  CLB: "https://a.espncdn.com/i/teamlogos/soccer/500/201.png", // Columbus Crew
  DAL: "https://a.espncdn.com/i/teamlogos/soccer/500/202.png", // FC Dallas
  DC: "https://a.espncdn.com/i/teamlogos/soccer/500/203.png", // D.C. United
  HOU: "https://a.espncdn.com/i/teamlogos/soccer/500/204.png", // Houston Dynamo FC
  KC: "https://a.espncdn.com/i/teamlogos/soccer/500/205.png", // Sporting Kansas City
  LA: "https://a.espncdn.com/i/teamlogos/soccer/500/206.png", // LA Galaxy
  LAFC: "https://a.espncdn.com/i/teamlogos/soccer/500/19998.png", // Los Angeles FC
  MIA: "https://a.espncdn.com/i/teamlogos/soccer/500/19997.png", // Inter Miami CF
  MIN: "https://a.espncdn.com/i/teamlogos/soccer/500/19996.png", // Minnesota United FC
  MTL: "https://a.espncdn.com/i/teamlogos/soccer/500/207.png", // CF Montréal
  NSH: "https://a.espncdn.com/i/teamlogos/soccer/500/19995.png", // Nashville SC
  NE: "https://a.espncdn.com/i/teamlogos/soccer/500/208.png", // New England Revolution
  NYC: "https://a.espncdn.com/i/teamlogos/soccer/500/19994.png", // New York City FC
  NYRB: "https://a.espncdn.com/i/teamlogos/soccer/500/209.png", // New York Red Bulls
  ORL: "https://a.espncdn.com/i/teamlogos/soccer/500/19993.png", // Orlando City SC
  PHI: "https://a.espncdn.com/i/teamlogos/soccer/500/210.png", // Philadelphia Union
  POR: "https://a.espncdn.com/i/teamlogos/soccer/500/211.png", // Portland Timbers
  RSL: "https://a.espncdn.com/i/teamlogos/soccer/500/212.png", // Real Salt Lake
  SJ: "https://a.espncdn.com/i/teamlogos/soccer/500/213.png", // San Jose Earthquakes
  SEA: "https://a.espncdn.com/i/teamlogos/soccer/500/214.png", // Seattle Sounders FC
  STL: "https://a.espncdn.com/i/teamlogos/soccer/500/20003.png", // St. Louis City SC
  TOR: "https://a.espncdn.com/i/teamlogos/soccer/500/215.png", // Toronto FC
  VAN: "https://a.espncdn.com/i/teamlogos/soccer/500/216.png", // Vancouver Whitecaps FC
}

const NHL_TEAM_LOGOS = {
  ANA: "https://a.espncdn.com/i/teamlogos/nhl/500/ana.png", // Anaheim Ducks
  ARI: "https://a.espncdn.com/i/teamlogos/nhl/500/ari.png", // Arizona Coyotes
  BOS: "https://a.espncdn.com/i/teamlogos/nhl/500/bos.png", // Boston Bruins
  BUF: "https://a.espncdn.com/i/teamlogos/nhl/500/buf.png", // Buffalo Sabres
  CGY: "https://a.espncdn.com/i/teamlogos/nhl/500/cgy.png", // Calgary Flames
  CAR: "https://a.espncdn.com/i/teamlogos/nhl/500/car.png", // Carolina Hurricanes
  CHI: "https://a.espncdn.com/i/teamlogos/nhl/500/chi.png", // Chicago Blackhawks
  COL: "https://a.espncdn.com/i/teamlogos/nhl/500/col.png", // Colorado Avalanche
  CBJ: "https://a.espncdn.com/i/teamlogos/nhl/500/cbj.png", // Columbus Blue Jackets
  DAL: "https://a.espncdn.com/i/teamlogos/nhl/500/dal.png", // Dallas Stars
  DET: "https://a.espncdn.com/i/teamlogos/nhl/500/det.png", // Detroit Red Wings
  EDM: "https://a.espncdn.com/i/teamlogos/nhl/500/edm.png", // Edmonton Oilers
  FLA: "https://a.espncdn.com/i/teamlogos/nhl/500/fla.png", // Florida Panthers
  LAK: "https://a.espncdn.com/i/teamlogos/nhl/500/lak.png", // Los Angeles Kings
  MIN: "https://a.espncdn.com/i/teamlogos/nhl/500/min.png", // Minnesota Wild
  MTL: "https://a.espncdn.com/i/teamlogos/nhl/500/mtl.png", // Montreal Canadiens
  NSH: "https://a.espncdn.com/i/teamlogos/nhl/500/nsh.png", // Nashville Predators
  NJD: "https://a.espncdn.com/i/teamlogos/nhl/500/njd.png", // New Jersey Devils
  NYI: "https://a.espncdn.com/i/teamlogos/nhl/500/nyi.png", // New York Islanders
  NYR: "https://a.espncdn.com/i/teamlogos/nhl/500/nyr.png", // New York Rangers
  OTT: "https://a.espncdn.com/i/teamlogos/nhl/500/ott.png", // Ottawa Senators
  PHI: "https://a.espncdn.com/i/teamlogos/nhl/500/phi.png", // Philadelphia Flyers
  PIT: "https://a.espncdn.com/i/teamlogos/nhl/500/pit.png", // Pittsburgh Penguins
  SJS: "https://a.espncdn.com/i/teamlogos/nhl/500/sjs.png", // San Jose Sharks
  STL: "https://a.espncdn.com/i/teamlogos/nhl/500/stl.png", // St. Louis Blues
  TBL: "https://a.espncdn.com/i/teamlogos/nhl/500/tbl.png", // Tampa Bay Lightning
  TOR: "https://a.espncdn.com/i/teamlogos/nhl/500/tor.png", // Toronto Maple Leafs
  VAN: "https://a.espncdn.com/i/teamlogos/nhl/500/van.png", // Vancouver Canucks
  VGK: "https://a.espncdn.com/i/teamlogos/nhl/500/vgk.png", // Vegas Golden Knights
  WSH: "https://a.espncdn.com/i/teamlogos/nhl/500/wsh.png", // Washington Capitals
  WPG: "https://a.espncdn.com/i/teamlogos/nhl/500/wpg.png", // Winnipeg Jets
  SEA: "https://a.espncdn.com/i/teamlogos/nhl/500/sea.png", // Seattle Kraken
}

const NBA_TEAM_LOGOS = {
  ATL: "https://a.espncdn.com/i/teamlogos/nba/500/atl.png", // Atlanta Hawks
  BOS: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png", // Boston Celtics
  BKN: "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png", // Brooklyn Nets
  CHA: "https://a.espncdn.com/i/teamlogos/nba/500/cha.png", // Charlotte Hornets
  CHI: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png", // Chicago Bulls
  CLE: "https://a.espncdn.com/i/teamlogos/nba/500/cle.png", // Cleveland Cavaliers
  DAL: "https://a.espncdn.com/i/teamlogos/nba/500/dal.png", // Dallas Mavericks
  DEN: "https://a.espncdn.com/i/teamlogos/nba/500/den.png", // Denver Nuggets
  DET: "https://a.espncdn.com/i/teamlogos/nba/500/det.png", // Detroit Pistons
  GSW: "https://a.espncdn.com/i/teamlogos/nba/500/gsw.png", // Golden State Warriors
  HOU: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png", // Houston Rockets
  IND: "https://a.espncdn.com/i/teamlogos/nba/500/ind.png", // Indiana Pacers
  LAC: "https://a.espncdn.com/i/teamlogos/nba/500/lac.png", // Los Angeles Clippers
  LAL: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png", // Los Angeles Lakers
  MEM: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png", // Memphis Grizzlies
  MIA: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png", // Miami Heat
  MIL: "https://a.espncdn.com/i/teamlogos/nba/500/mil.png", // Milwaukee Bucks
  MIN: "https://a.espncdn.com/i/teamlogos/nba/500/min.png", // Minnesota Timberwolves
  NOP: "https://a.espncdn.com/i/teamlogos/nba/500/nop.png", // New Orleans Pelicans
  NYK: "https://a.espncdn.com/i/teamlogos/nba/500/nyk.png", // New York Knicks
  OKC: "https://a.espncdn.com/i/teamlogos/nba/500/okc.png", // Oklahoma City Thunder
  ORL: "https://a.espncdn.com/i/teamlogos/nba/500/orl.png", // Orlando Magic
  PHI: "https://a.espncdn.com/i/teamlogos/nba/500/phi.png", // Philadelphia 76ers
  PHX: "https://a.espncdn.com/i/teamlogos/nba/500/phx.png", // Phoenix Suns
  POR: "https://a.espncdn.com/i/teamlogos/nba/500/por.png", // Portland Trail Blazers
  SAC: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png", // Sacramento Kings
  SAS: "https://a.espncdn.com/i/teamlogos/nba/500/sas.png", // San Antonio Spurs
  TOR: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png", // Toronto Raptors
  UTA: "https://a.espncdn.com/i/teamlogos/nba/500/uta.png", // Utah Jazz
  WAS: "https://a.espncdn.com/i/teamlogos/nba/500/was.png", // Washington Wizards
}

// Global variables
const allGames = new GameLinkedList()
let gameHashMap = new GameHashMap()
let filteredGames = []
let currentFilter = "all"
let currentDate = new Date().toISOString().split("T")[0]
let currentSport = "mlb"
const apiStatus = {
  mlb: "Unknown",
  cricket: "Unknown",
  mls: "Unknown",
  nhl: "Unknown",
  nba: "Unknown",
  football: "Unknown",
}

let currentCricketDate = new Date().toISOString().split("T")[0]

// Cricket specific variables
let allCricketMatches = []
let filteredCricketMatches = []
let currentCricketFilter = "all"

// MLS specific variables
let allMLSGames = []
let filteredMLSGames = []
let currentMLSFilter = "all"
let currentMLSDate = new Date().toISOString().split("T")[0]

// NHL specific variables
let allNHLGames = []
let filteredNHLGames = []
let currentNHLFilter = "all"
let currentNHLDate = new Date().toISOString().split("T")[0]

// NBA specific variables
let allNBAGames = []
let filteredNBAGames = []
let currentNBAFilter = "all"
let currentNBADate = new Date().toISOString().split("T")[0]

// Football specific variables
let allFootballGames = []
let filteredFootballGames = []
let currentFootballFilter = "all"
let currentFootballDate = new Date().toISOString().split("T")[0]

// Initialize Trie for MLB search
const mlbTrie = new Trie()

// API configurations
const CRICKET_API_KEY = "b7843604-baad-403e-9cde-887bfd0d938a" // <--- REPLACE THIS WITH YOUR NEW API KEY
const CRICKET_API_URL = "https://api.cricapi.com/v1/currentMatches"
const MLB_API_BASE = "https://statsapi.mlb.com/api/v1"
const ESPN_API_BASE = "https://site.api.espn.com/apis/site/v2/sports"

// Helper functions for logos and flags
function getMLBTeamLogo(teamAbbr) {
  return MLB_TEAM_LOGOS[teamAbbr] || `https://www.mlbstatic.com/team-logos/league-on-dark/1.svg`
}

function getMLSTeamLogo(teamAbbr) {
  return MLS_TEAM_LOGOS[teamAbbr] || `https://a.espncdn.com/i/teamlogos/soccer/500/default.png`
}

function getNHLTeamLogo(teamAbbr) {
  return NHL_TEAM_LOGOS[teamAbbr] || `https://a.espncdn.com/i/teamlogos/nhl/500/default.png`
}

function getNBATeamLogo(teamAbbr) {
  return NBA_TEAM_LOGOS[teamAbbr] || `https://a.espncdn.com/i/teamlogos/nba/500/default.png`
}

function getFootballTeamLogo(teamLogoUrl, teamAbbr) {
  return teamLogoUrl || `https://a.espncdn.com/i/teamlogos/soccer/500/default.png`
}

function getCricketCountryFlag(countryName) {
  // Handle common variations in country names
  const normalizedName = countryName.replace(/\s+/g, " ").trim()

  // Check for exact match first
  if (CRICKET_COUNTRY_FLAGS[normalizedName]) {
    return CRICKET_COUNTRY_FLAGS[normalizedName]
  }

  // Check for partial matches
  for (const [country, flag] of Object.entries(CRICKET_COUNTRY_FLAGS)) {
    if (
      normalizedName.toLowerCase().includes(country.toLowerCase()) ||
      country.toLowerCase().includes(normalizedName.toLowerCase())
    ) {
      return flag
    }
  }

  // Default cricket ball emoji if no flag found
  return "🏏"
}

// Sport switching functionality
function switchSport(sport) {
  // Update active tab
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-sport="${sport}"]`).classList.add("active")

  // Hide all sections
  document.querySelectorAll(".sport-section").forEach((section) => section.classList.remove("active"))

  // Show selected section
  document.getElementById(`${sport}-section`).classList.add("active")

  // Update theme
  document.body.className = ""
  if (sport === "cricket") {
    document.body.classList.add("cricket-theme")
  } else if (sport === "mls") {
    document.body.classList.add("mls-theme")
  } else if (sport === "nhl") {
    document.body.classList.add("nhl-theme")
  } else if (sport === "nba") {
    document.body.classList.add("nba-theme")
  } else if (sport === "football") {
    document.body.classList.add("football-theme")
  }

  // Update header
  const headerTitle = document.getElementById("headerTitle")
  const headerSubtitle = document.getElementById("headerSubtitle")

  switch (sport) {
    case "cricket":
      headerTitle.textContent = "🏏 Cricket Live Tracker"
      headerSubtitle.textContent = "Real-time cricket match updates and scores"
      break
    case "mls":
      headerTitle.textContent = "⚽ MLS Live Tracker"
      headerSubtitle.textContent = "Real-time Major League Soccer updates and scores"
      break
    case "nhl":
      headerTitle.textContent = "🏒 NHL Live Tracker"
      headerSubtitle.textContent = "Real-time National Hockey League updates and scores"
      break
    case "nba":
      headerTitle.textContent = "🏀 NBA Live Tracker"
      headerSubtitle.textContent = "Real-time National Basketball Association updates and scores"
      break
    case "football":
      headerTitle.textContent = "⚽ Football Live Tracker"
      headerSubtitle.textContent = "Real-time European Football updates and scores"
      break
    case "mlb":
    default:
      headerTitle.textContent = "⚾ Enhanced MLB Tracker"
      headerSubtitle.textContent = "Real-time and Historical Major League Baseball scores"
      break
  }

  currentSport = sport
  refreshCurrentSport()
}

function refreshCurrentSport() {
  switch (currentSport) {
    case "mlb":
      loadGames()
      break
    case "cricket":
      fetchCricketMatches()
      break
    case "mls":
      loadMLSGames()
      break
    case "nhl":
      loadNHLGames()
      break
    case "nba":
      loadNBAGames()
      break
    case "football":
      loadFootballGames()
      break
  }
}

function updateApiStatus() {
  const statusElement = document.getElementById("apiStatus")
  const statuses = Object.values(apiStatus)
  const workingCount = statuses.filter((status) => status.startsWith("Working")).length
  statusElement.textContent = `APIs: ${workingCount}/6 Working` // Updated for 6 sports

  if (workingCount === 6) {
    statusElement.style.background = "rgba(76, 175, 80, 0.3)"
  } else if (workingCount > 0) {
    statusElement.style.background = "rgba(255, 193, 7, 0.3)"
  } else {
    statusElement.style.background = "rgba(244, 67, 54, 0.3)"
  }
}

// Sorting Algorithms
function quickSort(arr, compareFunc) {
  if (arr.length <= 1) return arr

  const pivot = arr[Math.floor(arr.length / 2)]
  const left = arr.filter((item) => compareFunc(item, pivot) < 0)
  const middle = arr.filter((item) => compareFunc(item, pivot) === 0)
  const right = arr.filter((item) => compareFunc(item, pivot) > 0)

  return [...quickSort(left, compareFunc), ...middle, ...quickSort(right, compareFunc)]
}

function mergeSort(arr, compareFunc) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid), compareFunc)
  const right = mergeSort(arr.slice(mid), compareFunc)

  return merge(left, right, compareFunc)
}

function merge(left, right, compareFunc) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compareFunc(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// MLB Functions with Real API
async function fetchMLBGamesByDate(dateStr) {
  try {
    console.log(`Fetching MLB games for date: ${dateStr}`)
    const response = await fetch(`${MLB_API_BASE}/schedule?sportId=1&date=${dateStr}&hydrate=team,linescore,decisions`)

    if (!response.ok) {
      throw new Error(`MLB API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("MLB API Response:", data)

    if (data.dates && data.dates.length > 0 && data.dates[0].games) {
      apiStatus.mlb = "Working"
      const games = data.dates[0].games.map((game) => {
        return transformMLBGame(game)
      })
      return games
    } else {
      console.log("No MLB games found for this date")
      apiStatus.mlb = "Working (No Data)"
      return []
    }
  } catch (error) {
    console.error("Error fetching MLB data:", error)
    apiStatus.mlb = "Error"
    return []
  }
}

function transformMLBGame(apiGame) {
  const homeTeam = {
    name: apiGame.teams.home.team.teamName || apiGame.teams.home.team.name,
    abbr: apiGame.teams.home.team.abbreviation,
    city: apiGame.teams.home.team.locationName,
    logo: getMLBTeamLogo(apiGame.teams.home.team.abbreviation),
  }

  const awayTeam = {
    name: apiGame.teams.away.team.teamName || apiGame.teams.away.team.name,
    abbr: apiGame.teams.away.team.abbreviation,
    city: apiGame.teams.away.team.locationName,
    logo: getMLBTeamLogo(apiGame.teams.away.team.abbreviation),
  }

  // Determine game status
  let status = "scheduled"
  if (apiGame.status.detailedState) {
    const state = apiGame.status.detailedState.toLowerCase()
    if (state.includes("live") || state.includes("progress") || apiGame.status.statusCode === "I") {
      status = "live"
    } else if (state.includes("final") || apiGame.status.statusCode === "F") {
      status = "final"
    } else if (state.includes("postponed") || state.includes("suspended")) {
      status = "postponed"
    }
  }

  // Get scores
  const homeRuns = apiGame.teams.home.score || 0
  const awayRuns = apiGame.teams.away.score || 0

  // Get hits and errors from linescore if available, otherwise from teams
  let homeHits = 0
  let awayHits = 0
  let homeErrors = 0
  let awayErrors = 0

  if (apiGame.linescore) {
    homeHits = apiGame.linescore.teams?.home?.hits || apiGame.teams.home.hits || 0
    awayHits = apiGame.linescore.teams?.away?.hits || apiGame.teams.away.hits || 0
    homeErrors = apiGame.linescore.teams?.home?.errors || apiGame.teams.home.errors || 0
    awayErrors = apiGame.linescore.teams?.away?.errors || apiGame.teams.away.errors || 0
  } else {
    homeHits = apiGame.teams.home.hits || 0
    awayHits = apiGame.teams.away.hits || 0
    homeErrors = apiGame.teams.home.errors || 0
    awayErrors = apiGame.teams.away.errors || 0
  }

  // Get inning info
  let inning = 9
  let isTopInning = false
  if (apiGame.linescore && apiGame.linescore.currentInning) {
    inning = apiGame.linescore.currentInning
    isTopInning = apiGame.linescore.isTopInning || false
  }

  // Get line scores
  const homeLineScore = []
  const awayLineScore = []
  if (apiGame.linescore && apiGame.linescore.innings) {
    apiGame.linescore.innings.forEach((inningData) => {
      homeLineScore.push(inningData.home ? inningData.home.runs || 0 : 0)
      awayLineScore.push(inningData.away ? inningData.away.runs || 0 : 0)
    })
  }

  // Pad line scores to at least 9 innings
  while (homeLineScore.length < 9) homeLineScore.push(0)
  while (awayLineScore.length < 9) awayLineScore.push(0)

  return {
    id: apiGame.gamePk.toString(),
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    homeRuns: homeRuns,
    awayRuns: awayRuns,
    homeHits: homeHits,
    awayHits: awayHits,
    homeErrors: homeErrors,
    awayErrors: awayErrors,
    status: status,
    inning: inning,
    isTopInning: isTopInning,
    homeLineScore: homeLineScore,
    awayLineScore: awayLineScore,
    startTime:
      status === "scheduled"
        ? new Date(apiGame.gameDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : "Started",
    date: new Date(apiGame.gameDate).toLocaleDateString(),
    venue: apiGame.venue ? apiGame.venue.name : "TBD",
    weather: status === "postponed" ? "Weather/Other" : "Clear",
    gameDate: apiGame.gameDate,
  }
}

async function loadDateGames(period) {
  const today = new Date()
  let targetDate

  switch (period) {
    case "yesterday":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() - 1)
      break
    case "today":
      targetDate = today
      break
    case "tomorrow":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() + 1)
      break
    default:
      targetDate = today
  }

  currentDate = targetDate.toISOString().split("T")[0]

  document.querySelectorAll("#mlb-section .date-btn").forEach((btn) => btn.classList.remove("active"))
  const clickedButton = event.target
  if (clickedButton && clickedButton.classList.contains("date-btn")) {
    clickedButton.classList.add("active")
  }

  await loadGames()
}

async function loadCustomDate() {
  const customDateInput = document.getElementById("customDate")
  if (customDateInput.value) {
    currentDate = customDateInput.value
    document.querySelectorAll("#mlb-section .date-btn").forEach((btn) => btn.classList.remove("active"))
    await loadGames()
  }
}

async function loadGames() {
  try {
    document.getElementById("mlbGamesContainer").innerHTML = '<div class="loading">Loading MLB games...</div>'

    const games = await fetchMLBGamesByDate(currentDate)

    allGames.clear()
    gameHashMap = new GameHashMap()
    mlbTrie.root = new TrieNode() // Clear and re-initialize Trie

    games.forEach((game) => {
      allGames.add(game)
      gameHashMap.set(game.id.toString(), game)
      // Populate Trie with team names and abbreviations
      mlbTrie.insert(game.homeTeam.name)
      mlbTrie.insert(game.homeTeam.abbr)
      mlbTrie.insert(game.homeTeam.city)
      mlbTrie.insert(game.awayTeam.name)
      mlbTrie.insert(game.awayTeam.abbr)
      mlbTrie.insert(game.awayTeam.city)
    })

    filteredGames = allGames.toArray()
    displayGames(filteredGames)
    updateStats()
    updateLastUpdated()
  } catch (error) {
    console.error("Error loading games:", error)
    document.getElementById("mlbGamesContainer").innerHTML =
      '<div class="error">Error loading MLB games. Please try again later.</div>'
  }
  updateApiStatus()
}

function generateLineScore(game) {
  const maxInnings = Math.max(9, game.homeLineScore.length, game.awayLineScore.length)
  let html = '<div class="score-grid-base mlb-line-score">'

  html += '<div class="line-score-header">Team</div>'
  for (let i = 1; i <= maxInnings; i++) {
    html += `<div class="line-score-header">${i}</div>`
  }
  html += '<div class="line-score-header">R</div>'
  html += '<div class="line-score-header">H</div>'
  html += '<div class="line-score-header">E</div>'

  html += `<div class="line-score-cell">${game.awayTeam.abbr}</div>`
  for (let i = 0; i < maxInnings; i++) {
    html += `<div class="line-score-cell">${game.awayLineScore[i] !== undefined ? game.awayLineScore[i] : "-"}</div>`
  }
  html += `<div class="line-score-cell">${game.awayRuns}</div>`
  html += `<div class="line-score-cell">${game.awayHits}</div>`
  html += `<div class="line-score-cell">${game.awayErrors}</div>`

  html += `<div class="line-score-cell">${game.homeTeam.abbr}</div>`
  for (let i = 0; i < maxInnings; i++) {
    html += `<div class="line-score-cell">${game.homeLineScore[i] !== undefined ? game.homeLineScore[i] : "-"}</div>`
  }
  html += `<div class="line-score-cell">${game.homeRuns}</div>`
  html += `<div class="line-score-cell">${game.homeHits}</div>`
  html += `<div class="line-score-cell">${game.homeErrors}</div>`

  html += "</div>"
  return html
}

function displayGames(games) {
  const container = document.getElementById("mlbGamesContainer")

  if (games.length === 0) {
    container.innerHTML = '<div class="no-games">No MLB games found for this date.</div>'
    return
  }

  container.innerHTML = games
    .map(
      (game) => `
  <div class="game-card">
      <div class="game-status status-${game.status}">
          ${game.status === "live" ? "● LIVE" : game.status.toUpperCase()}
      </div>
      <div class="teams">
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.awayTeam.logo}" alt="${game.awayTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.awayTeam.abbr}</div>'">
                  <div class="team-name">${game.awayTeam.city} ${game.awayTeam.name}</div>
              </div>
              <div class="team-score">${game.awayRuns}</div>
          </div>
          <div class="vs">@</div>
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.homeTeam.logo}" alt="${game.homeTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.homeTeam.abbr}</div>'">
                  <div class="team-name">${game.homeTeam.city} ${game.homeTeam.name}</div>
              </div>
              <div class="team-score">${game.homeRuns}</div>
          </div>
      </div>
      ${
        game.status === "live"
          ? `
          <div class="inning-info">
              <span>${game.isTopInning ? "Top" : "Bottom"} ${getOrdinalSuffix(game.inning)} Inning</span>
              <span>${game.venue}</span>
          </div>
      `
          : ""
      }
      ${game.status !== "scheduled" && game.status !== "postponed" ? generateLineScore(game) : ""}
      <div class="game-info">
          <span>${
            game.status === "live"
              ? `${game.isTopInning ? "Top" : "Bot"} ${game.inning}`
              : game.status === "scheduled"
                ? game.startTime
                : "Final"
          }</span>
          <span>${game.date}</span>
      </div>
      ${game.status === "postponed" ? `<div class="pitcher-info">Postponed - ${game.weather}</div>` : ""}
  </div>
`,
    )
    .join("")
}

function getOrdinalSuffix(num) {
  const j = num % 10
  const k = num % 100
  if (j == 1 && k != 11) return "st"
  if (j == 2 && k != 12) return "nd"
  if (j == 3 && k != 13) return "rd"
  return "th"
}

function filterGames(status) {
  currentFilter = status

  document.querySelectorAll("#mlb-section .btn").forEach((btn) => {
    if (!btn.textContent.includes("Sort")) {
      btn.classList.remove("active")
    }
  })

  const filterButtons = document.querySelectorAll("#mlb-section .btn")
  filterButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(status) || (status === "all" && btn.textContent === "All Games")) {
      btn.classList.add("active")
    }
  })

  const games = allGames.toArray()

  if (status === "all") {
    filteredGames = games
  } else {
    filteredGames = games.filter((game) => game.status === status)
  }

  displayGames(filteredGames)
  updateStats()
}

function sortGames(criteria, buttonElement) {
  let compareFunc

  if (criteria === "score") {
    // Sort by total combined score of both teams (highest first)
    compareFunc = (a, b) => {
      const aTotalScore = (a.homeRuns || 0) + (a.awayRuns || 0)
      const bTotalScore = (b.homeRuns || 0) + (b.awayRuns || 0)
      return bTotalScore - aTotalScore
    }
  } else if (criteria === "time") {
    compareFunc = (a, b) => {
      const statusOrder = { live: 0, scheduled: 1, final: 2, postponed: 3 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
  }

  if (criteria === "score") {
    filteredGames = quickSort([...filteredGames], compareFunc)
  } else {
    filteredGames = mergeSort([...filteredGames], compareFunc)
  }

  document.querySelectorAll("#mlb-section .btn").forEach((btn) => {
    if (btn.textContent.includes("Sort")) {
      btn.classList.remove("sort-active")
    }
  })

  if (buttonElement) {
    buttonElement.classList.add("sort-active")
  }

  displayGames(filteredGames)
}

function searchTeams(query) {
  const suggestionsDatalist = document.getElementById("mlb-team-suggestions")
  suggestionsDatalist.innerHTML = "" // Clear previous suggestions

  if (!query.trim()) {
    filteredGames = allGames.toArray()
    if (currentFilter !== "all") {
      filteredGames = filteredGames.filter((game) => game.status === currentFilter)
    }
  } else {
    const matchingTerms = mlbTrie.search(query)
    const uniqueGameIds = new Set()
    const gamesToFilter = allGames.toArray()

    filteredGames = gamesToFilter.filter((game) => {
      const homeTeamMatch =
        matchingTerms.has(game.homeTeam.name) ||
        matchingTerms.has(game.homeTeam.abbr) ||
        matchingTerms.has(game.homeTeam.city)
      const awayTeamMatch =
        matchingTerms.has(game.awayTeam.name) ||
        matchingTerms.has(game.awayTeam.abbr) ||
        matchingTerms.has(game.awayTeam.city)
      return homeTeamMatch || awayTeamMatch
    })

    // Populate suggestions for the datalist
    Array.from(matchingTerms).forEach((term) => {
      const option = document.createElement("option")
      option.value = term
      suggestionsDatalist.appendChild(option)
    })

    if (currentFilter !== "all") {
      filteredGames = filteredGames.filter((game) => game.status === currentFilter)
    }
  }

  displayGames(filteredGames)
  updateStats()
}

function updateStats() {
  const games = allGames.toArray()
  const liveGames = games.filter((game) => game.status === "live").length
  const finalGames = games.filter((game) => game.status === "final").length

  let totalRuns = 0
  let gameCount = 0

  games.forEach((game) => {
    if (game.status !== "scheduled" && game.status !== "postponed") {
      totalRuns += game.homeRuns + game.awayRuns
      gameCount++
    }
  })

  const avgRuns = gameCount > 0 ? Math.round((totalRuns / gameCount) * 10) / 10 : 0

  document.getElementById("totalGames").textContent = games.length
  document.getElementById("liveGames").textContent = liveGames
  document.getElementById("finalGames").textContent = finalGames
  document.getElementById("avgRuns").textContent = avgRuns
}

// Cricket Functions
async function fetchCricketMatches() {
  const loading = document.getElementById("loading")
  const error = document.getElementById("error")
  const matches = document.getElementById("cricketMatchesContainer")

  loading.style.display = "block"
  error.style.display = "none"
  matches.innerHTML = ""

  if (CRICKET_API_KEY === "YOUR_NEW_CRICKET_API_KEY_HERE" || !CRICKET_API_KEY) {
    console.warn("Cricket API Key is not set. Please replace 'YOUR_NEW_CRICKET_API_KEY_HERE' with your actual API key.")
    apiStatus.cricket = "Error: API Key Missing"
    error.textContent = "Cricket API Error: API Key is missing or invalid. Please update your API key in script.js."
    error.style.display = "block"
    displayCricketSampleData() // Show sample data if key is missing
    loading.style.display = "none"
    updateApiStatus()
    return
  }

  try {
    const response = await fetch(`${CRICKET_API_URL}?apikey=${CRICKET_API_KEY}&offset=0`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Cricket API Response:", data)

    if (data.status === "success" && data.data && data.data.length > 0) {
      apiStatus.cricket = "Working"
      allCricketMatches = data.data
      filteredCricketMatches = [...allCricketMatches]
      displayCricketMatches(filteredCricketMatches)
      updateCricketStats()
    } else {
      // If API returns success but no data, it might be valid but no current matches
      console.warn("Cricket API returned success but no current matches data:", data.reason)
      apiStatus.cricket = "Working (No Data)"
      error.textContent = data.reason || "No current cricket matches available via API."
      error.style.display = "block"
      allCricketMatches = [] // Clear previous data
      filteredCricketMatches = []
      displayCricketMatches([]) // Display empty state
      updateCricketStats()
    }

    updateLastUpdated()
  } catch (err) {
    console.error("Error fetching cricket matches:", err)
    apiStatus.cricket = "Error"
    error.textContent = `Cricket API Error: ${err.message}. Please check your API key and network connection.`
    error.style.display = "block"

    displayCricketSampleData()
  } finally {
    loading.style.display = "none"
    updateApiStatus()
  }
}

function displayCricketSampleData() {
  const sampleData = [
    {
      id: "1",
      name: "India vs Australia - 1st Test",
      matchType: "Test",
      status: "Live",
      venue: "Melbourne Cricket Ground",
      teams: ["India", "Australia"],
      score: [
        { r: 285, w: 7, o: "85.4" },
        { r: 312, w: 10, o: "95.2" },
      ],
      dateTimeGMT: new Date().toISOString(),
    },
    {
      id: "2",
      name: "England vs Pakistan - ODI",
      matchType: "ODI",
      status: "Scheduled",
      venue: "Lords Cricket Ground",
      teams: ["England", "Pakistan"],
      score: [],
      dateTimeGMT: new Date(Date.now() + 86400000).toISOString(),
    },
  ]

  allCricketMatches = sampleData
  filteredCricketMatches = [...allCricketMatches]
  displayCricketMatches(filteredCricketMatches)
  updateCricketStats()
}

function displayCricketMatches(matchesData) {
  const container = document.getElementById("cricketMatchesContainer")
  container.innerHTML = ""

  matchesData.forEach((match) => {
    const matchCard = createCricketCard(match)
    container.appendChild(matchCard)
  })

  if (matchesData.length === 0) {
    container.innerHTML = '<div class="no-games">No cricket matches available at the moment</div>'
  }
}

function createCricketCard(match) {
  const card = document.createElement("div")
  card.className = "game-card cricket-card"

  const isLive = match.status === "Live" || match.status === "Match in progress" || match.matchStarted === true
  const statusClass = isLive ? "live-indicator" : ""

  const teams = match.teams || [match.team1 || "Team 1", match.team2 || "Team 2"]

  const getTeamScore = (teamIndex) => {
    if (match.score && match.score.length > teamIndex) {
      const scoreData = match.score[teamIndex]
      if (scoreData && typeof scoreData === "object") {
        if (scoreData.r !== undefined && scoreData.w !== undefined) {
          const runs = scoreData.r || 0
          const wickets = scoreData.w || 0
          const overs = scoreData.o || "0"
          return `${runs}/${wickets} (${overs} ov)`
        }
      }
    }
    return "Yet to bat"
  }

  const matchTitle = match.name || `${teams[0]} vs ${teams[1]}`

  card.innerHTML = `
    <div class="match-header">
        <div class="match-title">${matchTitle}</div>
        <div class="match-status ${statusClass}">${match.status || "Scheduled"}</div>
    </div>
    
    <div class="teams">
        <div class="team">
            <div class="team-logo-container">
                <span class="country-flag">${getCricketCountryFlag(teams[0])}</span>
                <div class="team-name">${teams[0]}</div>
            </div>
            <div class="team-score" style="font-size: 1.2rem;">${getTeamScore(0)}</div>
        </div>
        
        <div class="vs">VS</div>
        
        <div class="team">
            <div class="team-logo-container">
                <span class="country-flag">${getCricketCountryFlag(teams[1])}</span>
                <div class="team-name">${teams[1]}</div>
            </div>
            <div class="team-score" style="font-size: 1.2rem;">${getTeamScore(1)}</div>
        </div>
    </div>
    
    <div class="match-details">
        <div class="detail-row">
            <span class="detail-label">Format:</span>
            <span class="detail-value">${match.matchType || "N/A"}</span>
        </div>
        <div class="detail-row">
            <span class="detail-label">Venue:</span>
            <span class="detail-value">${match.venue || "TBD"}</span>
        </div>
        ${
          match.dateTimeGMT
            ? `
        <div class="detail-row">
            <span class="detail-label">Date:</span>
            <span class="detail-value">${new Date(match.dateTimeGMT).toLocaleDateString()}</span>
        </div>
        `
            : ""
        }
    </div>
`

  return card
}

function filterCricketMatches(status) {
  currentCricketFilter = status

  // Update active button
  const cricketSection = document.getElementById("cricket-section")
  const buttons = cricketSection.querySelectorAll(".btn")
  buttons.forEach((btn) => {
    if (!btn.textContent.includes("Sort")) {
      btn.classList.remove("active")
    }
  })

  buttons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(status) || (status === "all" && btn.textContent === "All Matches")) {
      btn.classList.add("active")
    }
  })

  if (status === "all") {
    filteredCricketMatches = [...allCricketMatches]
  } else if (status === "live") {
    filteredCricketMatches = allCricketMatches.filter(
      (match) => match.status === "Live" || match.status === "Match in progress" || match.matchStarted === true,
    )
  } else if (status === "scheduled") {
    filteredCricketMatches = allCricketMatches.filter(
      (match) => match.status === "Scheduled" || match.status === "Match not started" || match.matchStarted === false,
    )
  } else if (status === "final") {
    // Added 'final' filter for cricket
    filteredCricketMatches = allCricketMatches.filter(
      (match) => match.status === "Match Ended" || match.status === "Finished" || match.status === "Final",
    )
  }

  displayCricketMatches(filteredCricketMatches)
  updateCricketStats()
}

function searchCricketTeams(query) {
  if (!query.trim()) {
    filteredCricketMatches = [...allCricketMatches]
    if (currentCricketFilter !== "all") {
      filterCricketMatches(currentCricketFilter)
      return
    }
  } else {
    filteredCricketMatches = allCricketMatches.filter((match) => {
      const teams = match.teams || ["", ""]
      const matchName = match.name || ""
      const venue = match.venue || ""

      return (
        teams.some((team) => team.toLowerCase().includes(query.toLowerCase())) ||
        matchName.toLowerCase().includes(query.toLowerCase()) ||
        venue.toLowerCase().includes(query.toLowerCase())
      )
    })

    if (currentCricketFilter !== "all") {
      if (currentCricketFilter === "live") {
        filteredCricketMatches = filteredCricketMatches.filter(
          (match) => match.status === "Live" || match.status === "Match in progress" || match.matchStarted === true,
        )
      } else if (currentCricketFilter === "scheduled") {
        filteredCricketMatches = filteredCricketMatches.filter(
          (match) =>
            match.status === "Scheduled" || match.status === "Match not started" || match.matchStarted === false,
        )
      } else if (currentCricketFilter === "final") {
        filteredCricketMatches = filteredCricketMatches.filter(
          (match) => match.status === "Match Ended" || match.status === "Finished" || match.status === "Final",
        )
      }
    }
  }

  displayCricketMatches(filteredCricketMatches)
  updateCricketStats()
}

function updateCricketStats() {
  const totalMatches = allCricketMatches.length
  const liveMatches = allCricketMatches.filter(
    (match) => match.status === "Live" || match.status === "Match in progress" || match.matchStarted === true,
  ).length
  const testMatches = allCricketMatches.filter((match) => match.matchType === "Test").length
  const limitedOversMatches = allCricketMatches.filter(
    (match) => match.matchType === "ODI" || match.matchType === "T20" || match.matchType === "T20I",
  ).length

  document.getElementById("totalCricketMatches").textContent = totalMatches
  document.getElementById("liveCricketMatches").textContent = liveMatches
  document.getElementById("testMatches").textContent = testMatches
  document.getElementById("odiMatches").textContent = limitedOversMatches
}

// Cricket Date Functions
async function loadCricketDateGames(period) {
  const today = new Date()
  let targetDate

  switch (period) {
    case "yesterday":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() - 1)
      break
    case "today":
      targetDate = today
      break
    case "tomorrow":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() + 1)
      break
    default:
      targetDate = today
  }

  currentCricketDate = targetDate.toISOString().split("T")[0]

  // Update active date button in cricket section
  const cricketSection = document.getElementById("cricket-section")
  cricketSection.querySelectorAll(".date-btn").forEach((btn) => btn.classList.remove("active"))
  // Find the button that triggered the event and add 'active' class
  const clickedButton = event.target
  if (clickedButton && clickedButton.classList.contains("date-btn")) {
    clickedButton.classList.add("active")
  }

  await fetchCricketMatchesByDate(currentCricketDate)
}

async function loadCustomCricketDate() {
  const customDateInput = document.getElementById("customCricketDate")
  if (customDateInput.value) {
    currentCricketDate = customDateInput.value

    // Update active date button in cricket section
    const cricketSection = document.getElementById("cricket-section")
    cricketSection.querySelectorAll(".date-btn").forEach((btn) => btn.classList.remove("active"))

    await fetchCricketMatchesByDate(currentCricketDate)
  }
}

async function fetchCricketMatchesByDate(dateStr) {
  const loading = document.getElementById("loading")
  const error = document.getElementById("error")
  const matches = document.getElementById("cricketMatchesContainer")

  loading.style.display = "block"
  error.style.display = "none"
  matches.innerHTML = ""

  if (CRICKET_API_KEY === "YOUR_NEW_CRICKET_API_KEY_HERE" || !CRICKET_API_KEY) {
    console.warn("Cricket API Key is not set. Please replace 'YOUR_NEW_CRICKET_API_KEY_HERE' with your actual API key.")
    apiStatus.cricket = "Error: API Key Missing"
    error.textContent = "Cricket API Error: API Key is missing or invalid. Please update your API key in script.js."
    error.style.display = "block"
    displayCricketSampleData() // Show sample data if key is missing
    loading.style.display = "none"
    updateApiStatus()
    return
  }

  try {
    // Try to fetch cricket matches for specific date
    const response = await fetch(`${CRICKET_API_URL}?apikey=${CRICKET_API_KEY}&offset=0`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("Cricket API Response:", data)

    if (data.status === "success" && data.data && data.data.length > 0) {
      apiStatus.cricket = "Working"

      // Filter matches by date if possible
      let filteredByDate = data.data
      // The CricAPI 'currentMatches' endpoint typically only provides live/recent matches.
      // It does not support historical date filtering directly.
      // If the requested date is not today, we'll show sample data as the API won't return historical data.
      if (dateStr !== new Date().toISOString().split("T")[0]) {
        console.warn(
          "CricAPI 'currentMatches' endpoint does not support historical date filtering. Displaying sample data for past/future dates.",
        )
        filteredByDate = generateSampleCricketMatches(dateStr)
      } else {
        // For today's date, filter actual API data by status if needed
        filteredByDate = data.data.filter((match) => {
          const matchDate = new Date(match.dateTimeGMT).toISOString().split("T")[0]
          return matchDate === dateStr
        })
        if (filteredByDate.length === 0) {
          console.warn("No current matches found for today's date from API.")
          error.textContent = "No current cricket matches found for today."
          error.style.display = "block"
        }
      }

      allCricketMatches = filteredByDate
      filteredCricketMatches = [...allCricketMatches]
      displayCricketMatches(filteredCricketMatches)
      updateCricketStats()
    } else {
      console.warn("Cricket API returned success but no data or reason:", data.reason)
      throw new Error(data.reason || "No cricket data available")
    }

    updateLastUpdated()
  } catch (err) {
    console.error("Error fetching cricket matches:", err)
    apiStatus.cricket = "Error"
    error.textContent = `Cricket API Error: ${err.message}. Displaying sample data.`
    error.style.display = "block"

    // Generate sample data for the requested date
    const sampleData = generateSampleCricketMatches(dateStr)
    allCricketMatches = sampleData
    filteredCricketMatches = [...allCricketMatches]
    displayCricketMatches(sampleData)
    updateCricketStats()
  } finally {
    loading.style.display = "none"
    updateApiStatus()
  }
}

function generateSampleCricketMatches(dateStr) {
  const matches = []
  const matchTypes = ["Test", "ODI", "T20", "T20I"]
  const statuses = ["Live", "Scheduled", "Final"]
  const gameDate = new Date(dateStr)
  const today = new Date()

  // Adjust statuses based on date
  let availableStatuses
  if (gameDate < today && gameDate.toDateString() !== today.toDateString()) {
    availableStatuses = ["Final"]
  } else if (gameDate.toDateString() === today.toDateString()) {
    availableStatuses = ["Live", "Final", "Scheduled"]
  } else {
    availableStatuses = ["Scheduled"]
  }

  const cricketTeams = [
    "India",
    "Australia",
    "England",
    "Pakistan",
    "South Africa",
    "New Zealand",
    "West Indies",
    "Sri Lanka",
    "Bangladesh",
    "Afghanistan",
  ]

  for (let i = 0; i < 8; i++) {
    const team1 = cricketTeams[Math.floor(Math.random() * cricketTeams.length)]
    let team2 = cricketTeams[Math.floor(Math.random() * cricketTeams.length)]

    while (team2 === team1) {
      team2 = cricketTeams[Math.floor(Math.random() * cricketTeams.length)]
    }

    const matchType = matchTypes[Math.floor(Math.random() * matchTypes.length)]
    const status = availableStatuses[Math.floor(Math.random() * availableStatuses.length)]

    const score =
      status !== "Scheduled"
        ? [
            {
              r: Math.floor(Math.random() * 400) + 100,
              w: Math.floor(Math.random() * 10),
              o: `${Math.floor(Math.random() * 50)}.${Math.floor(Math.random() * 6)}`,
            },
            status === "Final"
              ? {
                  r: Math.floor(Math.random() * 400) + 100,
                  w: Math.floor(Math.random() * 10),
                  o: `${Math.floor(Math.random() * 50)}.${Math.floor(Math.random() * 6)}`,
                }
              : null,
          ].filter(Boolean)
        : []

    matches.push({
      id: `${dateStr}-cricket-${i + 1}`,
      name: `${team1} vs ${team2} - ${matchType}`,
      matchType: matchType,
      status: status,
      venue: `${team1} Cricket Stadium`,
      teams: [team1, team2],
      score: score,
      dateTimeGMT: gameDate.toISOString(),
      matchStarted: status === "Live",
    })
  }

  return matches
}

function sortCricketMatches(criteria, buttonElement) {
  let compareFunc

  if (criteria === "score") {
    // Sort by total combined score of both teams (highest first)
    compareFunc = (a, b) => {
      // Get team 1 score
      const aTeam1Score = a.score && a.score[0] ? a.score[0].r || 0 : 0
      // Get team 2 score
      const aTeam2Score = a.score && a.score[1] ? a.score[1].r || 0 : 0
      const aTotalScore = aTeam1Score + aTeam2Score

      // Get team 1 score
      const bTeam1Score = b.score && b.score[0] ? b.score[0].r || 0 : 0
      // Get team 2 score
      const bTeam2Score = b.score && b.score[1] ? b.score[1].r || 0 : 0
      const bTotalScore = bTeam1Score + bTeam2Score

      return bTotalScore - aTotalScore
    }
  } else if (criteria === "time") {
    compareFunc = (a, b) => {
      const statusOrder = { Live: 0, Scheduled: 1, Final: 2 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
  }

  if (criteria === "score") {
    filteredCricketMatches = quickSort([...filteredCricketMatches], compareFunc)
  } else {
    filteredCricketMatches = mergeSort([...filteredCricketMatches], compareFunc)
  }

  // Update sort button states in cricket section
  const cricketSection = document.getElementById("cricket-section")
  cricketSection.querySelectorAll(".btn").forEach((btn) => {
    if (btn.textContent.includes("Sort")) {
      btn.classList.remove("sort-active")
    }
  })

  if (buttonElement) {
    buttonElement.classList.add("sort-active")
  }

  displayCricketMatches(filteredCricketMatches)
}

// MLS Functions
async function fetchMLSGamesByDate(dateStr) {
  try {
    console.log(`Fetching MLS games for date: ${dateStr}`)
    const response = await fetch(`${ESPN_API_BASE}/soccer/usa.1/scoreboard?dates=${dateStr.replace(/-/g, "")}`)

    if (!response.ok) {
      throw new Error(`MLS API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("MLS API Response:", data)

    if (data.events && data.events.length > 0) {
      apiStatus.mls = "Working"
      const games = data.events.map((event) => transformMLSGame(event))
      return games
    } else {
      console.log("No MLS games found for this date")
      apiStatus.mls = "Working (No Data)"
      return []
    }
  } catch (error) {
    console.error("Error fetching MLS data:", error)
    apiStatus.mls = "Error"
    return []
  }
}

function transformMLSGame(apiEvent) {
  const competition = apiEvent.competitions[0]
  const homeCompetitor = competition.competitors.find((c) => c.homeAway === "home")
  const awayCompetitor = competition.competitors.find((c) => c.homeAway === "away")

  const homeTeam = {
    name: homeCompetitor.team.displayName,
    abbr: homeCompetitor.team.abbreviation,
    logo: getMLSTeamLogo(homeCompetitor.team.abbreviation),
  }

  const awayTeam = {
    name: awayCompetitor.team.displayName,
    abbr: awayCompetitor.team.abbreviation,
    logo: getMLSTeamLogo(awayCompetitor.team.abbreviation),
  }

  let status = "scheduled"
  let time = ""
  let period = ""

  const state = apiEvent.status.type.state.toLowerCase()
  const detail = apiEvent.status.type.detail

  if (state === "pre") {
    status = "scheduled"
    time = new Date(apiEvent.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  } else if (state === "in") {
    status = "live"
    period = competition.status.period === 1 ? "1st Half" : "2nd Half"
    if (competition.status.type.name === "HALFTIME") {
      period = "Half Time"
    }
    time = competition.status.displayClock
  } else if (state === "post") {
    status = "final"
    period = "Full Time"
    time = "Final"
  } else if (state === "canceled" || state === "postponed") {
    status = "postponed"
    time = detail
  }

  return {
    id: apiEvent.id,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: Number.parseInt(homeCompetitor.score) || 0,
    awayScore: Number.parseInt(awayCompetitor.score) || 0,
    status: status,
    time: time,
    period: period,
    venue: competition.venue ? competition.venue.fullName : "TBD",
    gameDate: apiEvent.date,
  }
}

async function loadMLSDateGames(period) {
  const today = new Date()
  let targetDate

  switch (period) {
    case "yesterday":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() - 1)
      break
    case "today":
      targetDate = today
      break
    case "tomorrow":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() + 1)
      break
    default:
      targetDate = today
  }

  currentMLSDate = targetDate.toISOString().split("T")[0]

  document.querySelectorAll("#mls-section .date-btn").forEach((btn) => btn.classList.remove("active"))
  const clickedButton = event.target
  if (clickedButton && clickedButton.classList.contains("date-btn")) {
    clickedButton.classList.add("active")
  }

  await loadMLSGames()
}

async function loadCustomMLSDate() {
  const customDateInput = document.getElementById("customMLSDate")
  if (customDateInput.value) {
    currentMLSDate = customDateInput.value
    document.querySelectorAll("#mls-section .date-btn").forEach((btn) => btn.classList.remove("active"))
    await loadMLSGames()
  }
}

async function loadMLSGames() {
  try {
    document.getElementById("mlsGamesContainer").innerHTML = '<div class="loading">Loading MLS games...</div>'

    const games = await fetchMLSGamesByDate(currentMLSDate)

    allMLSGames = games
    filteredMLSGames = [...allMLSGames]
    displayMLSGames(filteredMLSGames)
    updateMLSStats()
    updateLastUpdated()
  } catch (error) {
    console.error("Error loading MLS games:", error)
    document.getElementById("mlsGamesContainer").innerHTML =
      '<div class="error">Error loading MLS games. Please try again later.</div>'
  }
  updateApiStatus()
}

function displayMLSGames(games) {
  const container = document.getElementById("mlsGamesContainer")

  if (games.length === 0) {
    container.innerHTML = '<div class="no-games">No MLS games found for this date.</div>'
    return
  }

  container.innerHTML = games
    .map(
      (game) => `
  <div class="game-card mls-card">
      <div class="game-status status-${game.status}">
          ${game.status === "live" ? "● LIVE" : game.status.toUpperCase()}
      </div>
      <div class="teams">
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.awayTeam.logo}" alt="${game.awayTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.awayTeam.abbr}</div>'">
                  <div class="team-name">${game.awayTeam.name}</div>
              </div>
              <div class="team-score">${game.awayScore}</div>
          </div>
          <div class="vs">VS</div>
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.homeTeam.logo}" alt="${game.homeTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.homeTeam.abbr}</div>'">
                  <div class="team-name">${game.homeTeam.name}</div>
              </div>
              <div class="team-score">${game.homeScore}</div>
          </div>
      </div>
      <div class="match-details">
          <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${game.period || game.time}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Venue:</span>
              <span class="detail-value">${game.venue}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${game.time}</span>
          </div>
      </div>
  </div>
`,
    )
    .join("")
}

function filterMLSGames(status) {
  currentMLSFilter = status

  document.querySelectorAll("#mls-section .btn").forEach((btn) => {
    if (!btn.textContent.includes("Sort")) {
      btn.classList.remove("active")
    }
  })

  const filterButtons = document.querySelectorAll("#mls-section .btn")
  filterButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(status) || (status === "all" && btn.textContent === "All Games")) {
      btn.classList.add("active")
    }
  })

  if (status === "all") {
    filteredMLSGames = [...allMLSGames]
  } else {
    filteredMLSGames = allMLSGames.filter((game) => game.status === status)
  }

  displayMLSGames(filteredMLSGames)
  updateMLSStats()
}

function sortMLSGames(criteria, buttonElement) {
  let compareFunc

  if (criteria === "score") {
    compareFunc = (a, b) => {
      const aTotalScore = (a.homeScore || 0) + (a.awayScore || 0)
      const bTotalScore = (b.homeScore || 0) + (b.awayScore || 0)
      return bTotalScore - aTotalScore
    }
  } else if (criteria === "time") {
    compareFunc = (a, b) => {
      const statusOrder = { live: 0, scheduled: 1, final: 2, postponed: 3 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
  }

  if (criteria === "score") {
    filteredMLSGames = quickSort([...filteredMLSGames], compareFunc)
  } else {
    filteredMLSGames = mergeSort([...filteredMLSGames], compareFunc)
  }

  document.querySelectorAll("#mls-section .btn").forEach((btn) => {
    if (btn.textContent.includes("Sort")) {
      btn.classList.remove("sort-active")
    }
  })

  if (buttonElement) {
    buttonElement.classList.add("sort-active")
  }

  displayMLSGames(filteredMLSGames)
}

function searchMLSTeams(query) {
  if (!query.trim()) {
    filteredMLSGames = [...allMLSGames]
    if (currentMLSFilter !== "all") {
      filteredMLSGames = filteredMLSGames.filter((game) => game.status === currentMLSFilter)
    }
  } else {
    filteredMLSGames = allMLSGames.filter(
      (game) =>
        game.homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.homeTeam.abbr.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.abbr.toLowerCase().includes(query.toLowerCase()),
    )

    if (currentMLSFilter !== "all") {
      filteredMLSGames = filteredMLSGames.filter((game) => game.status === currentMLSFilter)
    }
  }

  displayMLSGames(filteredMLSGames)
  updateMLSStats()
}

function updateMLSStats() {
  const totalGames = allMLSGames.length
  const liveGames = allMLSGames.filter((game) => game.status === "live").length
  const finalGames = allMLSGames.filter((game) => game.status === "final").length

  let totalGoals = 0
  let gameCount = 0

  allMLSGames.forEach((game) => {
    if (game.status !== "scheduled" && game.status !== "postponed") {
      totalGoals += game.homeScore + game.awayScore
      gameCount++
    }
  })

  const avgGoals = gameCount > 0 ? Math.round((totalGoals / gameCount) * 10) / 10 : 0

  document.getElementById("totalMLSGames").textContent = totalGoals
  document.getElementById("liveMLSGames").textContent = liveGames
  document.getElementById("finalMLSGames").textContent = finalGames
  document.getElementById("avgGoalsMLS").textContent = avgGoals
}

// NHL Functions
async function fetchNHLGamesByDate(dateStr) {
  try {
    console.log(`Fetching NHL games for date: ${dateStr}`)
    const response = await fetch(`${ESPN_API_BASE}/hockey/nhl/scoreboard?dates=${dateStr.replace(/-/g, "")}`)

    if (!response.ok) {
      throw new Error(`NHL API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("NHL API Response:", data)

    if (data.events && data.events.length > 0) {
      apiStatus.nhl = "Working"
      const games = data.events.map((event) => transformNHLGame(event))
      return games
    } else {
      console.log("No NHL games found for this date")
      apiStatus.nhl = "Working (No Data)"
      return []
    }
  } catch (error) {
    console.error("Error fetching NHL data:", error)
    apiStatus.nhl = "Error"
    return []
  }
}

function transformNHLGame(apiEvent) {
  const competition = apiEvent.competitions[0]
  const homeCompetitor = competition.competitors.find((c) => c.homeAway === "home")
  const awayCompetitor = competition.competitors.find((c) => c.homeAway === "away")

  const homeTeam = {
    name: homeCompetitor.team.displayName,
    abbr: homeCompetitor.team.abbreviation,
    logo: getNHLTeamLogo(homeCompetitor.team.abbreviation),
  }

  const awayTeam = {
    name: awayCompetitor.team.displayName,
    abbr: awayCompetitor.team.abbreviation,
    logo: getNHLTeamLogo(awayCompetitor.team.abbreviation),
  }

  let status = "scheduled"
  let time = ""
  let period = ""

  const state = apiEvent.status.type.state.toLowerCase()
  const detail = apiEvent.status.type.detail

  if (state === "pre") {
    status = "scheduled"
    time = new Date(apiEvent.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  } else if (state === "in") {
    status = "live"
    period = `${competition.status.period}${getOrdinalSuffix(competition.status.period)} Period`
    time = competition.status.displayClock
  } else if (state === "post") {
    status = "final"
    period = "Final"
    time = "Final"
  } else if (state === "canceled" || state === "postponed") {
    status = "postponed"
    time = detail
  }

  // Extract period scores
  const homePeriodScores = []
  const awayPeriodScores = []
  if (competition.periods) {
    competition.periods.forEach((p) => {
      homePeriodScores.push(p.homeScore || 0)
      awayPeriodScores.push(p.awayScore || 0)
    })
  }

  return {
    id: apiEvent.id,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: Number.parseInt(homeCompetitor.score) || 0,
    awayScore: Number.parseInt(awayCompetitor.score) || 0,
    homePeriodScores: homePeriodScores, // Add period scores
    awayPeriodScores: awayPeriodScores, // Add period scores
    status: status,
    time: time,
    period: period,
    venue: competition.venue ? competition.venue.fullName : "TBD",
    gameDate: apiEvent.date,
  }
}

async function loadNHLDateGames(period) {
  const today = new Date()
  let targetDate

  switch (period) {
    case "yesterday":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() - 1)
      break
    case "today":
      targetDate = today
      break
    case "tomorrow":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() + 1)
      break
    default:
      targetDate = today
  }

  currentNHLDate = targetDate.toISOString().split("T")[0]

  document.querySelectorAll("#nhl-section .date-btn").forEach((btn) => btn.classList.remove("active"))
  const clickedButton = event.target
  if (clickedButton && clickedButton.classList.contains("date-btn")) {
    clickedButton.classList.add("active")
  }

  await loadNHLGames()
}

async function loadCustomNHLDate() {
  const customDateInput = document.getElementById("customNHLDate")
  if (customDateInput.value) {
    currentNHLDate = customDateInput.value
    document.querySelectorAll("#nhl-section .date-btn").forEach((btn) => btn.classList.remove("active"))
    await loadNHLGames()
  }
}

async function loadNHLGames() {
  try {
    document.getElementById("nhlGamesContainer").innerHTML = '<div class="loading">Loading NHL games...</div>'

    const games = await fetchNHLGamesByDate(currentNHLDate)

    allNHLGames = games
    filteredNHLGames = [...allNHLGames]
    displayNHLGames(filteredNHLGames)
    updateNHLStats()
    updateLastUpdated()
  } catch (error) {
    console.error("Error loading NHL games:", error)
    document.getElementById("nhlGamesContainer").innerHTML =
      '<div class="error">Error loading NHL games. Please try again later.</div>'
  }
  updateApiStatus()
}

function generateNHLPeriodScore(game) {
  const maxPeriods = Math.max(
    3, // Standard 3 periods
    game.homePeriodScores.length,
    game.awayPeriodScores.length,
  )
  let html = `<div class="score-grid-base nhl-period-score" style="grid-template-columns: 60px repeat(${maxPeriods}, 1fr) 40px;">`

  html += '<div class="line-score-header">Team</div>'
  for (let i = 1; i <= maxPeriods; i++) {
    html += `<div class="line-score-header">P${i}</div>`
  }
  html += '<div class="line-score-header">T</div>' // Total

  html += `<div class="line-score-cell">${game.awayTeam.abbr}</div>`
  for (let i = 0; i < maxPeriods; i++) {
    html += `<div class="line-score-cell">${game.awayPeriodScores[i] !== undefined ? game.awayPeriodScores[i] : "-"}</div>`
  }
  html += `<div class="line-score-cell">${game.awayScore}</div>`

  html += `<div class="line-score-cell">${game.homeTeam.abbr}</div>`
  for (let i = 0; i < maxPeriods; i++) {
    html += `<div class="line-score-cell">${game.homePeriodScores[i] !== undefined ? game.homePeriodScores[i] : "-"}</div>`
  }
  html += `<div class="line-score-cell">${game.homeScore}</div>`

  html += "</div>"
  return html
}

function displayNHLGames(games) {
  const container = document.getElementById("nhlGamesContainer")

  if (games.length === 0) {
    container.innerHTML = '<div class="no-games">No NHL games found for this date.</div>'
    return
  }

  container.innerHTML = games
    .map(
      (game) => `
  <div class="game-card nhl-card">
      <div class="game-status status-${game.status}">
          ${game.status === "live" ? "● LIVE" : game.status.toUpperCase()}
      </div>
      <div class="teams">
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.awayTeam.logo}" alt="${game.awayTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.awayTeam.abbr}</div>'">
                  <div class="team-name">${game.awayTeam.name}</div>
              </div>
              <div class="team-score">${game.awayScore}</div>
          </div>
          <div class="vs">VS</div>
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.homeTeam.logo}" alt="${game.homeTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.homeTeam.abbr}</div>'">
                  <div class="team-name">${game.homeTeam.name}</div>
              </div>
              <div class="team-score">${game.homeScore}</div>
          </div>
      </div>
      ${game.status !== "scheduled" && game.status !== "postponed" ? generateNHLPeriodScore(game) : ""}
      <div class="match-details">
          <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${game.period || game.time}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Venue:</span>
              <span class="detail-value">${game.venue}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${game.time}</span>
          </div>
      </div>
  </div>
`,
    )
    .join("")
}

function filterNHLGames(status) {
  currentNHLFilter = status

  document.querySelectorAll("#nhl-section .btn").forEach((btn) => {
    if (!btn.textContent.includes("Sort")) {
      btn.classList.remove("active")
    }
  })

  const filterButtons = document.querySelectorAll("#nhl-section .btn")
  filterButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(status) || (status === "all" && btn.textContent === "All Games")) {
      btn.classList.add("active")
    }
  })

  if (status === "all") {
    filteredNHLGames = [...allNHLGames]
  } else {
    filteredNHLGames = allNHLGames.filter((game) => game.status === status)
  }

  displayNHLGames(filteredNHLGames)
  updateNHLStats()
}

function sortNHLGames(criteria, buttonElement) {
  let compareFunc

  if (criteria === "score") {
    compareFunc = (a, b) => {
      const aTotalScore = (a.homeScore || 0) + (a.awayScore || 0)
      const bTotalScore = (b.homeScore || 0) + (b.awayScore || 0)
      return bTotalScore - aTotalScore
    }
  } else if (criteria === "time") {
    compareFunc = (a, b) => {
      const statusOrder = { live: 0, scheduled: 1, final: 2, postponed: 3 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
  }

  if (criteria === "score") {
    filteredNHLGames = quickSort([...filteredNHLGames], compareFunc)
  } else {
    filteredNHLGames = mergeSort([...filteredNHLGames], compareFunc)
  }

  document.querySelectorAll("#nhl-section .btn").forEach((btn) => {
    if (btn.textContent.includes("Sort")) {
      btn.classList.remove("sort-active")
    }
  })

  if (buttonElement) {
    buttonElement.classList.add("sort-active")
  }

  displayNHLGames(filteredNHLGames)
}

function searchNHLTeams(query) {
  if (!query.trim()) {
    filteredNHLGames = [...allNHLGames]
    if (currentNHLFilter !== "all") {
      filteredNHLGames = filteredNHLGames.filter((game) => game.status === currentNHLFilter)
    }
  } else {
    filteredNHLGames = allNHLGames.filter(
      (game) =>
        game.homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.homeTeam.abbr.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.abbr.toLowerCase().includes(query.toLowerCase()),
    )

    if (currentNHLFilter !== "all") {
      filteredNHLGames = filteredNHLGames.filter((game) => game.status === currentNHLFilter)
    }
  }

  displayNHLGames(filteredNHLGames)
  updateNHLStats()
}

function updateNHLStats() {
  const totalGames = allNHLGames.length
  const liveGames = allNHLGames.filter((game) => game.status === "live").length
  const finalGames = allNHLGames.filter((game) => game.status === "final").length

  let totalGoals = 0
  let gameCount = 0

  allNHLGames.forEach((game) => {
    if (game.status !== "scheduled" && game.status !== "postponed") {
      totalGoals += game.homeScore + game.awayScore
      gameCount++
    }
  })

  const avgGoals = gameCount > 0 ? Math.round((totalGoals / gameCount) * 10) / 10 : 0

  document.getElementById("totalNHLGames").textContent = totalGoals
  document.getElementById("liveNHLGames").textContent = liveGames
  document.getElementById("finalNHLGames").textContent = finalGames
  document.getElementById("avgGoalsNHL").textContent = avgGoals
}

// NBA Functions
async function fetchNBAGamesByDate(dateStr) {
  try {
    console.log(`Fetching NBA games for date: ${dateStr}`)
    const response = await fetch(`${ESPN_API_BASE}/basketball/nba/scoreboard?dates=${dateStr.replace(/-/g, "")}`)

    if (!response.ok) {
      throw new Error(`NBA API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("NBA API Response:", data)

    if (data.events && data.events.length > 0) {
      apiStatus.nba = "Working"
      const games = data.events.map((event) => transformNBAGame(event))
      return games
    } else {
      console.log("No NBA games found for this date")
      apiStatus.nba = "Working (No Data)"
      return []
    }
  } catch (error) {
    console.error("Error fetching NBA data:", error)
    apiStatus.nba = "Error"
    return []
  }
}

function transformNBAGame(apiEvent) {
  const competition = apiEvent.competitions[0]
  const homeCompetitor = competition.competitors.find((c) => c.homeAway === "home")
  const awayCompetitor = competition.competitors.find((c) => c.homeAway === "away")

  const homeTeam = {
    name: homeCompetitor.team.displayName,
    abbr: homeCompetitor.team.abbreviation,
    logo: getNBATeamLogo(homeCompetitor.team.abbreviation),
  }

  const awayTeam = {
    name: awayCompetitor.team.displayName,
    abbr: awayCompetitor.team.abbreviation,
    logo: getNBATeamLogo(awayCompetitor.team.abbreviation),
  }

  let status = "scheduled"
  let time = ""
  let period = ""

  const state = apiEvent.status.type.state.toLowerCase()
  const detail = apiEvent.status.type.detail

  if (state === "pre") {
    status = "scheduled"
    time = new Date(apiEvent.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  } else if (state === "in") {
    status = "live"
    period = `${competition.status.period}${getOrdinalSuffix(competition.status.period)} Quarter`
    time = competition.status.displayClock
  } else if (state === "post") {
    status = "final"
    period = "Final"
    time = "Final"
  } else if (state === "canceled" || state === "postponed") {
    status = "postponed"
    time = detail
  }

  // Extract quarter scores
  const homeQuarterScores = []
  const awayQuarterScores = []
  if (competition.periods) {
    competition.periods.forEach((p) => {
      homeQuarterScores.push(p.homeScore || 0)
      awayQuarterScores.push(p.awayScore || 0)
    })
  }

  return {
    id: apiEvent.id,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: Number.parseInt(homeCompetitor.score) || 0,
    awayScore: Number.parseInt(awayCompetitor.score) || 0,
    homeQuarterScores: homeQuarterScores, // Add quarter scores
    awayQuarterScores: awayQuarterScores, // Add quarter scores
    status: status,
    time: time,
    period: period,
    venue: competition.venue ? competition.venue.fullName : "TBD",
    gameDate: apiEvent.date,
  }
}

async function loadNBADateGames(period) {
  const today = new Date()
  let targetDate

  switch (period) {
    case "yesterday":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() - 1)
      break
    case "today":
      targetDate = today
      break
    case "tomorrow":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() + 1)
      break
    default:
      targetDate = today
  }

  currentNBADate = targetDate.toISOString().split("T")[0]

  document.querySelectorAll("#nba-section .date-btn").forEach((btn) => btn.classList.remove("active"))
  const clickedButton = event.target
  if (clickedButton && clickedButton.classList.contains("date-btn")) {
    clickedButton.classList.add("active")
  }

  await loadNBAGames()
}

async function loadCustomNBADate() {
  const customDateInput = document.getElementById("customNBADate")
  if (customDateInput.value) {
    currentNBADate = customDateInput.value
    document.querySelectorAll("#nba-section .date-btn").forEach((btn) => btn.classList.remove("active"))
    await loadNBAGames()
  }
}

async function loadNBAGames() {
  try {
    document.getElementById("nbaGamesContainer").innerHTML = '<div class="loading">Loading NBA games...</div>'

    const games = await fetchNBAGamesByDate(currentNBADate)

    allNBAGames = games
    filteredNBAGames = [...allNBAGames]
    displayNBAGames(filteredNBAGames)
    updateNBAStats()
    updateLastUpdated()
  } catch (error) {
    console.error("Error loading NBA games:", error)
    document.getElementById("nbaGamesContainer").innerHTML =
      '<div class="error">Error loading NBA games. Please try again later.</div>'
  }
  updateApiStatus()
}

function generateNBAQuarterScore(game) {
  const maxQuarters = Math.max(
    4, // Standard 4 quarters
    game.homeQuarterScores.length,
    game.awayQuarterScores.length,
  )
  let html = `<div class="score-grid-base nba-quarter-score" style="grid-template-columns: 60px repeat(${maxQuarters}, 1fr) 40px;">`

  html += '<div class="line-score-header">Team</div>'
  for (let i = 1; i <= maxQuarters; i++) {
    html += `<div class="line-score-header">Q${i}</div>`
  }
  html += '<div class="line-score-header">T</div>' // Total

  html += `<div class="line-score-cell">${game.awayTeam.abbr}</div>`
  for (let i = 0; i < maxQuarters; i++) {
    html += `<div class="line-score-cell">${game.awayQuarterScores[i] !== undefined ? game.awayQuarterScores[i] : "-"}</div>`
  }
  html += `<div class="line-score-cell">${game.awayScore}</div>`

  html += `<div class="line-score-cell">${game.homeTeam.abbr}</div>`
  for (let i = 0; i < maxQuarters; i++) {
    html += `<div class="line-score-cell">${game.homeQuarterScores[i] !== undefined ? game.homeQuarterScores[i] : "-"}</div>`
  }
  html += `<div class="line-score-cell">${game.homeScore}</div>`

  html += "</div>"
  return html
}

function displayNBAGames(games) {
  const container = document.getElementById("nbaGamesContainer")

  if (games.length === 0) {
    container.innerHTML = '<div class="no-games">No NBA games found for this date.</div>'
    return
  }

  container.innerHTML = games
    .map(
      (game) => `
  <div class="game-card nba-card">
      <div class="game-status status-${game.status}">
          ${game.status === "live" ? "● LIVE" : game.status.toUpperCase()}
      </div>
      <div class="teams">
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.awayTeam.logo}" alt="${game.awayTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.awayTeam.abbr}</div>'">
                  <div class="team-name">${game.awayTeam.name}</div>
              </div>
              <div class="team-score">${game.awayScore}</div>
          </div>
          <div class="vs">VS</div>
          <div class="team">
              <div class="team-logo-container">
                  <img src="${game.homeTeam.logo}" alt="${game.homeTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.homeTeam.abbr}</div>'">
                  <div class="team-name">${game.homeTeam.name}</div>
              </div>
              <div class="team-score">${game.homeScore}</div>
          </div>
      </div>
      ${game.status !== "scheduled" && game.status !== "postponed" ? generateNBAQuarterScore(game) : ""}
      <div class="match-details">
          <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${game.period || game.time}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Venue:</span>
              <span class="detail-value">${game.venue}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${game.time}</span>
          </div>
      </div>
  </div>
`,
    )
    .join("")
}

function filterNBAGames(status) {
  currentNBAFilter = status

  document.querySelectorAll("#nba-section .btn").forEach((btn) => {
    if (!btn.textContent.includes("Sort")) {
      btn.classList.remove("active")
    }
  })

  const filterButtons = document.querySelectorAll("#nba-section .btn")
  filterButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(status) || (status === "all" && btn.textContent === "All Games")) {
      btn.classList.add("active")
    }
  })

  if (status === "all") {
    filteredNBAGames = [...allNBAGames]
  } else {
    filteredNBAGames = allNBAGames.filter((game) => game.status === status)
  }

  displayNBAGames(filteredNBAGames)
  updateNBAStats()
}

function sortNBAGames(criteria, buttonElement) {
  let compareFunc

  if (criteria === "score") {
    compareFunc = (a, b) => {
      const aTotalScore = (a.homeScore || 0) + (a.awayScore || 0)
      const bTotalScore = (b.homeScore || 0) + (b.awayScore || 0)
      return bTotalScore - aTotalScore
    }
  } else if (criteria === "time") {
    compareFunc = (a, b) => {
      const statusOrder = { live: 0, scheduled: 1, final: 2, postponed: 3 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
  }

  if (criteria === "score") {
    filteredNBAGames = quickSort([...filteredNBAGames], compareFunc)
  } else {
    filteredNBAGames = mergeSort([...filteredNBAGames], compareFunc)
  }

  document.querySelectorAll("#nba-section .btn").forEach((btn) => {
    if (btn.textContent.includes("Sort")) {
      btn.classList.remove("sort-active")
    }
  })

  if (buttonElement) {
    buttonElement.classList.add("sort-active")
  }

  displayNBAGames(filteredNBAGames)
}

function searchNBATeams(query) {
  if (!query.trim()) {
    filteredNBAGames = [...allNBAGames]
    if (currentNBAFilter !== "all") {
      filteredNBAGames = filteredNBAGames.filter((game) => game.status === currentNBAFilter)
    }
  } else {
    filteredNBAGames = allNBAGames.filter(
      (game) =>
        game.homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.homeTeam.abbr.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.abbr.toLowerCase().includes(query.toLowerCase()),
    )

    if (currentNBAFilter !== "all") {
      filteredNBAGames = filteredNBAGames.filter((game) => game.status === currentNBAFilter)
    }
  }

  displayNBAGames(filteredNBAGames)
  updateNBAStats()
}

function updateNBAStats() {
  const totalGames = allNBAGames.length
  const liveGames = allNBAGames.filter((game) => game.status === "live").length
  const finalGames = allNBAGames.filter((game) => game.status === "final").length

  let totalPoints = 0
  let gameCount = 0

  allNBAGames.forEach((game) => {
    if (game.status !== "scheduled" && game.status !== "postponed") {
      totalPoints += game.homeScore + game.awayScore
      gameCount++
    }
  })

  const avgPoints = gameCount > 0 ? Math.round((totalPoints / gameCount) * 10) / 10 : 0

  document.getElementById("totalNBAGames").textContent = totalPoints
  document.getElementById("liveNBAGames").textContent = liveGames
  document.getElementById("finalNBAGames").textContent = finalGames
  document.getElementById("avgPointsNBA").textContent = avgPoints
}

// Football (Soccer - European Leagues) Functions
const FOOTBALL_LEAGUES = {
  PL: { name: "Premier League", slug: "eng.1" },
  LALIGA: { name: "La Liga", slug: "esp.1" },
  UCL: { name: "UEFA Champions League", slug: "uefa.champions" },
  BUNDESLIGA: { name: "Bundesliga", slug: "ger.1" },
}

async function fetchFootballGamesByDate(dateStr) {
  try {
    console.log(`Fetching Football games for date: ${dateStr}`)
    const allLeagueGames = []
    let anyWorking = false

    for (const leagueKey in FOOTBALL_LEAGUES) {
      const league = FOOTBALL_LEAGUES[leagueKey]
      try {
        const response = await fetch(
          `${ESPN_API_BASE}/soccer/${league.slug}/scoreboard?dates=${dateStr.replace(/-/g, "")}`,
        )

        if (!response.ok) {
          throw new Error(`Football API error for ${league.name}: ${response.status}`)
        }

        const data = await response.json()
        console.log(`Football API Response for ${league.name}:`, data)

        if (data.events && data.events.length > 0) {
          anyWorking = true
          const games = data.events.map((event) => transformFootballGame(event, league.name))
          allLeagueGames.push(...games)
        } else {
          console.log(`No Football games found for ${league.name} on this date`)
        }
      } catch (error) {
        console.error(`Error fetching Football data for ${league.name}:`, error)
        // Don't set apiStatus.football to Error immediately, as other leagues might work
      }
    }

    if (anyWorking) {
      apiStatus.football = "Working"
    } else {
      apiStatus.football = "Working (No Data)" // Or "Error" if all failed
    }

    return allLeagueGames
  } catch (error) {
    console.error("Overall error fetching Football data:", error)
    apiStatus.football = "Error"
    return []
  }
}

function transformFootballGame(apiEvent, leagueName) {
  const competition = apiEvent.competitions[0]
  const homeCompetitor = competition.competitors.find((c) => c.homeAway === "home")
  const awayCompetitor = competition.competitors.find((c) => c.homeAway === "away")

  const homeTeam = {
    name: homeCompetitor.team.displayName,
    abbr: homeCompetitor.team.abbreviation,
    logo: homeCompetitor.team.logos && homeCompetitor.team.logos.length > 0 ? homeCompetitor.team.logos[0].href : null,
  }

  const awayTeam = {
    name: awayCompetitor.team.displayName,
    abbr: awayCompetitor.team.abbreviation,
    logo: awayCompetitor.team.logos && awayCompetitor.team.logos.length > 0 ? awayCompetitor.team.logos[0].href : null,
  }

  let status = "scheduled"
  let time = ""
  let period = ""

  const state = apiEvent.status.type.state.toLowerCase()
  const detail = apiEvent.status.type.detail

  if (state === "pre") {
    status = "scheduled"
    time = new Date(apiEvent.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  } else if (state === "in") {
    status = "live"
    period = competition.status.period === 1 ? "1st Half" : "2nd Half"
    if (competition.status.type.name === "HALFTIME") {
      period = "Half Time"
    } else if (competition.status.type.name === "END_OF_REGULATION") {
      period = "Full Time" // For games that go to extra time/penalties
    }
    time = competition.status.displayClock
  } else if (state === "post") {
    status = "final"
    period = "Full Time"
    time = "Final"
  } else if (state === "canceled" || state === "postponed") {
    status = "postponed"
    time = detail
  }

  return {
    id: apiEvent.id,
    homeTeam: homeTeam,
    awayTeam: awayTeam,
    homeScore: Number.parseInt(homeCompetitor.score) || 0,
    awayScore: Number.parseInt(awayCompetitor.score) || 0,
    status: status,
    time: time,
    period: period,
    venue: competition.venue ? competition.venue.fullName : "TBD",
    gameDate: apiEvent.date,
    league: leagueName, // Add league name
  }
}

async function loadFootballDateGames(period) {
  const today = new Date()
  let targetDate

  switch (period) {
    case "yesterday":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() - 1)
      break
    case "today":
      targetDate = today
      break
    case "tomorrow":
      targetDate = new Date(today)
      targetDate.setDate(today.getDate() + 1)
      break
    default:
      targetDate = today
  }

  currentFootballDate = targetDate.toISOString().split("T")[0]

  document.querySelectorAll("#football-section .date-btn").forEach((btn) => btn.classList.remove("active"))
  const clickedButton = event.target
  if (clickedButton && clickedButton.classList.contains("date-btn")) {
    clickedButton.classList.add("active")
  }

  await loadFootballGames()
}

async function loadCustomFootballDate() {
  const customDateInput = document.getElementById("customFootballDate")
  if (customDateInput.value) {
    currentFootballDate = customDateInput.value
    document.querySelectorAll("#football-section .date-btn").forEach((btn) => btn.classList.remove("active"))
    await loadFootballGames()
  }
}

async function loadFootballGames() {
  try {
    document.getElementById("footballGamesContainer").innerHTML = '<div class="loading">Loading Football games...</div>'

    const games = await fetchFootballGamesByDate(currentFootballDate)

    allFootballGames = games
    filteredFootballGames = [...allFootballGames]
    displayFootballGames(filteredFootballGames)
    updateFootballStats()
    updateLastUpdated()
  } catch (error) {
    console.error("Error loading Football games:", error)
    document.getElementById("footballGamesContainer").innerHTML =
      '<div class="error">Error loading Football games. Please try again later.</div>'
  }
  updateApiStatus()
}

function displayFootballGames(games) {
  const container = document.getElementById("footballGamesContainer")

  if (games.length === 0) {
    container.innerHTML = '<div class="no-games">No Football games found for this date.</div>'
    return
  }

  container.innerHTML = games
    .map(
      (game) => `
  <div class="game-card football-card">
      <div class="game-status status-${game.status}">
          ${game.status === "live" ? "● LIVE" : game.status.toUpperCase()}
      </div>
      <div class="match-header">
          <div class="match-title">${game.league}</div>
      </div>
      <div class="teams">
          <div class="team">
              <div class="team-logo-container">
                  <img src="${getFootballTeamLogo(game.awayTeam.logo, game.awayTeam.abbr)}" alt="${game.awayTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.awayTeam.abbr}</div>'">
                  <div class="team-name">${game.awayTeam.name}</div>
              </div>
              <div class="team-score">${game.awayScore}</div>
          </div>
          <div class="vs">VS</div>
          <div class="team">
              <div class="team-logo-container">
                  <img src="${getFootballTeamLogo(game.homeTeam.logo, game.homeTeam.abbr)}" alt="${game.homeTeam.abbr}" class="team-logo" onerror="this.outerHTML='<div class=\'team-abbr-fallback\'>${game.homeTeam.abbr}</div>'">
                  <div class="team-name">${game.homeTeam.name}</div>
              </div>
              <div class="team-score">${game.homeScore}</div>
          </div>
      </div>
      <div class="match-details">
          <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${game.period || game.time}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Venue:</span>
              <span class="detail-value">${game.venue}</span>
          </div>
          <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${game.time}</span>
          </div>
      </div>
  </div>
`,
    )
    .join("")
}

function filterFootballGames(status) {
  currentFootballFilter = status

  document.querySelectorAll("#football-section .btn").forEach((btn) => {
    if (!btn.textContent.includes("Sort")) {
      btn.classList.remove("active")
    }
  })

  const filterButtons = document.querySelectorAll("#football-section .btn")
  filterButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase().includes(status) || (status === "all" && btn.textContent === "All Games")) {
      btn.classList.add("active")
    }
  })

  if (status === "all") {
    filteredFootballGames = [...allFootballGames]
  } else {
    filteredFootballGames = allFootballGames.filter((game) => game.status === status)
  }

  displayFootballGames(filteredFootballGames)
  updateFootballStats()
}

function sortFootballGames(criteria, buttonElement) {
  let compareFunc

  if (criteria === "score") {
    compareFunc = (a, b) => {
      const aTotalScore = (a.homeScore || 0) + (a.awayScore || 0)
      const bTotalScore = (b.homeScore || 0) + (b.awayScore || 0)
      return bTotalScore - aTotalScore
    }
  } else if (criteria === "time") {
    compareFunc = (a, b) => {
      const statusOrder = { live: 0, scheduled: 1, final: 2, postponed: 3 }
      return statusOrder[a.status] - statusOrder[b.status]
    }
  }

  if (criteria === "score") {
    filteredFootballGames = quickSort([...filteredFootballGames], compareFunc)
  } else {
    filteredFootballGames = mergeSort([...filteredFootballGames], compareFunc)
  }

  document.querySelectorAll("#football-section .btn").forEach((btn) => {
    if (btn.textContent.includes("Sort")) {
      btn.classList.remove("sort-active")
    }
  })

  if (buttonElement) {
    buttonElement.classList.add("sort-active")
  }

  displayFootballGames(filteredFootballGames)
}

function searchFootballTeams(query) {
  if (!query.trim()) {
    filteredFootballGames = [...allFootballGames]
    if (currentFootballFilter !== "all") {
      filteredFootballGames = filteredFootballGames.filter((game) => game.status === currentFootballFilter)
    }
  } else {
    filteredFootballGames = allFootballGames.filter(
      (game) =>
        game.homeTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.name.toLowerCase().includes(query.toLowerCase()) ||
        game.homeTeam.abbr.toLowerCase().includes(query.toLowerCase()) ||
        game.awayTeam.abbr.toLowerCase().includes(query.toLowerCase()) ||
        game.league.toLowerCase().includes(query.toLowerCase()), // Search by league name too
    )

    if (currentFootballFilter !== "all") {
      filteredFootballGames = filteredFootballGames.filter((game) => game.status === currentFootballFilter)
    }
  }

  displayFootballGames(filteredFootballGames)
  updateFootballStats()
}

function updateFootballStats() {
  const totalGames = allFootballGames.length
  const liveGames = allFootballGames.filter((game) => game.status === "live").length
  const finalGames = allFootballGames.filter((game) => game.status === "final").length

  let totalGoals = 0
  let gameCount = 0

  allFootballGames.forEach((game) => {
    if (game.status !== "scheduled" && game.status !== "postponed") {
      totalGoals += game.homeScore + game.awayScore
      gameCount++
    }
  })

  const avgGoals = gameCount > 0 ? Math.round((totalGoals / gameCount) * 10) / 10 : 0

  document.getElementById("totalFootballGames").textContent = totalGoals
  document.getElementById("liveFootballGames").textContent = liveGames
  document.getElementById("finalFootballGames").textContent = finalGames
  document.getElementById("avgGoalsFootball").textContent = avgGoals
}

function refreshData() {
  const btn = document.querySelector(".refresh-btn")
  btn.classList.add("spinning")

  setTimeout(() => {
    refreshCurrentSport()
    btn.classList.remove("spinning")
  }, 1000)
}

function updateLastUpdated() {
  const lastUpdated = document.getElementById("lastUpdated")
  lastUpdated.textContent = `Last updated: ${new Date().toLocaleString()}`
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("customDate").value = currentDate
  document.getElementById("customCricketDate").value = currentCricketDate
  document.getElementById("customMLSDate").value = currentMLSDate
  document.getElementById("customNHLDate").value = currentNHLDate
  document.getElementById("customNBADate").value = currentNBADate
  document.getElementById("customFootballDate").value = currentFootballDate // Initialize for Football
  refreshCurrentSport()
})
