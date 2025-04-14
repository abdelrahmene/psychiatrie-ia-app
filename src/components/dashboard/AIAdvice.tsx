import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBrain, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const AIAdvice: React.FC = () => {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-yellow-500/20 text-yellow-500 mr-3">
          <FaLightbulb />
        </div>
        <h2 className="text-xl font-semibold">Conseil IA du jour</h2>
      </div>

      <div className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-lg glass bg-slate-700/30 border border-slate-600"
        >
          <div className="flex items-center mb-2">
            <FaBrain className="text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Assistant IA</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Pour les patients présentant des symptômes de TOC, n'oubliez pas que l'exposition et prévention de la réponse (EPR) a montré une efficacité de 65% quand elle est combinée avec des inhibiteurs sélectifs de la recapture de la sérotonine (ISRS). 
            <br /><br />
            Un nouvel article dans le Journal of Psychiatric Research suggère d'augmenter la durée des séances EPR à 90 minutes pour améliorer les résultats.
          </p>
        </motion.div>

        <div className="flex justify-between mt-4">
          <span className="text-xs text-slate-500">Source: DSM-5, mise à jour 2024</span>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300">
              <FaThumbsUp size={14} />
            </button>
            <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300">
              <FaThumbsDown size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvice;