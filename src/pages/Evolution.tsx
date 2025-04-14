import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserInjured, FaChartLine, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Evolution: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState('1');
  const [timeRange, setTimeRange] = useState('3m');
  
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
    { id: '1', name: 'Ahmed Mehdi', diagnosis: 'Trouble obsessionnel-compulsif' },
    { id: '2', name: 'Leila Boudali', diagnosis: 'Trouble bipolaire type II' },
    { id: '3', name: 'Karim Tazi', diagnosis: 'Anxiété généralisée' },
    { id: '4', name: 'Sofia Amrani', diagnosis: 'Dépression modérée' },
    { id: '5', name: 'Hassan Benomar', diagnosis: 'TOC, anxiété sociale' }
  ];
  
  // Données d'évolution fictives
  const moodData = [
    { date: 'Jan', score: 3, anxiety: 7, sleep: 4 },
    { date: 'Fev', score: 2, anxiety: 8, sleep: 3 },
    { date: 'Mar', score: 2, anxiety: 7, sleep: 4 },
    { date: 'Avr', score: 4, anxiety: 6, sleep: 5 },
    { date: 'Mai', score: 5, anxiety: 5, sleep: 6 },
    { date: 'Juin', score: 6, anxiety: 4, sleep: 7 },
    { date: 'Juil', score: 5, anxiety: 5, sleep: 6 },
    { date: 'Aout', score: 6, anxiety: 4, sleep: 7 },
    { date: 'Sep', score: 7, anxiety: 3, sleep: 8 },
    { date: 'Oct', score: 8, anxiety: 3, sleep: 8 },
    { date: 'Nov', score: 7, anxiety: 4, sleep: 7 },
    { date: 'Dec', score: 8, anxiety: 2, sleep: 9 }
  ];

  const ritualData = [
    { name: 'Vérification', initial: 18, current: 7 },
    { name: 'Lavage', initial: 12, current: 5 },
    { name: 'Comptage', initial: 15, current: 4 },
    { name: 'Rangement', initial: 9, current: 2 },
  ];

  const scoreData = [
    { name: 'Y-BOCS', initial: 32, month1: 28, month3: 24, month6: 18, current: 14 },
    { name: 'HAM-A', initial: 26, month1: 22, month3: 19, month6: 15, current: 12 },
    { name: 'BDI-II', initial: 20, month1: 18, month3: 16, month6: 13, current: 10 },
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
          Évolution & Suivi
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="relative mr-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUserInjured className="h-4 w-4 text-slate-400" />
            </div>
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>{patient.name}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCalendarAlt className="h-4 w-4 text-slate-400" />
            </div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1m">1 mois</option>
              <option value="3m">3 mois</option>
              <option value="6m">6 mois</option>
              <option value="1y">1 an</option>
            </select>
          </div>
        </motion.div>
      </div>
      
      {/* En-tête patient */}
      <motion.div variants={itemVariants} className="glass p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ahmed Mehdi</h2>
            <p className="text-slate-400 mt-1">
              Diagnostic: <span className="text-blue-400">Trouble obsessionnel-compulsif</span>
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button className="btn-primary flex items-center">
              <FaDownload className="mr-2" />
              Exporter rapport d'évolution
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Évolution de l'humeur */}
        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-4">Évolution de l'humeur et des symptômes</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[0, 10]} label={{ value: 'Intensité (0-10)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
                <Legend />
                <Line type="monotone" dataKey="score" name="Humeur" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="anxiety" name="Anxiété" stroke="#f87171" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="sleep" name="Sommeil" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-sm text-slate-400">
            <p>Note: Score d'humeur (0 = déprimé, 10 = excellent) | Anxiété (0 = absence, 10 = sévère) | Sommeil (0 = mauvais, 10 = excellent)</p>
          </div>
        </motion.div>
        
        {/* Évolution des rituels */}
        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-4">Évolution des comportements ritualisés</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ritualData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" label={{ value: 'Fréquence par jour', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
                <Legend />
                <Bar dataKey="initial" name="Évaluation initiale" fill="#f87171" />
                <Bar dataKey="current" name="Actuellement" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        {/* Scores aux échelles */}
        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-4">Scores aux échelles psychométriques</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155' }} />
                <Legend />
                <Line type="monotone" dataKey="initial" name="Initial" stroke="#f87171" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="month1" name="1 mois" stroke="#fb923c" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="month3" name="3 mois" stroke="#facc15" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="month6" name="6 mois" stroke="#a3e635" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="current" name="Actuel" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-sm text-slate-400">
            <p>Y-BOCS: Yale-Brown Obsessive Compulsive Scale | HAM-A: Hamilton Anxiety Rating Scale | BDI-II: Beck Depression Inventory</p>
          </div>
        </motion.div>
        
        {/* Journal de suivi */}
        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-4">Journal de suivi</h3>
          <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
            <div className="glass bg-slate-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">14/04/2025</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Amélioration</span>
              </div>
              <p className="text-sm text-slate-300">
                Patient rapporte une diminution de la fréquence des rituels de vérification (de 10 à 7 fois/jour). Attribue l'amélioration à la TCC et aux exercices d'exposition.
              </p>
            </div>
            
            <div className="glass bg-slate-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">07/04/2025</span>
                <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">Stabilité</span>
              </div>
              <p className="text-sm text-slate-300">
                Pas de changement significatif depuis la dernière session. Maintien de l'observance médicamenteuse. Quelques difficultés avec les exercices d'exposition à domicile.
              </p>
            </div>
            
            <div className="glass bg-slate-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">31/03/2025</span>
                <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded-full">Détérioration</span>
              </div>
              <p className="text-sm text-slate-300">
                Légère augmentation de l'anxiété suite à un stress professionnel. Recrudescence des comportements de vérification (portes, fenêtres). Ajustement de la technique de relaxation.
              </p>
            </div>
            
            <div className="glass bg-slate-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">24/03/2025</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Amélioration</span>
              </div>
              <p className="text-sm text-slate-300">
                Progression dans la hiérarchie d'exposition. Le patient est maintenant capable de quitter son domicile sans effectuer de vérifications multiples. Amélioration du sommeil.
              </p>
            </div>
            
            <div className="glass bg-slate-800/30 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="font-medium">17/03/2025</span>
                <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">Amélioration</span>
              </div>
              <p className="text-sm text-slate-300">
                Début de réponse au traitement médicamenteux. Diminution de l'intensité des pensées obsessionnelles. Le patient rapporte se sentir "moins prisonnier" de ses pensées.
              </p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-700">
            <button className="w-full btn-secondary py-2 text-sm">
              Ajouter une entrée au journal
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Ajout de données d'évolution */}
      <motion.div variants={itemVariants} className="glass p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Ajouter des données d'évolution</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Date d'évaluation
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Échelle d'évaluation
            </label>
            <select className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Sélectionner une échelle</option>
              <option value="ybocs">Y-BOCS (TOC)</option>
              <option value="hama">HAM-A (Anxiété)</option>
              <option value="bdi">BDI-II (Dépression)</option>
              <option value="mood">Humeur (0-10)</option>
              <option value="sleep">Sommeil (0-10)</option>
              <option value="ritual">Comportement ritualisé</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Score / Valeur
            </label>
            <input
              type="number"
              min="0"
              max="100"
              className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Entrez un score"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Notes d'observation
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Observations cliniques, comportement du patient, effets du traitement..."
          ></textarea>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="btn-primary">
            <FaChartLine className="mr-2" />
            Enregistrer les données
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Evolution;