import React from 'react';
import { FaUserInjured, FaCalendarCheck, FaExclamationTriangle, FaChartLine } from 'react-icons/fa';

const PatientOverview: React.FC = () => {
  const stats = [
    {
      title: 'Patients totaux',
      value: 156,
      icon: <FaUserInjured className="text-blue-500" />,
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Suivis actifs',
      value: 48,
      icon: <FaCalendarCheck className="text-green-500" />,
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: 'Cas urgents',
      value: 3,
      icon: <FaExclamationTriangle className="text-red-500" />,
      change: '-2',
      changeType: 'negative'
    },
    {
      title: 'Évolution positive',
      value: '73%',
      icon: <FaChartLine className="text-purple-500" />,
      change: '+8%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">{stat.title}</p>
              <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
              <div className={`flex items-center mt-2 text-sm ${
                stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                <span>{stat.change}</span>
                <span className="ml-1 text-xs text-slate-400">ce mois</span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-slate-700/50">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientOverview;