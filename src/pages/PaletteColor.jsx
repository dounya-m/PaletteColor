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
    <div className="p-4 palette-generator">
      <div className="grid grid-cols-5 gap-4 palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer color-box"
            style={{ backgroundColor: color }}
            onClick={() => handleCopyColor(color)}
            
          >
            <p
            onClick={() => {
                navigator.clipboard.writeText(color);
              }}>{color}
              </p>
          </div>
        ))}
      </div>
      <button
        onClick={handleGenerateColors}
        className="p-2 mt-4 text-white bg-blue-500 rounded"
      >
        Generate New Colors
      </button>
    </div>
  );
}
