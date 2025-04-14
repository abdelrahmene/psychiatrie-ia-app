import React from 'react';
import { NavLink } from 'react-router-dom';
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
  FaRobot
} from 'react-icons/fa';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const menuItems = [
    { path: '/', label: 'Accueil', icon: <FaHome size={20} /> },
    { path: '/patients', label: 'Patients', icon: <FaUserInjured size={20} /> },
    { path: '/symptoms', label: 'Symptômes', icon: <FaClipboardList size={20} /> },
    { path: '/diagnosis', label: 'Diagnostic IA', icon: <FaStethoscope size={20} /> },
    { path: '/treatments', label: 'Thérapies', icon: <FaPills size={20} /> },
    { path: '/evolution', label: 'Évolution', icon: <FaChartLine size={20} /> },
    { path: '/library', label: 'Bibliothèque', icon: <FaBook size={20} /> },
    { path: '/emergency', label: 'Urgences', icon: <FaExclamationTriangle size={20} /> },
    { path: '/reports', label: 'Rapports', icon: <FaFileAlt size={20} /> },
    { path: '/ai-chat', label: 'Chat IA', icon: <FaRobot size={20} /> },
  ];

  return (
    <aside 
      className="h-screen bg-slate-800 glass z-10"
      style={{ 
        width: isCollapsed ? '80px' : '250px',
        transition: 'width 0.3s ease'
      }}
    >
      <div className="py-4 px-3 h-full flex flex-col">
        <div className="mb-8 flex items-center justify-center py-2">
          {!isCollapsed ? (
            <h1 className="text-2xl font-bold text-gradient">PsycheMed IA</h1>
          ) : (
            <img src="/brain.svg" alt="Logo" className="w-10 h-10" />
          )}
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `sidebar-item ${isActive ? 'sidebar-item-active' : 'hover:bg-slate-700'}`
              }
            >
              <div className="text-xl">{item.icon}</div>
              {!isCollapsed && (
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;