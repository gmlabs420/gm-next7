"use client"; // Ensure this component is treated as a client component
import { useState, useEffect } from "react";
import ShareModal from './ShareModal'; // Adjust the path as necessary

export default function AIGMMachine() {
  const [prefix, setPrefix] = useState('Good Morning');
  const [selectedTags, setSelectedTags] = useState([]);
  const [numCharacters, setNumCharacters] = useState(280); // default to 280 characters
  const [result, setResult] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tags = ['Inspiration', 'Motivation', 'Wisdom', 'Happiness', 'Love', 'Friendship', 'Success', 'Life', 'Hope'];

  const handleTagClick = (tag) => {
    setSelectedTags(prevSelectedTags => 
      prevSelectedTags.includes(tag) 
        ? prevSelectedTags.filter(t => t !== tag) 
        : [...prevSelectedTags, tag]
    );
  };

  const handleGenerate = async () => {
    const prompt = `${prefix} ${selectedTags.length > 0 ? selectedTags.join(', ') + ' ' : ''}quote`;
    
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, type: 'text', numCharacters }),
    });

    const data = await response.json();
    setResult(data.choices[0].text);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert('Text copied to clipboard!');
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

    const percentage = value / 1000;

    const startColor = mixColor(blueTop, skyBlue, percentage <= 0.25 ? percentage * 4 : 1);
    const midColor1 = mixColor(skyBlue, lightBlue, percentage <= 0.5 ? (percentage - 0.25) * 4 : 1);
    const midColor2 = mixColor(lightBlue, lightOrange, percentage <= 0.75 ? (percentage - 0.5) * 4 : 1);
    const endColor = mixColor(lightOrange, orangeBottom, percentage > 0.75 ? (percentage - 0.75) * 4 : 0);

    return `linear-gradient(90deg, ${startColor} 0%, ${midColor1} 25%, ${midColor2} 50%, ${endColor} 100%)`;
};

  useEffect(() => {
    if (typeof document !== 'undefined') { // Check if document is defined
      const numCharactersSlider = document.getElementById('numCharacters');
      if (numCharactersSlider) {
        const background = getSliderBackground(numCharacters);
        console.log('Applying background:', background); // Debugging line
        numCharactersSlider.style.background = background;
      }
    }
  }, [numCharacters]);

  return (
    <div className="machine">
      <span><h2>AI GM Quote Generator</h2></span>
      <div>
        <p>AI generated GM quotes! Add a tag or generate randomly.</p>
        <div className="tags-container-wrapper">
          <div className="tags-container">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`action-button2 ${selectedTags.includes(tag) ? 'selected' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="slider-container">
        <input 
          type="range" 
          id="numCharacters" 
          name="numCharacters" 
          min="10" 
          max="1000" 
          step="10" 
          value={numCharacters} 
          onChange={(e) => setNumCharacters(e.target.value)} 
        />
        <label htmlFor="numCharacters">Number of Characters: {numCharacters}/1000</label>
      </div>
      <div className="recessed-field2">
        <p id="aiGeneratedText">{result || 'Your inspirational quote will appear here...'}</p>
      </div>
      <div className="button-container">
        <button
          onClick={handleGenerate}
          className={`action-button ${selectedTags.length > 0 ? 'selected-generate' : ''}`}
        >
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
