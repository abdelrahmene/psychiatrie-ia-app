import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaPhone, FaFileAlt, FaArrowRight } from 'react-icons/fa';

const EmergencyAlert: React.FC = () => {
  const emergencyCases = [
    {
      id: 1,
      patient: 'Ahmed Mehdi',
      age: 34,
      issue: 'Idées suicidaires - Risque élevé',
      severity: 'high',
      timeAgo: '5 minutes'
    },
    {
      id: 2,
      patient: 'Leila Boudali',
      age: 28,
      issue: 'Episode psychotique - Hallucinations',
      severity: 'medium',
      timeAgo: '45 minutes'
    },
    {
      id: 3,
      patient: 'Karim Tazi',
      age: 19,
      issue: 'Anxiété aigüe - Crise de panique',
      severity: 'medium',
      timeAgo: '1 heure'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'high':
        return 'bg-red-500/20 border-red-500 text-red-500';
      case 'medium':
        return 'bg-orange-500/20 border-orange-500 text-orange-500';
      case 'low':
        return 'bg-yellow-500/20 border-yellow-500 text-yellow-500';
      default:
        return 'bg-slate-500/20 border-slate-500 text-slate-500';
    }
  };

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FaExclamationTriangle className="text-red-500 mr-3" />
          <h2 className="text-xl font-semibold">Urgences psychiatriques</h2>
        </div>
        <div className="flex items-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
            <FaPhone className="mr-2" size={14} />
            Contacter urgences
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {emergencyCases.map((emergency) => (
          <motion.div
            key={emergency.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`border-l-4 p-4 rounded-r-md glass flex items-center justify-between ${getSeverityColor(emergency.severity)}`}
          >
            <div>
              <div className="flex items-center">
                <h3 className="font-semibold">{emergency.patient}</h3>
                <span className="ml-2 text-slate-400 text-sm">{emergency.age} ans</span>
                <span className="ml-4 text-xs text-slate-500">Il y a {emergency.timeAgo}</span>
              </div>
              <p className="text-sm mt-1">{emergency.issue}</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 text-white">
                <FaFileAlt size={16} />
              </button>
              <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white">
                <FaArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <a href="#" className="text-sm text-blue-400 hover:text-blue-300 flex items-center justify-end">
          Voir toutes les urgences
          <FaArrowRight className="ml-1" size={12} />
        </a>
      </div>
    </div>
  );
};

export default EmergencyAlert;