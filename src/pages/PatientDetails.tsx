import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaUserEdit, 
  FaCalendarAlt, 
  FaClipboardList, 
  FaPills, 
  FaChartLine,
  FaExclamationTriangle,
  FaFileMedical,
  FaFileUpload,
  FaTrashAlt
} from 'react-icons/fa';

const PatientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Données fictives du patient pour la démonstration
  const patientData = {
    id: id,
    name: 'Ahmed Mehdi',
    age: 34,
    gender: 'Homme',
    birthDate: '16/08/1990',
    photo: null,
    contact: '+213 555 123 456',
    email: 'ahmed.mehdi@email.com',
    address: '123 Rue Mohamed V, Alger',
    emergencyContact: 'Mounir Mehdi (Frère) - +213 555 789 012',
    status: 'urgent',
    diagnosis: 'TOC, Anxiété généralisée',
    lastVisit: '12/04/2025',
    nextVisit: '19/04/2025',
    notes: 'Patient présentant des rituels de vérification (portes, fenêtres, robinets) et des inquiétudes excessives concernant la sécurité de sa famille.',
    consultations: [
      {
        date: '12/04/2025',
        type: 'Suivi',
        notes: 'Le patient rapporte une augmentation de l\'anxiété liée au travail. Rituels de vérification plus fréquents, interfèrent avec les activités quotidiennes. Cognitions intrusives persistantes.',
        prescription: 'Sertraline 100mg/jour'
      },
      {
        date: '01/03/2025',
        type: 'Évaluation psychologique',
        notes: 'Échelle Y-BOCS administrée: score 26/40 indiquant un TOC sévère. Le patient reconnaît l\'irrationalité des pensées mais se sent incapable de résister aux compulsions.',
        prescription: 'Sertraline 75mg/jour'
      },
      {
        date: '15/01/2025',
        type: 'Première consultation',
        notes: 'Patient référé par médecin généraliste. Décrit des symptômes obsessionnels-compulsifs débutés il y a environ 1 an, s\'aggravant progressivement. Antécédents familiaux d\'anxiété chez la mère.',
        prescription: 'Sertraline 50mg/jour + orientation vers TCC'
      }
    ],
    documents: [
      { name: 'Résultats Y-BOCS.pdf', type: 'pdf', date: '01/03/2025' },
      { name: 'IRM cérébrale.jpg', type: 'image', date: '10/12/2024' },
      { name: 'Questionnaire d\'anxiété.pdf', type: 'pdf', date: '15/01/2025' }
    ],
    treatments: [
      { name: 'Sertraline (Zoloft)', type: 'ISRS', dosage: '100mg/jour', startDate: '15/01/2025', status: 'En cours' },
      { name: 'TCC - Exposition et prévention de la réponse', type: 'Psychothérapie', frequency: '1 séance/semaine', startDate: '22/01/2025', status: 'En cours' }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/patients"
            className="p-2 rounded-md bg-slate-700 hover:bg-slate-600 text-slate-300 mr-4"
          >
            <FaArrowLeft />
          </Link>
          <h1 className="text-3xl font-display font-bold text-white">
            Dossier Patient
          </h1>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="btn-secondary">
            <FaUserEdit className="mr-2" />
            Modifier
          </button>
          <button className="btn-primary">
            <FaFileMedical className="mr-2" />
            Nouvelle consultation
          </button>
        </div>
      </div>
      
      {/* En-tête du patient */}
      <div className="glass p-6 rounded-lg">
        <div className="flex items-start">
          <div className="mr-6">
            {patientData.photo ? (
              <img 
                src={patientData.photo} 
                alt={patientData.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500" 
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 border-2 border-slate-600">
                <FaUserEdit size={40} />
              </div>
            )}
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold">{patientData.name}</h2>
              <span className={`ml-4 px-2 py-1 text-xs font-medium rounded-md ${
                patientData.status === 'urgent' 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50' 
                  : 'bg-green-500/20 text-green-400 border border-green-500/50'
              }`}>
                {patientData.status === 'urgent' && <FaExclamationTriangle className="inline mr-1" />}
                {patientData.status === 'urgent' ? 'Cas urgent' : 'Suivi actif'}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 mt-4">
              <div>
                <p className="text-xs text-slate-400">Âge / Genre</p>
                <p className="text-slate-200">{patientData.age} ans / {patientData.gender}</p>
              </div>
              
              <div>
                <p className="text-xs text-slate-400">Diagnostic</p>
                <p className="text-blue-400">{patientData.diagnosis}</p>
              </div>
              
              <div>
                <p className="text-xs text-slate-400">Dernière visite</p>
                <p className="text-slate-200">{patientData.lastVisit}</p>
              </div>
              
              <div>
                <p className="text-xs text-slate-400">Prochaine visite</p>
                <p className="text-slate-200">{patientData.nextVisit}</p>
              </div>
              
              <div>
                <p className="text-xs text-slate-400">Contact</p>
                <p className="text-slate-200">{patientData.contact}</p>
              </div>
              
              <div>
                <p className="text-xs text-slate-400">Adresse</p>
                <p className="text-slate-200">{patientData.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informations générales */}
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-400">Date de naissance</p>
              <p className="text-slate-200">{patientData.birthDate}</p>
            </div>
            
            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="text-slate-200">{patientData.email}</p>
            </div>
            
            <div>
              <p className="text-xs text-slate-400">Contact d'urgence</p>
              <p className="text-slate-200">{patientData.emergencyContact}</p>
            </div>
            
            <div>
              <p className="text-xs text-slate-400">Notes</p>
              <p className="text-slate-200">{patientData.notes}</p>
            </div>
          </div>
        </div>
        
        {/* Historique des consultations */}
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Historique des consultations</h3>
            <button className="text-sm text-blue-400 hover:text-blue-300">Voir tout</button>
          </div>
          
          <div className="space-y-4">
            {patientData.consultations.map((consultation, index) => (
              <div key={index} className="glass bg-slate-800/30 p-4 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-500 mr-2" size={14} />
                    <span className="font-medium">{consultation.date}</span>
                    <span className="ml-3 text-xs px-2 py-0.5 bg-slate-700 rounded-full">{consultation.type}</span>
                  </div>
                  
                  <button className="text-slate-400 hover:text-slate-300">
                    <FaUserEdit size={14} />
                  </button>
                </div>
                
                <p className="text-sm text-slate-300 mb-3">{consultation.notes}</p>
                
                {consultation.prescription && (
                  <div className="flex items-center text-xs text-green-400">
                    <FaPills className="mr-1" size={12} />
                    <span>Prescription: {consultation.prescription}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Traitements actuels */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Traitements actuels</h3>
            <button className="text-sm text-blue-400 hover:text-blue-300">Détails</button>
          </div>
          
          <div className="space-y-4">
            {patientData.treatments.map((treatment, index) => (
              <div key={index} className="glass bg-slate-800/30 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{treatment.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{treatment.type}</p>
                    {treatment.dosage && (
                      <p className="text-xs text-slate-400">{treatment.dosage}</p>
                    )}
                    {treatment.frequency && (
                      <p className="text-xs text-slate-400">{treatment.frequency}</p>
                    )}
                  </div>
                  
                  <div className={`px-2 py-1 text-xs font-medium rounded-md ${
                    treatment.status === 'En cours' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {treatment.status}
                  </div>
                </div>
                
                <div className="mt-2 pt-2 border-t border-slate-700 text-xs text-slate-400">
                  Depuis: {treatment.startDate}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-700">
            <button className="w-full btn-secondary py-2 text-sm">
              <FaPills className="mr-2" />
              Ajouter un traitement
            </button>
          </div>
        </div>
        
        {/* Documents */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Documents</h3>
            <button className="text-sm text-blue-400 hover:text-blue-300">Voir tout</button>
          </div>
          
          <div className="space-y-3">
            {patientData.documents.map((document, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-slate-700/30 rounded-lg transition-colors">
                <div className="flex items-center">
                  <div className={`p-2 rounded-md mr-3 ${
                    document.type === 'pdf' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    <FaFileMedical size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{document.name}</p>
                    <p className="text-xs text-slate-400">{document.date}</p>
                  </div>
                </div>
                
                <button className="text-slate-400 hover:text-slate-300">
                  <FaTrashAlt size={14} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-700">
            <button className="w-full btn-secondary py-2 text-sm">
              <FaFileUpload className="mr-2" />
              Ajouter un document
            </button>
          </div>
        </div>
        
        {/* Évolution */}
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Évolution du patient</h3>
            <button className="text-sm text-blue-400 hover:text-blue-300">Ajouter données</button>
          </div>
          
          <div className="h-64 glass bg-slate-800/30 p-4 rounded-lg flex flex-col items-center justify-center">
            <FaChartLine size={32} className="text-slate-600 mb-3" />
            <p className="text-slate-400 text-center">Les graphiques d'évolution seront affichés ici</p>
            <p className="text-slate-500 text-center text-sm mt-1">Anxiété, humeur, sommeil, etc.</p>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="btn-secondary py-2 text-sm">
              <FaClipboardList className="mr-2" />
              Échelles psychométriques
            </button>
            
            <button className="btn-secondary py-2 text-sm">
              <FaChartLine className="mr-2" />
              Rapport d'évolution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;