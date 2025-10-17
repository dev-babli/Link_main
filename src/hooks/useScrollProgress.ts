"use client";

import { useEffect, useState } from 'react';

interface ScrollProgressOptions {
  target?: number; // Target scroll position (0-100)
  smooth?: boolean;
}

export function useScrollProgress(options: ScrollProgressOptions = {}) {
  const { target, smooth = true } = options;
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollY(scrollTop);
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      setIsAtTop(scrollTop < 10);
      setIsAtBottom(scrollTop + window.innerHeight >= docHeight - 10);
    };

    const handleScroll = () => {
      if (smooth) {
        requestAnimationFrame(updateScrollProgress);
      } else {
        updateScrollProgress();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [smooth]);

  // Check if target is reached
  const isTargetReached = target !== undefined ? progress >= target : false;

  return {
    progress,
    scrollY,
    isAtTop,
    isAtBottom,
    isTargetReached,
    // Utility functions
    scrollToProgress: (targetProgress: number) => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetScrollTop = (targetProgress / 100) * docHeight;
      window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    },
    scrollToTop: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    scrollToBottom: () => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };
}
