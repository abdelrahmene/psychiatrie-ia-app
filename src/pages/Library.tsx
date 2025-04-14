import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaBookMedical, 
  FaFileAlt, 
  FaStar, 
  FaRegStar, 
  FaDownload, 
  FaShareAlt, 
  FaBookmark, 
  FaRegBookmark,
  FaFilter
} from 'react-icons/fa';

const Library: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('dsm');
  const [favorites, setFavorites] = useState<string[]>(['dsm-5-anxiety', 'recent-advances-ocd', 'cognitive-therapy-protocols']);
  
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

  // Données fictives pour la bibliothèque
  const documents = {
    dsm: [
      {
        id: 'dsm-5-anxiety',
        title: 'DSM-5-TR: Troubles anxieux',
        type: 'Manuel',
        category: 'dsm',
        description: 'Section complète sur les troubles anxieux, incluant critères diagnostiques, épidémiologie, et nouveaux marqueurs cliniques.',
        date: 'Octobre 2024',
        rating: 5
      },
      {
        id: 'dsm-5-depressive',
        title: 'DSM-5-TR: Troubles dépressifs',
        type: 'Manuel',
        category: 'dsm',
        description: 'Section mise à jour sur les troubles dépressifs, incluant le trouble dépressif majeur, persistant et autres spécifiés.',
        date: 'Octobre 2024',
        rating: 4
      },
      {
        id: 'dsm-5-bipolar',
        title: 'DSM-5-TR: Troubles bipolaires',
        type: 'Manuel',
        category: 'dsm',
        description: 'Critères diagnostiques et considérations cliniques pour les troubles bipolaires et apparentés.',
        date: 'Octobre 2024',
        rating: 4
      },
      {
        id: 'dsm-5-ocd',
        title: 'DSM-5-TR: TOC et troubles apparentés',
        type: 'Manuel',
        category: 'dsm',
        description: 'Section sur le trouble obsessionnel-compulsif et troubles apparentés, incluant la dysmorphie corporelle et la thésaurisation pathologique.',
        date: 'Octobre 2024',
        rating: 5
      },
      {
        id: 'dsm-5-trauma',
        title: 'DSM-5-TR: Troubles liés aux traumatismes',
        type: 'Manuel',
        category: 'dsm',
        description: 'Section sur les troubles liés aux traumatismes et au stress, incluant le TSPT et les troubles de l\'adaptation.',
        date: 'Octobre 2024',
        rating: 4
      }
    ],
    articles: [
      {
        id: 'recent-advances-ocd',
        title: 'Avancées récentes dans le traitement du TOC',
        type: 'Article',
        category: 'articles',
        description: 'Revue des nouvelles approches thérapeutiques pour le TOC, incluant les thérapies augmentées par réalité virtuelle et la stimulation magnétique transcranienne.',
        author: 'Benali, K. et al.',
        date: 'Mars 2025',
        journal: 'Journal of Psychiatric Research',
        rating: 5
      },
      {
        id: 'neurobiology-anxiety',
        title: 'Neurobiologie des troubles anxieux',
        type: 'Article',
        category: 'articles',
        description: 'Examen des mécanismes neurobiologiques impliqués dans les troubles anxieux, avec focus sur les circuits amygdaliens et les systèmes de neurotransmetteurs.',
        author: 'Lahmadi, S. et al.',
        date: 'Janvier 2025',
        journal: 'Frontiers in Psychiatry',
        rating: 4
      },
      {
        id: 'psychotherapy-digital',
        title: 'Psychothérapie à l\'ère numérique',
        type: 'Article',
        category: 'articles',
        description: 'Analyse de l\'efficacité des thérapies délivrées via des plateformes numériques, incluant les applications mobiles et les thérapies guidées par IA.',
        author: 'Tazi, M. et al.',
        date: 'Février 2025',
        journal: 'Journal of Medical Internet Research',
        rating: 3
      }
    ],
    protocols: [
      {
        id: 'cognitive-therapy-protocols',
        title: 'Protocoles de thérapie cognitive pour l\'anxiété généralisée',
        type: 'Protocole',
        category: 'protocols',
        description: 'Guide étape par étape pour la mise en œuvre de la thérapie cognitive pour le trouble d\'anxiété généralisée en contexte clinique.',
        author: 'Beck Institute',
        date: 'Décembre 2024',
        rating: 5
      },
      {
        id: 'exposure-protocol-ocd',
        title: 'Protocole d\'exposition et prévention de la réponse pour le TOC',
        type: 'Protocole',
        category: 'protocols',
        description: 'Protocole détaillé pour la conduite de l\'EPR, incluant des exemples de hiérarchies d\'exposition et techniques de gestion de l\'anxiété.',
        author: 'Foa, E. et al.',
        date: 'Novembre 2024',
        rating: 4
      },
      {
        id: 'bipolar-management',
        title: 'Gestion des patients bipolaires en contexte ambulatoire',
        type: 'Protocole',
        category: 'protocols',
        description: 'Protocole de suivi et gestion des patients atteints de trouble bipolaire, incluant évaluation du risque suicidaire et ajustement pharmacologique.',
        author: 'Société Algérienne de Psychiatrie',
        date: 'Janvier 2025',
        rating: 4
      }
    ],
    scales: [
      {
        id: 'ybocs-scale',
        title: 'Échelle d\'obsession-compulsion de Yale-Brown (Y-BOCS)',
        type: 'Échelle',
        category: 'scales',
        description: 'Outil d\'évaluation standardisé pour mesurer la sévérité des symptômes obsessionnels-compulsifs, incluant instructions d\'administration et interprétation.',
        date: 'Version 2023',
        rating: 5
      },
      {
        id: 'hama-scale',
        title: 'Échelle d\'anxiété de Hamilton (HAM-A)',
        type: 'Échelle',
        category: 'scales',
        description: 'Échelle clinique pour l\'évaluation de la sévérité de l\'anxiété, couvrant symptômes psychiques et somatiques.',
        date: 'Version 2022',
        rating: 4
      },
      {
        id: 'madrs-scale',
        title: 'Échelle de dépression de Montgomery-Åsberg (MADRS)',
        type: 'Échelle',
        category: 'scales',
        description: 'Échelle de dépression sensible aux changements, particulièrement utile pour évaluer l\'effet des traitements antidépresseurs.',
        date: 'Version 2024',
        rating: 4
      },
      {
        id: 'mood-chart',
        title: 'Tableau de suivi de l\'humeur pour les troubles bipolaires',
        type: 'Échelle',
        category: 'scales',
        description: 'Outil graphique permettant aux patients de suivre leurs fluctuations d\'humeur, sommeil, et médication sur une période prolongée.',
        date: 'Version 2025',
        rating: 3
      }
    ]
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Filtrer les documents selon recherche et catégorie
  const getFilteredDocuments = () => {
    const allDocuments = [
      ...documents.dsm,
      ...documents.articles,
      ...documents.protocols,
      ...documents.scales
    ];
    
    return allDocuments.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filterCategory === 'all' || 
                             filterCategory === 'favorites' ? true : doc.category === filterCategory;
      
      const matchesFavorites = filterCategory === 'favorites' ? favorites.includes(doc.id) : true;
      
      return matchesSearch && matchesCategory && matchesFavorites;
    });
  };

  // Obtenir les documents pour l'onglet actif
  const getTabDocuments = () => {
    switch(activeTab) {
      case 'dsm':
        return documents.dsm;
      case 'articles':
        return documents.articles;
      case 'protocols':
        return documents.protocols;
      case 'scales':
        return documents.scales;
      default:
        return [];
    }
  };

  // Rendre étoiles pour la notation
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-slate-500" />);
      }
    }
    return <div className="flex">{stars}</div>;
  };

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
          Bibliothèque
        </motion.h1>
      </div>
      
      {/* Recherche et filtres */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher dans la bibliothèque..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="h-4 w-4 text-slate-400" />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Toutes les catégories</option>
              <option value="dsm">DSM-5</option>
              <option value="articles">Articles</option>
              <option value="protocols">Protocoles</option>
              <option value="scales">Échelles</option>
              <option value="favorites">Favoris</option>
            </select>
          </div>
        </div>
      </motion.div>
      
      {/* Onglets */}
      <motion.div variants={itemVariants} className="border-b border-slate-700">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('dsm')}
            className={`px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === 'dsm' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
            }`}
          >
            DSM-5
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === 'articles' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
            }`}
          >
            Articles scientifiques
          </button>
          <button
            onClick={() => setActiveTab('protocols')}
            className={`px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === 'protocols' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
            }`}
          >
            Protocoles
          </button>
          <button
            onClick={() => setActiveTab('scales')}
            className={`px-4 py-2 font-medium text-sm border-b-2 ${
              activeTab === 'scales' 
                ? 'text-blue-400 border-blue-400' 
                : 'text-slate-400 border-transparent hover:text-slate-300 hover:border-slate-700'
            }`}
          >
            Échelles & Questionnaires
          </button>
        </div>
      </motion.div>
      
      {/* Liste des documents */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {getTabDocuments().map((doc) => (
          <div key={doc.id} className="card h-full flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 rounded-md bg-blue-500/20 text-blue-400 mr-3">
                  <FaBookMedical size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{doc.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{doc.type} • {doc.date}</p>
                </div>
              </div>
              
              <button 
                onClick={() => toggleFavorite(doc.id)}
                className="text-slate-400 hover:text-yellow-400 transition-colors"
              >
                {favorites.includes(doc.id) ? (
                  <FaBookmark className="text-yellow-400" />
                ) : (
                  <FaRegBookmark />
                )}
              </button>
            </div>
            
            <p className="text-sm text-slate-300 flex-grow">{doc.description}</p>
            
            <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-center">
              {renderStars(doc.rating)}
              
              <div className="flex space-x-2">
                <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300" title="Télécharger">
                  <FaDownload size={14} />
                </button>
                <button className="p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300" title="Partager">
                  <FaShareAlt size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Library;