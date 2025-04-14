import React, { useState } from 'react';
import { FaBars, FaSearch, FaMoon, FaSun, FaBell, FaUser } from 'react-icons/fa';

interface TopBarProps {
  onToggleSidebar: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-slate-800 glass border-b border-slate-700 z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onToggleSidebar}
            className="p-2 rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-white transition-colors"
          >
            <FaBars />
          </button>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher..."
              className="py-2 pl-10 pr-4 bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-700 text-slate-400 transition-colors"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-slate-700 text-slate-400 transition-colors"
            >
              <FaBell />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-800 glass rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-2 border-b border-slate-700">
                  <h3 className="text-sm font-medium text-slate-200">Notifications</h3>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  <a href="#" className="block px-4 py-3 hover:bg-slate-700 transition">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-red-500 rounded-full p-1">
                        <FaExclamationTriangle className="h-3 w-3 text-white" />
                      </div>
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-slate-200">Alerte urgence</p>
                        <p className="text-xs text-slate-400">Patient Ahmed M. présente des signes de crise suicidaire</p>
                        <p className="text-xs text-slate-500 mt-1">Il y a 5 minutes</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="#" className="block px-4 py-3 hover:bg-slate-700 transition">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-500 rounded-full p-1">
                        <FaUser className="h-3 w-3 text-white" />
                      </div>
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-slate-200">Nouveau patient</p>
                        <p className="text-xs text-slate-400">Sarah B. ajoutée à votre liste de patients</p>
                        <p className="text-xs text-slate-500 mt-1">Il y a 30 minutes</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center rounded-full overflow-hidden border-2 border-slate-600 focus:outline-none focus:border-blue-500"
            >
              <img
                className="h-8 w-8 object-cover"
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="Avatar"
              />
            </button>
            
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 glass rounded-md shadow-lg py-1 z-20">
                <a href="#" className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">
                  Dr. Mohammed Alami
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">
                  Paramètres
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">
                  Aide
                </a>
                <hr className="border-slate-700 my-1" />
                <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-slate-700">
                  Déconnexion
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

// Définie FaExclamationTriangle car elle est utilisée dans le composant
function FaExclamationTriangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
    </svg>
  );
}