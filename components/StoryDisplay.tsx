import React from 'react';

interface StoryDisplayProps {
  story: string;
  imageUrl: string | null;
  isInitialLoad: boolean;
}

export const StoryDisplay: React.FC<StoryDisplayProps> = ({ story, imageUrl, isInitialLoad }) => {
  if (isInitialLoad && !story) {
    return null; // Don't render anything if it's initial load and no story yet
  }
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 md:p-6 h-full flex flex-col">
      {imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden shadow-md flex-shrink-0" style={{ aspectRatio: '16/9', maxHeight: '40vh' }}>
          <img 
            src={imageUrl} 
            alt="Adventure scene" 
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0" 
            onLoad={(e) => (e.target as HTMLImageElement).style.opacity = '1'}
          />
        </div>
      )}
      {story && (
        <div className="flex-grow overflow-y-auto">
          <p className="text-slate-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {story}
          </p>
        </div>
      )}
    </div>
  );
};

// Add this to your index.html <style> or a global CSS file if you prefer
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.7s ease-out forwards;
}
*/
// For simplicity with Tailwind, often opacity transitions on load are sufficient. 
// The onLoad handler above achieves a similar fade-in for the image.
// Text can be animated with Framer Motion or simple CSS if needed, but keeping it simple for now.
