import { useState } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl bg-neutral-900 select-none aspect-[4/3] md:aspect-video shadow-2xl"
    >
      {/* Before Image (Background) */}
      <img
        src={beforeImage}
        alt="Before Design"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 left-4 bg-black/70 text-gray-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm pointer-events-none border border-white/10 z-0">
        Before
      </div>

      {/* After Image (Clipped overlay on the right) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <img
          src={afterImage}
          alt="After Design"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm pointer-events-none">
          After (MagnetarWeb)
        </div>
      </div>

      {/* Visual Slider Handle (Pointer events none so clicks pass through to input) */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors duration-150"
        style={{ left: `calc(${sliderPosition}% - 2px)`, backgroundColor: isDragging ? '#0050d8' : 'white' }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-200"
          style={{ transform: `translate(-50%, -50%) scale(${isDragging ? 1.1 : 1})`, transition: 'transform 0.15s ease' }}
        >
          <svg className="w-6 h-6 text-[#0050d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>

      {/* Native Range Input for Flawless Touch & Mouse Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        className="absolute inset-0 z-30 w-full h-full opacity-0 cursor-ew-resize m-0 p-0 touch-pan-y"
      />
    </div>
  );
}
