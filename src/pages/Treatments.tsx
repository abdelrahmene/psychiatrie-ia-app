import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserInjured, FaPills, FaHandHoldingMedical, FaFileMedical, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Treatments: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState('1'); // Ahmed Mehdi par défaut
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['psychotherapy']);
  
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

  // Catégories de traitements
  const treatmentCategories = [
    {
      id: 'psychotherapy',
      name: 'Psychothérapies',
      treatments: [
        { 
          id: 'cbt', 
          name: 'Thérapie cognitive comportementale (TCC)',
          description: 'Approche structurée visant à modifier les schémas de pensée et de comportement.',
          efficacyRate: 70,
          duration: '12-16 semaines',
          forDisorders: ['TOC', 'Anxiété', 'Dépression', 'Phobies'],
          steps: ['Identification des pensées automatiques négatives', 'Restructuration cognitive', 'Exposition progressive', 'Prévention de la réponse', 'Développement de compétences d\'adaptation']
        },
        { 
          id: 'dbt', 
          name: 'Thérapie comportementale dialectique (DBT)',
          description: 'Combine TCC avec concepts de pleine conscience et d\'acceptation.',
          efficacyRate: 65,
          duration: '6-12 mois',
          forDisorders: ['Trouble de la personnalité borderline', 'Idéations suicidaires', 'Troubles émotionnels'],
          steps: ['Pleine conscience', 'Tolérance à la détresse', 'Régulation émotionnelle', 'Efficacité interpersonnelle']
        },
        { 
          id: 'act', 
          name: 'Thérapie d\'acceptation et d\'engagement (ACT)',
          description: 'Développe la flexibilité psychologique et l\'acceptation des pensées difficiles.',
          efficacyRate: 60,
          duration: '8-12 semaines',
          forDisorders: ['Anxiété', 'Dépression', 'Stress chronique', 'Douleur chronique'],
          steps: ['Acceptation', 'Défusion cognitive', 'Présence attentive', 'Perspective de soi', 'Clarification des valeurs', 'Action engagée']
        },
        { 
          id: 'psychodynamic', 
          name: 'Thérapie psychodynamique',
          description: 'Explore les conflits inconscients et les expériences passées.',
          efficacyRate: 55,
          duration: '6 mois - 2 ans',
          forDisorders: ['Dépression', 'Anxiété', 'Problèmes relationnels', 'Troubles de la personnalité'],
          steps: ['Exploration de l\'inconscient', 'Analyse des mécanismes de défense', 'Travail sur les relations d\'objet', 'Transfert et contre-transfert']
        }
      ]
    },
    {
      id: 'pharmacology',
      name: 'Traitements pharmacologiques',
      treatments: [
        { 
          id: 'ssri', 
          name: 'Inhibiteurs sélectifs de la recapture de la sérotonine (ISRS)',
          description: 'Augmentent les niveaux de sérotonine dans le cerveau.',
          efficacyRate: 65,
          duration: '4-6 semaines pour effet complet',
          forDisorders: ['Dépression', 'TOC', 'Anxiété', 'Trouble panique'],
          medications: [
            { name: 'Fluoxétine (Prozac)', dosage: '20-80 mg/jour', sideEffects: 'Nausées, insomnie, dysfonction sexuelle' },
            { name: 'Sertraline (Zoloft)', dosage: '50-200 mg/jour', sideEffects: 'Somnolence, vertiges, sécheresse buccale' },
            { name: 'Escitalopram (Lexapro)', dosage: '10-20 mg/jour', sideEffects: 'Fatigue, transpiration, tremblements' }
          ]
        },
        { 
          id: 'snri', 
          name: 'Inhibiteurs de la recapture de la sérotonine et de la noradrénaline (IRSN)',
          description: 'Augmentent les niveaux de sérotonine et de noradrénaline.',
          efficacyRate: 70,
          duration: '4-6 semaines pour effet complet',
          forDisorders: ['Dépression', 'Anxiété', 'Douleur chronique'],
          medications: [
            { name: 'Venlafaxine (Effexor)', dosage: '75-225 mg/jour', sideEffects: 'Hypertension, nausées, somnolence' },
            { name: 'Duloxétine (Cymbalta)', dosage: '30-120 mg/jour', sideEffects: 'Constipation, sécheresse buccale, fatigue' }
          ]
        },
        { 
          id: 'antipsychotics', 
          name: 'Antipsychotiques atypiques',
          description: 'Agissent sur les récepteurs de dopamine et de sérotonine.',
          efficacyRate: 75,
          duration: '2-4 semaines pour effet complet',
          forDisorders: ['Schizophrénie', 'Trouble bipolaire', 'Psychose', 'TOC réfractaire'],
          medications: [
            { name: 'Rispéridone (Risperdal)', dosage: '2-8 mg/jour', sideEffects: 'Prise de poids, somnolence, hyperprolactinémie' },
            { name: 'Olanzapine (Zyprexa)', dosage: '5-20 mg/jour', sideEffects: 'Prise de poids importante, hyperglycémie' },
            { name: 'Aripiprazole (Abilify)', dosage: '10-30 mg/jour', sideEffects: 'Anxiété, insomnie, akathisie' }
          ]
        }
      ]
    },
    {
      id: 'alternative',
      name: 'Approches complémentaires',
      treatments: [
        { 
          id: 'mindfulness', 
          name: 'Méditation de pleine conscience',
          description: 'Pratique de l\'attention au moment présent sans jugement.',
          efficacyRate: 50,
          duration: 'Pratique régulière recommandée',
          forDisorders: ['Anxiété', 'Dépression', 'Stress', 'Troubles du sommeil'],
          steps: ['Respiration consciente', 'Body scan', 'Méditation assise', 'Marche méditative', 'Intégration dans la vie quotidienne']
        },
        { 
          id: 'exercise', 
          name: 'Activité physique régulière',
          description: 'Programme structuré d\'exercices adaptés au patient.',
          efficacyRate: 45,
          duration: '150 minutes/semaine minimum',
          forDisorders: ['Dépression', 'Anxiété', 'Stress'],
          steps: ['Évaluation de la condition physique', 'Programme personnalisé', 'Exercices aérobiques', 'Exercices de renforcement', 'Suivi régulier des progrès']
        }
      ]
    }
  ];

  // Gérer l'expansion des catégories
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  // Obtenir les informations du patient sélectionné
  const selectedPatientInfo = patients.find(patient => patient.id === selectedPatient);

  // Trouver le traitement sélectionné
  const getSelectedTreatmentInfo = () => {
    if (!selectedTreatment) return null;
    
    for (const category of treatmentCategories) {
      const treatment = category.treatments.find(t => t.id === selectedTreatment);
      if (treatment) return { ...treatment, category: category.name };
    }
    
    return null;
  };

  const treatmentInfo = getSelectedTreatmentInfo();

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
          Traitements
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUserInjured className="h-4 w-4 text-slate-400" />
            </div>
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              title="Sélectionner un patient"
            >
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>{patient.name}</option>
              ))}
            </select>
          </div>
        </motion.div>
      </div>
      
      {/* En-tête patient */}
      <motion.div variants={itemVariants} className="glass p-6 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{selectedPatientInfo?.name}</h2>
            <p className="text-slate-400 mt-1">
              Diagnostic: <span className="text-blue-400">{selectedPatientInfo?.diagnosis}</span>
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <button className="btn-primary flex items-center">
              <FaFileMedical className="mr-2" />
              Nouveau plan de traitement
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Liste des traitements */}
        <motion.div variants={itemVariants} className="lg:col-span-4">
          <div className="card h-full overflow-hidden flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Options thérapeutiques</h3>
            
            <div className="flex-grow overflow-y-auto pr-2">
              <div className="space-y-4">
                {treatmentCategories.map((category) => (
                  <div key={category.id} className="glass bg-slate-800/40 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium">{category.name}</span>
                      {expandedCategories.includes(category.id) ? (
                        <FaChevronDown className="transition-transform" />
                      ) : (
                        <FaChevronRight className="transition-transform" />
                      )}
                    </button>
                    
                    {expandedCategories.includes(category.id) && (
                      <div className="px-4 pb-4 pt-1 space-y-2">
                        {category.treatments.map((treatment) => (
                          <div 
                            key={treatment.id}
                            className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${
                              selectedTreatment === treatment.id 
                                ? 'bg-blue-500/20 border border-blue-500/50' 
                                : 'hover:bg-slate-700/50'
                            }`}
                            onClick={() => setSelectedTreatment(treatment.id)}
                          >
                            <span className="text-sm">{treatment.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Détails du traitement */}
        <motion.div variants={itemVariants} className="lg:col-span-8">
          {treatmentInfo ? (
            <div className="card h-full overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{treatmentInfo.name}</h3>
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md">{treatmentInfo.category}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="glass bg-slate-800/30 p-3 rounded-md">
                  <div className="text-xs text-slate-400 mb-1">Efficacité</div>
                  <div className="text-lg font-semibold">{treatmentInfo.efficacyRate}%</div>
                  <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
                    <div 
                      className={`h-2 bg-blue-500 rounded-full w-[${treatmentInfo.efficacyRate}%]`}
                    ></div>
                  </div>
                </div>
                
                <div className="glass bg-slate-800/30 p-3 rounded-md">
                  <div className="text-xs text-slate-400 mb-1">Durée</div>
                  <div className="text-lg font-semibold">{treatmentInfo.duration}</div>
                </div>
                
                <div className="glass bg-slate-800/30 p-3 rounded-md">
                  <div className="text-xs text-slate-400 mb-1">Recommandé pour</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {'forDisorders' in treatmentInfo && treatmentInfo.forDisorders.map((disorder, index) => (
                      <span key={index} className="text-xs px-2 py-0.5 bg-slate-700 rounded-full">{disorder}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Description</h4>
                <p className="text-slate-300">{treatmentInfo.description}</p>
              </div>
              
              {'steps' in treatmentInfo && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-300 mb-2">Étapes du traitement</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {treatmentInfo.steps.map((step, index) => (
                      <li key={index} className="text-slate-300">{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {'medications' in treatmentInfo && (
                <div>
                  <h4 className="text-sm font-medium text-slate-300 mb-2">Médicaments</h4>
                  <div className="overflow-hidden rounded-md border border-slate-700">
                    <table className="w-full">
                      <thead className="bg-slate-800">
                        <tr>
                          <th className="py-2 px-4 text-left text-xs font-medium text-slate-300">Nom</th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-slate-300">Posologie</th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-slate-300">Effets secondaires</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700">
                        {treatmentInfo.medications.map((medication, index) => (
                          <tr key={index} className="hover:bg-slate-700/30">
                            <td className="py-2 px-4 text-sm">{medication.name}</td>
                            <td className="py-2 px-4 text-sm text-slate-300">{medication.dosage}</td>
                            <td className="py-2 px-4 text-sm text-slate-300">{medication.sideEffects}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              <div className="mt-auto pt-6 border-t border-slate-700 flex justify-between">
                <button className="btn-secondary">
                  <FaFileMedical className="mr-2" />
                  Ajouter au dossier
                </button>
                
                <button className="btn-primary">
                  <FaPills className="mr-2" />
                  Prescrire
                </button>
              </div>
            </div>
          ) : (
            <div className="card h-full flex flex-col items-center justify-center text-center p-8">
              <div className="p-4 rounded-full bg-slate-800/60 mb-4">
                <FaHandHoldingMedical className="text-slate-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sélectionnez un traitement</h3>
              <p className="text-slate-400 max-w-md">
                Choisissez un traitement dans la liste à gauche pour voir les détails et éventuellement le prescrire.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Treatments;