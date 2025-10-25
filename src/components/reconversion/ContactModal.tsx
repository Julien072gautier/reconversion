'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, Mail, Phone, User, MessageSquare, FileText } from 'lucide-react';
import { useSendEmail } from '@/hooks/useSendEmail';
import Captcha from '@/components/Captcha';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { sendEmail, loading, error, success } = useSendEmail();
  const router = useRouter();
  
  // Liste des sujets disponibles liés à la reconversion
  const availableSubjects = [
    { value: 'reconversion-projet', label: 'Projet de reconversion' },
    { value: 'blocs-competences', label: 'Blocs de compétences RNCP' },
    { value: 'modalites-formation', label: 'Modalités de formation' },
    { value: 'dossier-reconversion', label: 'Dossier de reconversion' },
    { value: 'suivi-dossier', label: 'Suivi de dossier' },
    { value: 'financement-cpf', label: 'Financement CPF' },
    { value: 'accompagnement', label: 'Accompagnement personnalisé' },
    { value: 'autre', label: 'Autre sujet' }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est obligatoire';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est obligatoire';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est obligatoire';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est obligatoire';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire';
    }
    if (!captchaValid) {
      newErrors.captcha = 'Veuillez résoudre le captcha';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Trouver le label du sujet sélectionné
    const selectedSubjectLabel = availableSubjects.find(subject => subject.value === formData.subject)?.label || formData.subject;
    
    // Format de l'objet selon les spécifications
    const emailSubject = `MaReconversionCPF - Demande de contact - ${selectedSubjectLabel}`;
    
    // Format du contenu avec une donnée par ligne et champs en majuscule
    const emailContent = `PRÉNOM: ${formData.firstName}
NOM: ${formData.lastName}
EMAIL: ${formData.email}
TÉLÉPHONE: ${formData.phone}
SUJET: ${selectedSubjectLabel}
MESSAGE: ${formData.message}`;
    
    try {
      await sendEmail({ to: 'contact@mareconversioncpf.fr', subject: emailSubject, text: emailContent });
      
      // Fermer le modal et rediriger vers la page de remerciement
      onClose();
      router.push(`/merci?subject=${encodeURIComponent(selectedSubjectLabel)}`);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      // Réinitialiser le formulaire même en cas d'erreur
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
      setCaptchaValue('');
      setCaptchaValid(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = () => {
    // Remettre le formulaire à zéro lors de la fermeture
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
    setCaptchaValue('');
    setCaptchaValid(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Contactez-nous</h2>
              <p className="text-sm sm:text-base text-gray-600">Nous vous répondrons dans les plus brefs délais</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Messages d'erreur uniquement */}
        {error && (
          <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">✗</span>
              </div>
              <div>
                <p className="text-red-800 font-medium">Erreur lors de l'envoi</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Prénom et Nom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                Prénom *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`pl-10 w-full h-10 px-3 py-2 text-sm border-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Votre prénom"
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                Nom *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`pl-10 w-full h-10 px-3 py-2 text-sm border-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Votre nom"
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Téléphone et Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                Téléphone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`pl-10 w-full h-10 px-3 py-2 text-sm border-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Votre téléphone"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`pl-10 w-full h-10 px-3 py-2 text-sm border-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="votre@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
              Sujet *
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className={`pl-10 h-10 w-full border-2 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Choisissez un sujet</option>
                {availableSubjects.map((subject) => (
                  <option key={subject.value} value={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`pl-10 min-h-[120px] w-full px-3 py-2 text-sm border-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Décrivez votre demande..."
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Captcha */}
          <Captcha
            value={captchaValue}
            onChange={(value) => {
              setCaptchaValue(value);
              if (errors.captcha) {
                setErrors(prev => ({ ...prev, captcha: '' }));
              }
            }}
            onValidationChange={setCaptchaValid}
          />
          {errors.captcha && (
            <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
          )}

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-brand-500 hover:bg-brand-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
