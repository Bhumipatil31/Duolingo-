import React, { useState } from 'react';
import { UserStats, Unit, LessonStatus, Page } from './types';
import Layout from './components/Layout';

// Pages
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Lesson from './pages/Lesson';
import Leaderboard from './pages/Leaderboard';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

// Mock Data
const userStats: UserStats = {
  streak: 14,
  xp: 850,
  gems: 1240,
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  name: "Felix Cat",
  username: "felix_gato",
  joinedDate: "Sept 2024"
};

const mockUnit: Unit = {
  id: 'u1',
  number: 3,
  title: 'Food & Drink',
  description: 'Master ordering tapas and asking for the bill.',
  color: 'peach',
  lessons: [
    { id: 'l1', level: 1, totalLevels: 1, status: LessonStatus.COMPLETED, icon: 'Star', color: 'peach', topic: 'Basics' },
    { id: 'l2', level: 1, totalLevels: 1, status: LessonStatus.COMPLETED, icon: 'Zap', color: 'peach', topic: 'Phrases' },
    { id: 'l3', level: 2, totalLevels: 3, status: LessonStatus.ACTIVE, icon: 'BookOpen', color: 'peach', topic: 'Order' },
    { id: 'l4', level: 0, totalLevels: 2, status: LessonStatus.LOCKED, icon: 'Dumbbell', color: 'peach', topic: 'Practice' },
    { id: 'l5', level: 0, totalLevels: 2, status: LessonStatus.LOCKED, icon: 'Trophy', color: 'peach', topic: 'Challenge' },
    { id: 'l6', level: 0, totalLevels: 1, status: LessonStatus.LOCKED, icon: 'Gem', color: 'peach', topic: 'Review' },
  ]
};

export const THEME_STYLES = {
  mint: { bg: 'bg-emerald-300', gradient: 'bg-gradient-to-br from-emerald-300 to-teal-200', shadow: 'shadow-emerald-200', text: 'text-emerald-800', border: 'border-emerald-200' },
  lilac: { bg: 'bg-violet-300', gradient: 'bg-gradient-to-br from-violet-300 to-fuchsia-200', shadow: 'shadow-violet-200', text: 'text-violet-800', border: 'border-violet-200' },
  peach: { bg: 'bg-orange-300', gradient: 'bg-gradient-to-br from-orange-300 to-amber-200', shadow: 'shadow-orange-200', text: 'text-orange-800', border: 'border-orange-200' },
  sky: { bg: 'bg-sky-300', gradient: 'bg-gradient-to-br from-sky-300 to-blue-200', shadow: 'shadow-sky-200', text: 'text-sky-800', border: 'border-sky-200' }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = THEME_STYLES[mockUnit.color];

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const navigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Full Screen Pages (No Layout)
  if (currentPage === 'landing') {
    return <Landing onNavigate={navigate} />;
  }

  if (currentPage === 'login') {
    return <Auth onLogin={handleLogin} onNavigate={navigate} />;
  }

  if (currentPage === 'lesson') {
    return <Lesson onComplete={() => navigate('dashboard')} onExit={() => navigate('dashboard')} />;
  }

  // Authenticated Layout Pages
  return (
    <Layout 
      currentPage={currentPage} 
      onNavigate={navigate} 
      userStats={userStats}
      isDarkMode={isDarkMode}
    >
        {currentPage === 'dashboard' && (
          <Dashboard 
             unit={mockUnit} 
             theme={theme} 
             onStartLesson={() => navigate('lesson')}
             isDarkMode={isDarkMode}
          />
        )}
        {currentPage === 'leaderboard' && <Leaderboard />}
        {currentPage === 'store' && <Store isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        {currentPage === 'profile' && <Profile user={userStats} />}
        {currentPage === 'settings' && <Settings isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
    </Layout>
  );
};

export default App;