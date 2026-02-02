import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SportsProvider } from './context/SportsContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MLBPage from './pages/MLBPage';
import CricketPage from './pages/CricketPage';
import MLSPage from './pages/MLSPage';
import NHLPage from './pages/NHLPage';
import NBAPage from './pages/NBAPage';
import FootballPage from './pages/FootballPage';
import './styles/App.css';

function App() {
    return (
        <ThemeProvider>
            <SportsProvider>
                <Router>
                    <div className="app">
                        <Navbar />
                        <div className="app-container">
                            <Sidebar />
                            <main className="main-content">
                                <Routes>
                                    <Route path="/" element={<Navigate to="/mlb" replace />} />
                                    <Route path="/mlb" element={<MLBPage />} />
                                    <Route path="/cricket" element={<CricketPage />} />
                                    <Route path="/mls" element={<MLSPage />} />
                                    <Route path="/nhl" element={<NHLPage />} />
                                    <Route path="/nba" element={<NBAPage />} />
                                    <Route path="/football" element={<FootballPage />} />
                                </Routes>
                            </main>
                        </div>
                    </div>
                </Router>
            </SportsProvider>
        </ThemeProvider>
    );
}

export default App;
