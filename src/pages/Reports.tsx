import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaPrint, FaCalendarAlt, FaUserInjured } from 'react-icons/fa';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState('patient');
  const [selectedPatient, setSelectedPatient] = useState('');
  const [dateRange, setDateRange] = useState('month');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  // Liste fictive de patients
  const patients = [
    { id: '1', name: 'Ahmed Mehdi' },
    { id: '2', name: 'Leila Boudali' },
    { id: '3', name: 'Karim Tazi' },
    { id: '4', name: 'Sofia Amrani' },
    { id: '5', name: 'Hassan Benomar' }
  ];

  // Données fictives pour les rapports récents
  const recentReports = [
    {
      id: 1,
      title: 'Rapport d\'évaluation psychologique - Ahmed Mehdi',
      date: '14/04/2025',
      type: 'Évaluation',
      patient: 'Ahmed Mehdi',
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Compte-rendu de thérapie - Leila Boudali',
      date: '10/04/2025',
      type: 'Suivi',
      patient: 'Leila Boudali',
      size: '1.8 MB'
    },
    {
      id: 3,
      title: 'Bilan mensuel - Mars 2025',
      date: '31/03/2025',
      type: 'Bilan',
      patient: null,
      size: '4.2 MB'
    },
    {
      id: 4,
      title: 'Synthèse d\'hospitalisation - Sofia Amrani',
      date: '25/03/2025',
      type: 'Hospitalisation',
      patient: 'Sofia Amrani',
      size: '3.5 MB'
    },
    {
      id: 5,
      title: 'Rapport pour assurance - Karim Tazi',
      date: '20/03/2025',
      type: 'Administratif',
      patient: 'Karim Tazi',
      size: '1.2 MB'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl font-display font-bold text-white"
        >
          Rapports
        </motion.h1>
      </div>
      
      {/* Générateur de rapports */}
      <motion.div variants={itemVariants} className="glass p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Générer un nouveau rapport</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Type de rapport
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="patient">Rapport patient individuel</option>
              <option value="summary">Résumé de consultation</option>
              <option value="evolution">Évolution thérapeutique</option>
              <option value="monthly">Bilan mensuel</option>
              <option value="referral">Lettre de référence</option>
              <option value="insurance">Document d'assurance</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Patient
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUserInjured className="h-4 w-4 text-slate-400" />
              </div>
              <select
                value={selectedPatient}
                onChange={(e) => setSelectedPatient(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={reportType === 'monthly'}
              >
                <option value="">Sélectionner un patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>{patient.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Période
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="h-4 w-4 text-slate-400" />
              </div>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="session">Dernière session</option>
                <option value="week">Semaine dernière</option>
                <option value="month">Mois dernier</option>
                <option value="quarter">Trimestre</option>
                <option value="year">Année</option>
                <option value="custom">Période personnalisée</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Éléments à inclure
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include_personal"
                defaultChecked
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="include_personal" className="ml-2 text-sm text-slate-300">
                Informations personnelles
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include_diagnosis"
                defaultChecked
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="include_diagnosis" className="ml-2 text-sm text-slate-300">
                Diagnostic
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include_treatment"
                defaultChecked
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="include_treatment" className="ml-2 text-sm text-slate-300">
                Traitement actuel
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include_evolution"
                defaultChecked
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="include_evolution" className="ml-2 text-sm text-slate-300">
                Évolution
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include_notes"
                defaultChecked
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="include_notes" className="ml-2 text-sm text-slate-300">
                Notes cliniques
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="include_graphs"
                defaultChecked
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="include_graphs" className="ml-2 text-sm text-slate-300">
                Graphiques d'évolution
              </label>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="btn-primary">
            <FaFileAlt className="mr-2" />
            Générer le rapport
          </button>
        </div>
      </motion.div>
      
      {/* Rapports récents */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold mb-4">Rapports récents</h2>
        
        <div className="glass rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Titre</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Type</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Patient</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Taille</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {recentReports.map((report) => (
                <tr key={report.id} className="hover:bg-slate-700/30 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <FaFileAlt className="text-blue-500 mr-3" />
                      <span className="font-medium">{report.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-300">{report.date}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-300">
                    {report.patient || '-'}
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-300">{report.size}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300" title="Télécharger">
                        <FaDownload size={14} />
                      </button>
                      <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300" title="Imprimer">
                        <FaPrint size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Reports;