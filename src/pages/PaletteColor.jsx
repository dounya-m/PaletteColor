import React ,{ useState } from 'react'

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
  return (
    <div className="palette-generator">
      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          >
            {color}
          </div>
        ))}
      </div>
      <button onClick={handleGenerateColors}>Generate New Colors</button>
    </div>
  )
}
