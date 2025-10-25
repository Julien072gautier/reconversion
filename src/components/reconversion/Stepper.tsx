'use client';

import { cn } from '@/lib/utils';

interface StepperProps {
  currentStep: number;
  steps: string[];
  className?: string;
}

export function Stepper({ currentStep, steps, className }: StepperProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors',
                    isActive && 'border-blue-600 bg-blue-600 text-white',
                    isCompleted && 'border-green-600 bg-green-600 text-white',
                    isUpcoming && 'border-gray-300 bg-white text-gray-500'
                  )}
                >
                  {isCompleted ? (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    stepNumber
                  )}
                </div>
                <div className="mt-2 text-center">
                  <div className={cn(
                    'text-xs font-medium',
                    isActive && 'text-blue-600',
                    isCompleted && 'text-green-600',
                    isUpcoming && 'text-gray-500'
                  )}>
                    {step}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  'mx-4 h-0.5 w-16 transition-colors',
                  isCompleted ? 'bg-green-600' : 'bg-gray-300'
                )} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

