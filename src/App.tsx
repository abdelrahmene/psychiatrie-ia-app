import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUserInjured, 
  FaClipboardList, 
  FaStethoscope, 
  FaPills,
  FaChartLine,
  FaBook,
  FaExclamationTriangle,
  FaFileAlt,
  FaRobot,
  FaSearch,
  FaBell,
  FaSun,
  FaMoon
} from 'react-icons/fa';

// Import des pages
import Dashboard from './pages/Dashboard';
import Patients from './pages/Patients';
import Symptoms from './pages/Symptoms';
import Diagnosis from './pages/Diagnosis';
import Treatments from './pages/Treatments';
import Evolution from './pages/Evolution';
import Library from './pages/Library';
import Emergency from './pages/Emergency';
import Reports from './pages/Reports';
import AIChat from './pages/AIChat';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Options de menu
  const menuItems = [
    { id: 'dashboard', name: 'Accueil', icon: <FaHome size={18} /> },
    { id: 'patients', name: 'Patients', icon: <FaUserInjured size={18} /> },
    { id: 'symptoms', name: 'Symptômes', icon: <FaClipboardList size={18} /> },
    { id: 'diagnosis', name: 'Diagnostic IA', icon: <FaStethoscope size={18} /> },
    { id: 'treatments', name: 'Thérapies', icon: <FaPills size={18} /> },
    { id: 'evolution', name: 'Évolution', icon: <FaChartLine size={18} /> },
    { id: 'library', name: 'Bibliothèque', icon: <FaBook size={18} /> },
    { id: 'emergency', name: 'Urgences', icon: <FaExclamationTriangle size={18} /> },
    { id: 'reports', name: 'Rapports', icon: <FaFileAlt size={18} /> },
    { id: 'aichat', name: 'Chat IA', icon: <FaRobot size={18} /> }
  ];

  // Notifications pour la démo
  const notifications = [
    { 
      id: 1, 
      type: 'urgent', 
      title: 'Alerte urgence', 
      message: 'Patient Ahmed M. présente des signes de crise suicidaire',
      time: 'Il y a 5 minutes'
    },
    { 
      id: 2, 
      type: 'info', 
      title: 'Nouveau patient', 
      message: 'Sarah B. ajoutée à votre liste de patients',
      time: 'Il y a 30 minutes'
    },
    { 
      id: 3, 
      type: 'treatment', 
      title: 'Rappel traitement', 
      message: 'Mehdi L. - vérifier effets secondaires du traitement',
      time: 'Il y a 2 heures'
    }
  ];

  // Toggle pour le dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  // Appliquer la classe dark au body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Toggle pour la sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Afficher la page en fonction de l'onglet actif
  const renderPage = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'patients': return <Patients />;
      case 'symptoms': return <Symptoms />;
      case 'diagnosis': return <Diagnosis />;
      case 'treatments': return <Treatments />;
      case 'evolution': return <Evolution />;
      case 'library': return <Library />;
      case 'emergency': return <Emergency />;
      case 'reports': return <Reports />;
      case 'aichat': return <AIChat />;
      default: return <Dashboard />;
    }
  };

  return (
    <Router>
      <div className={`min-h-screen flex ${darkMode ? 'dark' : ''} ${darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Sidebar */}
        <motion.div 
          animate={{ width: sidebarCollapsed ? '80px' : '240px' }}
          transition={{ duration: 0.3 }}
          className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border-r flex-shrink-0 h-screen overflow-hidden z-10`}
        >
          <div className={`p-4 border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'} flex items-center justify-between`}>
            {!sidebarCollapsed ? (
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                PsycheMed IA
              </motion.h1>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm"
              >
                PM
              </motion.div>
            )}
          </div>
          
          <nav className="p-2 overflow-y-auto h-full">
            <ul className="space-y-1">
              {menuItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center ${!sidebarCollapsed ? 'justify-start' : 'justify-center'} w-full px-4 py-2 rounded-md transition-all duration-200 ${
                      activeTab === item.id 
                        ? darkMode 
                          ? 'bg-blue-600/30 text-blue-400' 
                          : 'bg-blue-100 text-blue-700'
                        : darkMode
                          ? 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-300'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    {!sidebarCollapsed && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-3"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border-b p-4 flex items-center justify-between z-10`}>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar}
                className={`p-2 rounded-md ${darkMode ? 'text-slate-400 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Ouvrir ou fermer le menu"
                aria-label="Ouvrir ou fermer le menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                  <FaSearch size={14} />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className={`pl-10 pr-4 py-2 rounded-md text-sm ${
                    darkMode 
                      ? 'bg-slate-700 text-slate-200 placeholder-slate-400 border-slate-600' 
                      : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
                  } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-md ${darkMode ? 'text-slate-400 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Basculer le mode sombre"
                aria-label="Basculer le mode sombre"
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`p-2 rounded-md ${darkMode ? 'text-slate-400 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'}`}
                  title="Afficher les notifications"
                  aria-label="Afficher les notifications"
                >
                  <FaBell size={18} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {showNotifications && (
                  <div className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border overflow-hidden z-50`}>
                    <div className={`p-4 border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                      <h3 className="font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map(notification => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b ${darkMode ? 'border-slate-700 hover:bg-slate-700/50' : 'border-gray-200 hover:bg-gray-50'} cursor-pointer`}
                        >
                          <div className="flex items-start">
                            <div className="flex-1">
                              <p className={`font-medium ${notification.type === 'urgent' ? 'text-red-500' : ''}`}>
                                {notification.title}
                              </p>
                              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                                {notification.message}
                              </p>
                              <p className={`text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>
                                {notification.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto pt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;