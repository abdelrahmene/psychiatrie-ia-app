import React from 'react';
import { FaBookOpen, FaStar, FaDownload, FaShare } from 'react-icons/fa';

const ReadingSuggestion: React.FC = () => {
  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-blue-500/20 text-blue-500 mr-3">
          <FaBookOpen />
        </div>
        <h2 className="text-xl font-semibold">Lecture recommandée</h2>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="glass bg-slate-700/30 rounded-lg border border-slate-600 p-4 h-full flex flex-col">
          <div className="flex gap-4">
            {/* Image de couverture */}
            <div className="flex-shrink-0 w-20 h-28 bg-gradient-to-br from-blue-700 to-blue-900 rounded-md flex items-center justify-center">
              <span className="text-white text-xs text-center">DSM-5-TR</span>
            </div>
            
            {/* Détails */}
            <div className="flex-grow">
              <h3 className="font-semibold mb-1">Mise à jour DSM-5-TR</h3>
              <p className="text-xs text-slate-400 mb-1">Section: Troubles anxieux</p>
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={10} className={i < 4 ? "text-yellow-500" : "text-slate-600"} />
                  ))}
                </div>
                <span className="text-xs text-slate-500 ml-1">4.0/5.0</span>
              </div>
              <p className="text-xs text-slate-300 line-clamp-2">
                Nouveaux critères diagnostiques pour l'anxiété sociale et les phobies spécifiques. Inclut des échelles d'évaluation actualisées.
              </p>
            </div>
          </div>
          
          <div className="text-xs text-slate-400 mt-3">
            <p>Suggéré en lien avec vos patients récents présentant des troubles anxieux.</p>
          </div>
          
          <div className="mt-auto pt-3 flex justify-between">
            <span className="text-xs text-slate-500">Publié: Oct 2024</span>
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300">
                <FaDownload size={12} />
              </button>
              <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300">
                <FaShare size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-400 hover:text-blue-300">
          Voir toutes les recommandations
        </button>
      </div>
    </div>
  );
};

export default ReadingSuggestion;