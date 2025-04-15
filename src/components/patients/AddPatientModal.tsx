import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUpload, FaUser, FaIdCard, FaPhone, FaCalendarAlt, FaVenusMars } from 'react-icons/fa';

interface AddPatientModalProps {
  onClose: () => void;
}

const AddPatientModal: React.FC<AddPatientModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    notes: '',
    photo: null as File | null
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, photo: file }));
      
      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous implémenteriez la logique d'ajout de patient
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-4xl max-h-[90vh] overflow-y-auto glass bg-slate-800/95 rounded-lg shadow-xl z-10 p-6 relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-white transition-colors"
            title="Fermer la fenêtre"
            aria-label="Fermer la fenêtre"
          >
            <FaTimes size={20} />
          </button>
          
          <h2 className="text-2xl font-semibold mb-6">Ajouter un nouveau patient</h2>
          
          <div className="mb-8">
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="w-full bg-slate-700/40 h-1.5 rounded-full">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="flex justify-between mt-2 text-sm">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-blue-400' : 'text-slate-500'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    1
                  </div>
                  <span className="mt-1">Informations personnelles</span>
                </div>
                
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-blue-400' : 'text-slate-500'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    2
                  </div>
                  <span className="mt-1">Contacts & Urgence</span>
                </div>
                
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-blue-400' : 'text-slate-500'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    3
                  </div>
                  <span className="mt-1">Antécédents médicaux</span>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Étape 1: Informations personnelles */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Photo */}
                  <div className="md:col-span-2 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden border-2 border-slate-600 mb-4">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <FaUser size={48} className="text-slate-500" />
                      )}
                    </div>
                    <label className="btn-secondary cursor-pointer">
                      <FaUpload className="mr-2" />
                      <span>Téléverser photo</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange}
                        className="hidden" 
                      />
                    </label>
                  </div>
                  
                  {/* Prénom */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Prénom</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-slate-400" size={16} />
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Prénom du patient"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Nom</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaIdCard className="text-slate-400" size={16} />
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nom du patient"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Date de naissance */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Date de naissance</label>
                    <div className="relative">
                      <label htmlFor="birthDate" className="sr-only">
                        Date de naissance
                      </label>
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-slate-400" size={16} />
                      </div>
                      <input
                        id="birthDate"
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        placeholder="Date de naissance"
                        title="Date de naissance"
                      />
                    </div>
                  </div>
                  
                  {/* Genre */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Genre</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaVenusMars className="text-slate-400" size={16} />
                      </div>
                      <label htmlFor="gender" className="sr-only">
                        Genre du patient
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        title="Genre du patient"
                      >
                        <option value="">Sélectionner</option>
                        <option value="M">Homme</option>
                        <option value="F">Femme</option>
                        <option value="O">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Adresse */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-1">Adresse</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Adresse du patient"
                    />
                  </div>
                  
                  {/* Ville */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-1">Ville</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ville du patient"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Suivant
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Étape 2: Contacts & Urgence */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Téléphone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Téléphone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-slate-400" size={16} />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Numéro de téléphone"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email du patient"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-3 mt-2">Contact d'urgence</h3>
                  </div>
                  
                  {/* Contact d'urgence */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Nom du contact</label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nom du contact d'urgence"
                    />
                  </div>
                  
                  {/* Téléphone d'urgence */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Téléphone d'urgence</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-slate-400" size={16} />
                      </div>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Numéro du contact d'urgence"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Précédent
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Suivant
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Étape 3: Antécédents médicaux */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {/* Antécédents médicaux */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Antécédents médicaux</label>
                    <textarea
                      name="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Détaillez les antécédents médicaux du patient"
                    />
                  </div>
                  
                  {/* Médicaments actuels */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Médicaments actuels</label>
                    <textarea
                      name="currentMedications"
                      value={formData.currentMedications}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Liste des médicaments actuellement pris par le patient"
                    />
                  </div>
                  
                  {/* Allergies */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Allergies</label>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Allergies connues du patient"
                    />
                  </div>
                  
                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Notes additionnelles</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 bg-slate-700/40 border border-slate-600 rounded-md text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Informations complémentaires importantes"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Précédent
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                  >
                    Ajouter patient
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddPatientModal;