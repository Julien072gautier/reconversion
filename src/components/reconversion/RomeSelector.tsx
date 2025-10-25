'use client';

import { useState, useEffect } from 'react';
import { filterRomeCodes } from '@/lib/mock/rome';
import type { RomeCode } from '@/types/reconversion';
import { cn } from '@/lib/utils';

interface RomeSelectorProps {
  label: string;
  value: RomeCode | null;
  onChange: (rome: RomeCode | null) => void;
  placeholder?: string;
  className?: string;
}

export function RomeSelector({ 
  label, 
  value, 
  onChange, 
  placeholder = "Rechercher un métier...",
  className 
}: RomeSelectorProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCodes, setFilteredCodes] = useState<RomeCode[]>([]);

  useEffect(() => {
    if (query.trim()) {
      setFilteredCodes(filterRomeCodes(query));
    } else {
      setFilteredCodes(filterRomeCodes(''));
    }
  }, [query]);

  const handleSelect = (rome: RomeCode) => {
    onChange(rome);
    setQuery(rome.label);
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange(null);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {isOpen && filteredCodes.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredCodes.map((rome) => (
            <button
              key={rome.code}
              type="button"
              onClick={() => handleSelect(rome)}
              className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            >
              <div className="font-medium text-gray-900">{rome.label}</div>
              <div className="text-sm text-gray-500">{rome.code}</div>
            </button>
          ))}
        </div>
      )}
      
      {isOpen && query.trim() && filteredCodes.length === 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="px-3 py-2 text-gray-500 text-sm">
            Aucun métier trouvé pour "{query}"
          </div>
        </div>
      )}
    </div>
  );
}

