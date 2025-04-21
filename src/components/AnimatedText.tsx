
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  speed = 100,
  className = ""
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default AnimatedText;
