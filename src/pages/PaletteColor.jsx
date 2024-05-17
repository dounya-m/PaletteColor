import React, { useState } from 'react';

export default function PaletteColor() {
  const [colors, setColors] = useState(generateRandomColors());

  function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function generateRandomColors() {
    return Array.from({ length: 5 }, generateRandomColor);
  }

  function handleGenerateColors() {
    setColors(generateRandomColors());
  }

  function handleCopyColor(color) {
    navigator.clipboard.writeText(color)
      .then(() => {
        alert(`Copied ${color} to clipboard!`);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }

  return (
    <div className="palette-generator">
      <div className="grid grid-cols-5 palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="cursor-pointer color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleCopyColor(color)}
            
          >
            <span
            onClick={() => {
                navigator.clipboard.writeText(color);
              }}>{color}
              </span>
          </div>
        ))}
      </div>
      <button
        onClick={handleGenerateColors}
      >
        Generate New Colors
      </button>
    </div>
  );
}
