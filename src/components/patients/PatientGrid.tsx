import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUserCircle, 
  FaPhoneAlt, 
  FaCalendarAlt, 
  FaExclamationTriangle,
  FaEllipsisV
} from 'react-icons/fa';

interface PatientGridProps {
  searchQuery: string;
  statusFilter: string;
}

const PatientGrid: React.FC<PatientGridProps> = ({ searchQuery, statusFilter }) => {
  // Données fictives de patients
  const patients = [
    {
      id: 1,
      name: 'Ahmed Mehdi',
      photo: null,
      age: 34,
      gender: 'M',
      diagnosis: 'Dépression majeure, tendances suicidaires',
      lastVisit: '12/04/2025',
      nextVisit: '19/04/2025',
      status: 'urgent',
      contact: '+213 555 123 456'
    },
    {
      id: 2,
      name: 'Leila Boudali',
      photo: null,
      age: 28,
      gender: 'F',
      diagnosis: 'Trouble bipolaire type II',
      lastVisit: '01/04/2025',
      nextVisit: '15/04/2025',
      status: 'active',
      contact: '+213 555 789 123'
    },
    {
      id: 3,
      name: 'Karim Tazi',
      photo: null,
      age: 19,
      gender: 'M',
      diagnosis: 'Anxiété généralisée',
      lastVisit: '08/04/2025',
      nextVisit: '22/04/2025',
      status: 'active',
      contact: '+213 555 456 789'
    },
    {
      id: 4,
      name: 'Sofia Amrani',
      photo: null,
      age: 42,
      gender: 'F',
      diagnosis: 'Dépression modérée',
      lastVisit: '09/04/2025',
      nextVisit: '23/04/2025',
      status: 'active',
      contact: '+213 555 234 567'
    },
    {
      id: 5,
      name: 'Hassan Benomar',
      photo: null,
      age: 56,
      gender: 'M',
      diagnosis: 'TOC, anxiété sociale',
      lastVisit: '02/04/2025',
      nextVisit: '16/04/2025',
      status: 'active',
      contact: '+213 555 876 543'
    },
    {
      id: 6,
      name: 'Nadia Tazi',
      photo: null,
      age: 31,
      gender: 'F',
      diagnosis: 'Trouble anxieux généralisé',
      lastVisit: '06/04/2025',
      nextVisit: '20/04/2025',
      status: 'active',
      contact: '+213 555 345 678'
    },
    {
      id: 7,
      name: 'Mohammed Saidi',
      photo: null,
      age: 47,
      gender: 'M',
      diagnosis: 'Dépression post-traumatique',
      lastVisit: '31/03/2025',
      nextVisit: '14/04/2025',
      status: 'active',
      contact: '+213 555 987 654'
    },
    {
      id: 8,
      name: 'Amina Oudghiri',
      photo: null,
      age: 23,
      gender: 'F',
      diagnosis: 'Anxiété sociale, attaques de panique',
      lastVisit: '10/04/2025',
      nextVisit: '24/04/2025',
      status: 'urgent',
      contact: '+213 555 567 890'
    }
  ];

  // Filtrer les patients selon la recherche et le statut
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.diagnosis.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'urgent':
        return 'text-red-500 bg-red-500/10 border-red-500/50';
      case 'active':
        return 'text-green-500 bg-green-500/10 border-green-500/50';
      case 'inactive':
        return 'text-slate-400 bg-slate-400/10 border-slate-400/50';
      default:
        return 'text-slate-400 bg-slate-400/10 border-slate-400/50';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredPatients.map((patient, index) => (
        <motion.div
          key={patient.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="card flex flex-col justify-between"
        >
          <div className="relative">
            {/* Menu d'options */}
            <div className="absolute top-0 right-0">
              <button className="p-1.5 text-slate-400 hover:text-slate-300 focus:outline-none">
                <FaEllipsisV size={16} />
              </button>
            </div>

            {/* Statut */}
            <div className={`absolute top-0 left-0 px-2 py-1 text-xs font-medium rounded-br-lg border ${getStatusColor(patient.status)}`}>
              {patient.status === 'urgent' && <FaExclamationTriangle className="inline mr-1" size={10} />}
              {patient.status === 'urgent' ? 'Urgent' : patient.status === 'active' ? 'Actif' : 'Inactif'}
            </div>

            {/* En-tête patient */}
            <div className="mt-5 pt-1 flex flex-col items-center">
              {patient.photo ? (
                <img 
                  src={patient.photo} 
                  alt={patient.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500" 
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                  <FaUserCircle size={50} />
                </div>
              )}
              <h3 className="text-lg font-semibold mt-3">{patient.name}</h3>
              <div className="text-sm text-slate-400">
                {patient.age} ans • {patient.gender === 'M' ? 'Homme' : 'Femme'}
              </div>
            </div>

            {/* Diagnostic */}
            <div className="mt-4 bg-slate-800/50 p-2.5 rounded-md">
              <h4 className="text-xs text-slate-400 mb-1">Diagnostic principal:</h4>
              <p className="text-sm font-medium">{patient.diagnosis}</p>
            </div>

            {/* Contact */}
            <div className="mt-3 flex items-center text-sm text-slate-400">
              <FaPhoneAlt size={12} className="mr-2" />
              <span>{patient.contact}</span>
            </div>

            {/* Dernière visite */}
            <div className="mt-2 flex items-center text-sm text-slate-400">
              <FaCalendarAlt size={12} className="mr-2" />
              <span>Dernière: {patient.lastVisit}</span>
            </div>

            {/* Prochaine visite */}
            <div className="mt-1 flex items-center text-sm text-slate-400">
              <FaCalendarAlt size={12} className="mr-2" />
              <span>Prochaine: {patient.nextVisit}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-700 flex justify-center">
            <Link
              to={`/patients/${patient.id}`}
              className="btn-primary py-1.5 px-4 text-sm w-full"
            >
              Voir dossier
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PatientGrid;