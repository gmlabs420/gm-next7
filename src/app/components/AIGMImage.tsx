"use client"; // Ensure this component is treated as a client component
import { useState, useEffect } from "react";
import ShareModal from './ShareModal'; // Adjust the path as necessary

export default function AIImageGenerator() {
  const [complexityLevel, setComplexityLevel] = useState(50);
  const [imageSize, setImageSize] = useState(1080); // default to 1080
  const [result, setResult] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenerate = async () => {
    const prompt = `Generate an image with complexity level ${complexityLevel} and size ${imageSize}x${imageSize}`;
    
    const response = await fetch('/api/openai-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, complexityLevel, imageSize }),
    });

    const data = await response.json();
    setResult(data.imageUrl);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert('Image URL copied to clipboard!');
  };

  const handleShare = () => {
    setIsModalOpen(true);
  };

  const getSliderBackground = (value) => {
    const blueTop = { r: 1, g: 93, b: 130 }; // #015D82
    const skyBlue = { r: 74, g: 157, b: 199 }; // #4A9DC7
    const lightBlue = { r: 177, g: 199, b: 218 }; // #B1C7DA
    const lightOrange = { r: 240, g: 191, b: 140 }; // #F0BF8C
    const orangeBottom = { r: 242, g: 154, b: 75 }; // #F29A4B

    const mixColor = (start, end, percentage) => {
      const r = start.r + percentage * (end.r - start.r);
      const g = start.g + percentage * (end.g - start.g);
      const b = start.b + percentage * (end.b - start.b);
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    };

    const percentage = value / 100;

    const startColor = mixColor(blueTop, skyBlue, percentage <= 0.25 ? percentage * 4 : 1);
    const midColor1 = mixColor(skyBlue, lightBlue, percentage <= 0.5 ? (percentage - 0.25) * 4 : 1);
    const midColor2 = mixColor(lightBlue, lightOrange, percentage <= 0.75 ? (percentage - 0.5) * 4 : 1);
    const endColor = mixColor(lightOrange, orangeBottom, percentage > 0.75 ? (percentage - 0.75) * 4 : 0);

    return `linear-gradient(90deg, ${startColor} 0%, ${midColor1} 25%, ${midColor2} 50%, ${endColor} 100%)`;
  };

  useEffect(() => {
    const complexitySlider = document.getElementById('complexityLevel');
    if (complexitySlider) {
      const background = getSliderBackground(complexityLevel);
      console.log('Applying background:', background); // Debugging line
      complexitySlider.style.background = background;
    }
  }, [complexityLevel]);

  useEffect(() => {
    const sizeSlider = document.getElementById('imageSize');
    if (sizeSlider) {
      const background = getSliderBackground(imageSize / 20); // Adjust scale for size slider
      sizeSlider.style.background = background;
    }
  }, [imageSize]);

  return (
    <div className="machine">
      <span><h2>AI GM Image Generator</h2></span>
      <div>
        <p>Generate AI images! Adjust the complexity and size with the sliders.</p>
        <div className="slider-container">
          <input 
            type="range" 
            id="complexityLevel" 
            name="complexityLevel" 
            min="0" 
            max="100" 
            value={complexityLevel} 
            onChange={(e) => setComplexityLevel(e.target.value)} 
          />
          <label htmlFor="complexityLevel">Complexity Level: {complexityLevel}</label>
        </div>
        <div className="slider-container">
          <input 
            type="range" 
            id="imageSize" 
            name="imageSize" 
            min="512" 
            max="2048" 
            step="128" 
            value={imageSize} 
            onChange={(e) => setImageSize(e.target.value)} 
          />
          <label htmlFor="imageSize">Image Size: {imageSize}x{imageSize}</label>
        </div>
      </div>
      <div className="recessed-field3">
        {result ? <img src={result} alt="Generated AI" id="aiGeneratedImage" /> : <p>Your generated image will appear here...</p>}
      </div>
      <div className="button-container">
        <button onClick={handleGenerate} className="action-button">
          Generate
        </button>
        <button onClick={handleCopy} className="action-button">
          Copy
        </button>
        <button onClick={handleShare} className="action-button">
          Share
        </button>
      </div>
      <ShareModal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        url={typeof window !== 'undefined' ? window.location.href : ''} 
        text={result} 
      />
    </div>
  );
}
