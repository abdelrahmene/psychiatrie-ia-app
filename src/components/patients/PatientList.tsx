import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUserCircle, 
  FaPhoneAlt, 
  FaCalendarAlt, 
  FaEllipsisV, 
  FaExclamationTriangle,
  FaEye,
  FaEdit,
  FaTrashAlt
} from 'react-icons/fa';

interface PatientListProps {
  searchQuery: string;
  statusFilter: string;
}

const PatientList: React.FC<PatientListProps> = ({ searchQuery, statusFilter }) => {
  // Données fictives de patients (mêmes que pour PatientGrid)
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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-800 text-left">
          <tr>
            <th className="p-4 text-sm font-medium text-slate-300">Nom</th>
            <th className="p-4 text-sm font-medium text-slate-300">Âge/Genre</th>
            <th className="p-4 text-sm font-medium text-slate-300">Diagnostic</th>
            <th className="p-4 text-sm font-medium text-slate-300">Statut</th>
            <th className="p-4 text-sm font-medium text-slate-300">Contact</th>
            <th className="p-4 text-sm font-medium text-slate-300">Dernière visite</th>
            <th className="p-4 text-sm font-medium text-slate-300">Prochaine visite</th>
            <th className="p-4 text-sm font-medium text-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <motion.tr
              key={patient.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="glass border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors"
            >
              <td className="p-4">
                <div className="flex items-center">
                  {patient.photo ? (
                    <img 
                      src={patient.photo} 
                      alt={patient.name}
                      className="w-10 h-10 rounded-full object-cover mr-3" 
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 mr-3">
                      <FaUserCircle size={24} />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{patient.name}</h3>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-slate-300">
                {patient.age} ans • {patient.gender === 'M' ? 'H' : 'F'}
              </td>
              <td className="p-4 text-sm text-slate-300 max-w-xs truncate">
                {patient.diagnosis}
              </td>
              <td className="p-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-md border ${getStatusColor(patient.status)}`}>
                  {patient.status === 'urgent' && <FaExclamationTriangle className="inline mr-1" size={10} />}
                  {patient.status === 'urgent' ? 'Urgent' : patient.status === 'active' ? 'Actif' : 'Inactif'}
                </span>
              </td>
              <td className="p-4 text-sm text-slate-300">
                <div className="flex items-center">
                  <FaPhoneAlt size={12} className="mr-2 text-slate-400" />
                  {patient.contact}
                </div>
              </td>
              <td className="p-4 text-sm text-slate-300">
                {patient.lastVisit}
              </td>
              <td className="p-4 text-sm text-slate-300">
                {patient.nextVisit}
              </td>
              <td className="p-4">
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/patients/${patient.id}`}
                    className="p-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                    title="Voir dossier"
                  >
                    <FaEye size={14} />
                  </Link>
                  <button
                    className="p-1.5 rounded-md bg-slate-600 hover:bg-slate-700 text-white"
                    title="Modifier"
                  >
                    <FaEdit size={14} />
                  </button>
                  <button
                    className="p-1.5 rounded-md bg-red-600 hover:bg-red-700 text-white"
                    title="Supprimer"
                  >
                    <FaTrashAlt size={14} />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;