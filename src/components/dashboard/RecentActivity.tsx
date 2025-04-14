import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserMd, FaPills, FaFileAlt, FaChartLine, FaPlus } from 'react-icons/fa';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'consultation',
      patient: 'Sofia Amrani',
      description: 'Consultation de suivi - Dépression modérée',
      time: 'Aujourd\'hui, 11:30',
      icon: <FaUserMd className="text-blue-500" />
    },
    {
      id: 2,
      type: 'prescription',
      patient: 'Hassan Benomar',
      description: 'Ajusté dose Paroxétine - 20mg par jour',
      time: 'Aujourd\'hui, 10:15',
      icon: <FaPills className="text-green-500" />
    },
    {
      id: 3,
      type: 'diagnostic',
      patient: 'Nadia Tazi',
      description: 'Diagnostic établi - Trouble anxieux généralisé',
      time: 'Hier, 16:45',
      icon: <FaFileAlt className="text-purple-500" />
    },
    {
      id: 4,
      type: 'evaluation',
      patient: 'Mohammed Saidi',
      description: 'Évaluation de l\'humeur - Amélioration 20%',
      time: 'Hier, 14:20',
      icon: <FaChartLine className="text-yellow-500" />
    },
    {
      id: 5,
      type: 'nouveau_patient',
      patient: 'Amina Oudghiri',
      description: 'Nouveau patient - Première consultation programmée',
      time: 'Hier, 09:00',
      icon: <FaPlus className="text-red-500" />
    }
  ];

  return (
    <div className="card h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-3" />
          <h2 className="text-xl font-semibold">Activité récente</h2>
        </div>
        <div>
          <select className="bg-slate-700 text-slate-300 text-sm rounded-md border border-slate-600 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Aujourd'hui</option>
            <option>Cette semaine</option>
            <option>Ce mois</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center p-3 rounded-lg hover:bg-slate-700/30 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-slate-700/60 mr-4">
              {activity.icon}
            </div>
            <div className="flex-grow">
              <div className="flex items-center">
                <h3 className="font-medium">{activity.patient}</h3>
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                  {activity.type}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-0.5">{activity.description}</p>
            </div>
            <div className="text-xs text-slate-500">{activity.time}</div>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 mt-2 text-center border-t border-slate-700">
        <button className="text-sm text-blue-400 hover:text-blue-300">
          Afficher plus d'activités
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;