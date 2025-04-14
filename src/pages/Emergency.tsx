import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaPhoneAlt, FaUser, FaPlus } from 'react-icons/fa';

const Emergency: React.FC = () => {
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

  // Données fictives pour les urgences
  const emergencyCases = [
    {
      id: 1,
      name: 'Ahmed Mehdi',
      age: 34,
      status: 'critical',
      issue: 'Crise suicidaire aiguë - Idéation avec plan létal',
      lastContact: '15 minutes',
      notes: 'Patient ayant exprimé des idées suicidaires précises avec plan d\'exécution (overdose médicamenteuse). A cessé son traitement depuis 5 jours. Historique de tentative de suicide il y a 8 mois.'
    },
    {
      id: 2,
      name: 'Leila Boudali',
      age: 28,
      status: 'high',
      issue: 'Episode psychotique aigu - Hallucinations et agitation',
      lastContact: '2 heures',
      notes: 'Patiente présentant des hallucinations auditives et un délire de persécution. Comportement agité et potentiellement agressif selon la famille. N\'a pas dormi depuis 48 heures.'
    },
    {
      id: 3,
      name: 'Karim Tazi',
      age: 19,
      status: 'medium',
      issue: 'Attaque de panique sévère - Hyperventilation',
      lastContact: '45 minutes',
      notes: 'Premier épisode de panique avec sensation d\'étouffement, tachycardie, tremblements et peur de mourir. Pas d\'antécédent psychiatrique connu.'
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
          Urgences psychiatriques
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex items-center">
          <button className="btn-primary">
            <FaPlus className="mr-2" />
            Nouvelle urgence
          </button>
        </motion.div>
      </div>
      
      {/* Bannière d'urgence */}
      <motion.div 
        variants={itemVariants}
        className="glass bg-red-500/20 border border-red-500/50 rounded-lg p-6"
      >
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-red-500/30 mr-4">
            <FaExclamationTriangle className="text-red-500" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">Contacts d'urgence</h2>
            <p className="text-slate-300 mt-1">Pour toute situation d'urgence psychiatrique nécessitant une intervention immédiate</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="glass bg-slate-800/40 p-4 rounded-md flex items-center">
            <div className="p-2 rounded-full bg-red-500/20 text-red-400 mr-3">
              <FaPhoneAlt size={14} />
            </div>
            <div>
              <p className="text-xs text-slate-400">SAMU psychiatrique</p>
              <p className="font-medium">15</p>
            </div>
          </div>
          
          <div className="glass bg-slate-800/40 p-4 rounded-md flex items-center">
            <div className="p-2 rounded-full bg-red-500/20 text-red-400 mr-3">
              <FaPhoneAlt size={14} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Urgences hôpital</p>
              <p className="font-medium">021 96 54 32</p>
            </div>
          </div>
          
          <div className="glass bg-slate-800/40 p-4 rounded-md flex items-center">
            <div className="p-2 rounded-full bg-red-500/20 text-red-400 mr-3">
              <FaUser size={14} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Psychiatre de garde</p>
              <p className="font-medium">Dr. Kamal DAOUD - 0555 78 90 12</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Liste des cas d'urgence */}
      <motion.div variants={itemVariants} className="space-y-4">
        {emergencyCases.map((emergency) => (
          <div 
            key={emergency.id} 
            className={`glass p-4 rounded-lg border-l-4 ${
              emergency.status === 'critical' ? 'border-red-500' :
              emergency.status === 'high' ? 'border-orange-500' :
              'border-yellow-500'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div className="flex items-center">
                <h3 className="font-semibold text-lg">{emergency.name}</h3>
                <span className="ml-2 text-sm text-slate-400">{emergency.age} ans</span>
                <span className={`ml-3 px-2 py-0.5 text-xs rounded-full ${
                  emergency.status === 'critical' ? 'bg-red-500 text-white' :
                  emergency.status === 'high' ? 'bg-orange-500 text-white' :
                  'bg-yellow-500 text-slate-900'
                }`}>
                  {emergency.status === 'critical' ? 'Critique' :
                   emergency.status === 'high' ? 'Urgent' : 'Modéré'}
                </span>
              </div>
              
              <div className="mt-2 md:mt-0 text-sm text-slate-400">
                Dernier contact: <span className="text-white">{emergency.lastContact}</span>
              </div>
            </div>
            
            <p className="text-slate-300 font-medium mb-2">{emergency.issue}</p>
            <p className="text-sm text-slate-400">{emergency.notes}</p>
            
            <div className="mt-4 flex justify-end space-x-3">
              <button className="btn-secondary py-1.5 px-3 text-sm">Appeler</button>
              <button className="btn-primary py-1.5 px-3 text-sm">Voir détails</button>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Emergency;