'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface CaptchaProps {
  value: string;
  onChange: (value: string) => void;
  onValidationChange?: (isValid: boolean) => void;
  className?: string;
  placeholder?: string;
}

export default function Captcha({ 
  value, 
  onChange, 
  onValidationChange,
  className = '',
  placeholder = 'Votre réponse'
}: CaptchaProps) {
  const [captchaResult, setCaptchaResult] = useState(0);
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Générer une opération mathématique simple pour le captcha
  const generateCaptcha = useCallback(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const result = num1 + num2;
    setCaptchaResult(result);
    return `${num1} + ${num2}`;
  }, []);

  // Initialiser le captcha au montage du composant
  useEffect(() => {
    setCaptchaQuestion(generateCaptcha());
  }, [generateCaptcha]);

  // Valider la réponse
  useEffect(() => {
    const valid = value.trim() !== '' && parseInt(value) === captchaResult;
    setIsValid(valid);
    onValidationChange?.(valid);
  }, [value, captchaResult, onValidationChange]);

  // Régénérer le captcha
  const handleRefresh = () => {
    setCaptchaQuestion(generateCaptcha());
    onChange('');
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 block">
        Sécurité : {captchaQuestion} = ? *
      </label>
      
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`flex-1 h-10 px-3 py-2 text-sm border-2 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors ${
            value.trim() !== '' && !isValid ? 'border-red-500' : 
            isValid ? 'border-green-500' : 'border-gray-300'
          } ${className}`}
          placeholder={placeholder}
        />
        
        <button
          type="button"
          onClick={handleRefresh}
          className="p-2 text-gray-500 hover:text-brand-500 hover:bg-gray-50 rounded-md transition-colors"
          title="Générer une nouvelle question"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      
      {value.trim() !== '' && !isValid && (
        <p className="text-red-500 text-sm">Réponse incorrecte</p>
      )}
      
      {isValid && (
        <p className="text-green-500 text-sm">✓ Correct</p>
      )}
    </div>
  );
}

