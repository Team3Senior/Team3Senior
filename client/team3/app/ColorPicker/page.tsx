"use client"
import * as React from 'react';

const circleStyle: React.CSSProperties = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: 'none',
  marginRight: '10px',
  cursor: 'pointer',
  position: 'relative',
  top: -370,
  right: -840,
};

const selectedCircleStyle: React.CSSProperties = {
  ...circleStyle,
  border: '2px solid #000',
};

const ColorPicker: React.FC = () => {
  const [color, setColor] = React.useState<string>('black');

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <strong style={{ marginRight: '10px', position: 'relative', top: '-400px', right: '-900px', fontFamily: 'Rubik, sans-serif' }}>Colors:</strong>
      <div>
        <button
          onClick={() => handleColorChange('black')}
          aria-label="black"
          style={{
            ...circleStyle,
            backgroundColor: color === 'black' ? 'black' : 'black',
            boxShadow: color === 'black' ? '0 0 0 3px #00FF00' : 'none',
          }}
        />
        <button
          onClick={() => handleColorChange('Beige')}
          aria-label="Beige"
          style={{
            ...circleStyle,
            backgroundColor: color === 'Beige' ? 'Beige' : 'Beige',
            boxShadow: color === 'Beige' ? '0 0 0 3px #00FF00' : 'none',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
