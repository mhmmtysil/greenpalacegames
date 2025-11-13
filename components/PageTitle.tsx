'use client';

import { useEffect, useState } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= title.length) {
        setDisplayedText(title.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50); // Her karakterin yazılma hızı (ms)

    return () => clearInterval(typingInterval);
  }, [title]);

  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl sm:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-[#2EB2D3] via-[#3b82f6] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
          {displayedText}
        </span>
        <span className={`inline-block w-1 h-12 sm:h-14 ml-1 bg-gradient-to-b from-[#ec4899] to-[#a855f7] ${isTypingComplete ? 'animate-blink' : ''}`}></span>
      </h1>
      
      {subtitle && (
        <p className="text-gray-700 text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
