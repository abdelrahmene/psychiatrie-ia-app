import React from 'react';
import { FaChartBar, FaUsers, FaFileMedical, FaCalendarCheck, FaUserCircle } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Données de démonstration pour le graphique
  const chartData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Consultations',
        data: [65, 78, 85, 81, 95, 85],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Nouveaux patients',
        data: [25, 32, 28, 35, 42, 38],
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  // Données de démonstration pour les patients récents
  const recentPatients = [
    {
      id: 1,
      name: 'Ahmed Mehdi',
      diagnosis: 'Trouble obsessionnel-compulsif',
      lastVisit: '15 Avr 2025',
      nextVisit: '22 Avr 2025',
    },
    {
      id: 2,
      name: 'Leila Boudali',
      diagnosis: 'Trouble bipolaire type II',
      lastVisit: '14 Avr 2025',
      nextVisit: '28 Avr 2025',
    },
    {
      id: 3,
      name: 'Karim Tazi',
      diagnosis: 'Anxiété généralisée',
      lastVisit: '13 Avr 2025',
      nextVisit: '20 Avr 2025',
    },
    {
      id: 4,
      name: 'Sofia Amrani',
      diagnosis: 'Dépression modérée',
      lastVisit: '12 Avr 2025',
      nextVisit: '19 Avr 2025',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Statistiques */}
        <div className="glass bg-slate-800/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <FaUsers className="text-2xl text-blue-500" />
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Patients totaux</p>
              <h3 className="text-2xl font-bold">125</h3>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-400">↑ 12%</span>
            <span className="text-slate-400">vs mois dernier</span>
          </div>
        </div>

        <div className="glass bg-slate-800/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <FaChartBar className="text-2xl text-green-500" />
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Consultations du mois</p>
              <h3 className="text-2xl font-bold">85</h3>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-400">↑ 8%</span>
            <span className="text-slate-400">vs mois dernier</span>
          </div>
        </div>

        <div className="glass bg-slate-800/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <FaFileMedical className="text-2xl text-purple-500" />
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Dossiers actifs</p>
              <h3 className="text-2xl font-bold">98</h3>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-green-400">↑ 5%</span>
            <span className="text-slate-400">vs mois dernier</span>
          </div>
        </div>

        <div className="glass bg-slate-800/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <FaCalendarCheck className="text-2xl text-yellow-500" />
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Rendez-vous à venir</p>
              <h3 className="text-2xl font-bold">25</h3>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-red-400">↓ 3%</span>
            <span className="text-slate-400">vs mois dernier</span>
          </div>
        </div>
      </div>

      {/* Graphiques et statistiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique d'évolution */}
        <div className="glass bg-slate-800/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Évolution des consultations</h2>
            <select className="bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" title="Sélectionner la période">
              <option value="6m">6 mois</option>
              <option value="1y">1 an</option>
              <option value="all">Tout</option>
            </select>
          </div>
          <div className="h-[300px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Liste des patients récents */}
        <div className="glass bg-slate-800/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Patients récents</h2>
            <button className="text-blue-500 text-sm hover:text-blue-400">Voir tous</button>
          </div>
          <div className="space-y-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="glass bg-slate-700/30 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <FaUserCircle className="text-2xl text-slate-400 mr-3" />
                    <div>
                      <h4 className="font-medium">{patient.name}</h4>
                      <p className="text-sm text-slate-400">{patient.diagnosis}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-slate-400">Prochaine visite</p>
                    <p className="font-medium text-blue-400">{patient.nextVisit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;