import React, { useState } from 'react';
import { FaUser, FaSearch, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  status: string;
}

const Patients = () => {
  const [patients] = useState<Patient[]>([
    {
      id: 1,
      name: "Ahmed M.",
      age: 35,
      gender: "Masculin",
      diagnosis: "Troubles dépressifs",
      status: "Actif"
    },
    {
      id: 2,
      name: "Sarah B.",
      age: 28,
      gender: "Féminin",
      diagnosis: "Anxiété généralisée",
      status: "Actif"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = () => {
    // À implémenter : ouvrir un formulaire de création de patient
    console.log('Ajouter un nouveau patient');
  };

  const handleEditPatient = (patient: Patient) => {
    // À implémenter : ouvrir un formulaire d'édition
    console.log('Éditer le patient:', patient);
  };

  const handleDeletePatient = (patient: Patient) => {
    // À implémenter : confirmation de suppression
    console.log('Supprimer le patient:', patient);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des patients</h1>
        <button
          onClick={handleAddPatient}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaPlus size={16} />
          Nouveau patient
        </button>
      </div>

      <div className="flex gap-6">
        {/* Liste des patients */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <FaSearch size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un patient..."
                value={searchTerm}
                onChange={handleSearch}
                className="flex-1 bg-gray-100 dark:bg-slate-700 rounded-md px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Âge</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Genre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Diagnostic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {filteredPatients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{patient.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.diagnosis}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      <button
                        onClick={() => {
                          handleEditPatient(patient);
                        }}
                        className="text-blue-500 hover:text-blue-600 mr-2"
                        title="Modifier le patient"
                        aria-label="Modifier le patient"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePatient(patient);
                        }}
                        className="text-red-500 hover:text-red-600"
                        title="Supprimer le patient"
                        aria-label="Supprimer le patient"
                      >
                        <FaTrash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Détails du patient */}
        {selectedPatient && (
          <div className="w-96 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Détails du patient</h2>
                <button
                  onClick={() => setSelectedPatient(null)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Fermer les détails"
                  aria-label="Fermer les détails"
                >
                  <FaUser size={16} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Informations personnelles</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedPatient.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedPatient.age} ans</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedPatient.gender}</p>
                </div>

                <div>
                  <h3 className="font-medium">Diagnostic</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedPatient.diagnosis}</p>
                </div>

                <div>
                  <h3 className="font-medium">Statut</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{selectedPatient.status}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patients;