import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SportsProvider } from './context/SportsContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SportPage from './pages/SportPage';
import './styles/App.css';

function App() {
    return (
        <ThemeProvider>
            <SportsProvider>
                <Router>
                    <div className="app">
                        <Navbar />
                        <Sidebar />
                        <main className="main-content">
                            <Routes>
                                <Route path="/" element={<Navigate to="/mlb" replace />} />
                                <Route path="/:sport" element={<SportPage />} />
                            </Routes>
                        </main>
                    </div>
                </Router>
            </SportsProvider>
        </ThemeProvider>
    );
}

export default App;
