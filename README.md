# 🏆 Multi-Sport Live Tracker - MERN Stack

A real-time sports tracking application built with the MERN stack (MongoDB, Express, React, Node.js). Track live scores and updates for MLB, Cricket, MLS, NHL, NBA, and Football.

![Multi-Sport Tracker](https://img.shields.io/badge/MERN-Stack-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- **Real-time Score Updates** - Live scores for 6 major sports
- **Multi-Sport Support** - MLB, Cricket, MLS, NHL, NBA, and Football
- **Advanced Filtering** - Filter by game status (Live, Final, Scheduled)
- **Smart Search** - Search teams with autocomplete
- **Date Navigation** - View games from yesterday, today, tomorrow, or custom dates
- **Sorting Options** - Sort by score or time
- **Responsive Design** - Beautiful UI that works on all devices
- **API Caching** - Optimized performance with intelligent caching
- **DSA Implementation** - Uses LinkedList, HashMap, and Trie data structures

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Vite** - Build tool
- **CSS3** - Styling with glassmorphism effects

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Node-Cache** - In-memory caching
- **Axios** - External API calls

### External APIs
- MLB Stats API
- Cricket API (cricapi.com)
- ESPN API (MLS, NHL, NBA, Football)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Multi-Sports-Live-Tracker.git
cd Multi-Sports-Live-Tracker
```

### Backend Setup
```bash
cd server
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# MONGODB_URI=mongodb://localhost:27017/sports-tracker
# PORT=5000
# CRICKET_API_KEY=your_api_key_here
```

### Frontend Setup
```bash
cd client
npm install
```

## 🏃 Running the Application

### Start MongoDB
```bash
# If using local MongoDB
mongod
```

### Start Backend Server
```bash
cd server
npm run dev
```
The server will run on `http://localhost:5000`

### Start Frontend
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
Multi-Sports-Live-Tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context for state
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── styles/        # CSS files
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                # Express backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   ├── server.js         # Entry point
│   ├── .env.example
│   └── package.json
├── MultipleSportsTracker/ # Original vanilla JS version
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Sports Data
- `GET /api/mlb/:date` - Get MLB games for a specific date
- `GET /api/cricket/:date` - Get Cricket matches
- `GET /api/mls/:date` - Get MLS games
- `GET /api/nhl/:date` - Get NHL games
- `GET /api/nba/:date` - Get NBA games
- `GET /api/football/:date` - Get Football games

### System
- `GET /api/status` - Check API status
- `GET /` - Health check

**Date Format**: YYYY-MM-DD (e.g., 2026-02-02)

## 🎨 Features in Detail

### Data Structures (DSA)
- **LinkedList** - Efficient game storage and traversal
- **HashMap** - Fast game lookup by ID
- **Trie** - Autocomplete search functionality
- **QuickSort & MergeSort** - Sorting algorithms

### Caching Strategy
- Live games: 5-minute cache
- Completed games: 1-hour cache
- Reduces external API calls and improves performance

### Responsive Design
- Mobile-first approach
- Glassmorphism UI effects
- Smooth animations and transitions
- Sport-specific color themes

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options
- **Frontend**: Vercel, Netlify
- **Backend**: Render, Railway, Heroku
- **Database**: MongoDB Atlas (free tier available)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Siddhant Maurya**

## 🙏 Acknowledgments

- MLB Stats API
- Cricket API
- ESPN API
- All the amazing open-source libraries used in this project

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

⭐ Star this repo if you find it helpful!
