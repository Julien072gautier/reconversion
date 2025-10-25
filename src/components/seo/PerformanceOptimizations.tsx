'use client';

import { useEffect } from 'react';

export function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.webp',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      const lazyImages = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay loading of non-critical scripts
      const scripts = document.querySelectorAll('script[data-delay]');
      scripts.forEach((script) => {
        const delay = parseInt(script.getAttribute('data-delay') || '0');
        setTimeout(() => {
          const newScript = document.createElement('script');
          newScript.src = script.getAttribute('src') || '';
          newScript.async = true;
          document.head.appendChild(newScript);
        }, delay);
      });
    };

    preloadCriticalResources();
    lazyLoadResources();
    optimizeThirdPartyScripts();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null;
}

