import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaHistory, FaUserMd, FaChartLine, FaNotesMedical } from 'react-icons/fa';

interface DiagnosticResult {
  id: string;
  patientName: string;
  date: string;
  mainDiagnosis: string;
  confidence: number;
  differentialDiagnoses: string[];
  recommendedTests: string[];
  treatmentSuggestions: string[];
  aiNotes: string;
}

const mockDiagnostics: DiagnosticResult[] = [
  {
    id: '1',
    patientName: 'Ahmed Mehdi',
    date: '2025-04-14',
    mainDiagnosis: 'Trouble d\'anxiété généralisée',
    confidence: 85,
    differentialDiagnoses: [
      'Trouble panique',
      'Trouble dépressif majeur',
      'Trouble de stress post-traumatique'
    ],
    recommendedTests: [
      'Échelle d\'anxiété de Hamilton',
      'Questionnaire sur les inquiétudes de Penn State',
      'Bilan thyroïdien'
    ],
    treatmentSuggestions: [
      'Thérapie cognitivo-comportementale',
      'ISRS (à discuter)',
      'Techniques de relaxation'
    ],
    aiNotes: 'Le patient présente des symptômes caractéristiques du TAG avec des inquiétudes excessives dans plusieurs domaines de sa vie. Les symptômes physiques sont également cohérents avec ce diagnostic.'
  },
  {
    id: '2',
    patientName: 'Leila Boudali',
    date: '2025-04-13',
    mainDiagnosis: 'Épisode dépressif majeur',
    confidence: 92,
    differentialDiagnoses: [
      'Trouble bipolaire de type II',
      'Trouble d\'adaptation',
      'Hypothyroïdie'
    ],
    recommendedTests: [
      'Échelle de dépression de Hamilton',
      'Questionnaire sur les événements de vie',
      'Bilan biologique complet'
    ],
    treatmentSuggestions: [
      'Antidépresseur ISRS',
      'Psychothérapie de soutien',
      'Activation comportementale'
    ],
    aiNotes: 'La patiente montre des signes clairs de dépression majeure avec une altération significative du fonctionnement. Absence d\'antécédents de manie ou d\'hypomanie.'
  }
];

const Diagnosis: React.FC = () => {
  const [selectedDiagnostic, setSelectedDiagnostic] = useState<DiagnosticResult | null>(null);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-500';
    if (confidence >= 70) return 'text-blue-500';
    return 'text-yellow-500';
  };

  return (
    <div className="p-8 dark:bg-slate-900">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Diagnostic IA</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Analyse et suggestions diagnostiques basées sur l'intelligence artificielle
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des diagnostics */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <FaHistory className="mr-2" />
              Diagnostics récents
            </h2>
            <div className="space-y-4">
              {mockDiagnostics.map((diagnostic) => (
                <motion.div
                  key={diagnostic.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDiagnostic(diagnostic)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedDiagnostic?.id === diagnostic.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500'
                      : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{diagnostic.patientName}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(diagnostic.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`text-sm font-semibold ${getConfidenceColor(diagnostic.confidence)}`}>
                      {diagnostic.confidence}%
                    </span>
                  </div>
                  <p className="text-sm font-medium">{diagnostic.mainDiagnosis}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Détails du diagnostic */}
        <div className="lg:col-span-2">
          {selectedDiagnostic ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{selectedDiagnostic.patientName}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Diagnostic généré le {new Date(selectedDiagnostic.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getConfidenceColor(selectedDiagnostic.confidence)}`}>
                    {selectedDiagnostic.confidence}%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Confiance</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Diagnostic principal */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <FaUserMd className="mr-2" />
                      Diagnostic principal
                    </h3>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      <p className="font-medium text-blue-900 dark:text-blue-100">
                        {selectedDiagnostic.mainDiagnosis}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <FaChartLine className="mr-2" />
                      Diagnostics différentiels
                    </h3>
                    <ul className="space-y-2">
                      {selectedDiagnostic.differentialDiagnoses.map((diagnosis, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                          <span>{diagnosis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tests et traitements */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <FaNotesMedical className="mr-2" />
                      Tests recommandés
                    </h3>
                    <ul className="space-y-2">
                      {selectedDiagnostic.recommendedTests.map((test, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Suggestions de traitement</h3>
                    <ul className="space-y-2">
                      {selectedDiagnostic.treatmentSuggestions.map((treatment, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          <span>{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Notes IA */}
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <FaBrain className="mr-2" />
                  Notes de l'IA
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedDiagnostic.aiNotes}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex items-center justify-center h-full">
              <div className="text-center">
                <FaBrain className="mx-auto text-4xl text-gray-400 mb-4" />
                <p className="text-gray-500">Sélectionnez un diagnostic pour voir les détails</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;