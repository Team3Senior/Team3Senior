import React, { useState } from 'react';
import { FormControl, FormLabel, FormGroup, Box } from '@mui/material';

const SizePicker: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSizeChange = (newSize: string) => {
    setSelectedSize(newSize);
  };

  const sizeStyles = {
    box: {
      width: '40px',
      height: '40px',
      border: '1px solid #000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      marginRight: '10px',
      position: 'relative',
      top: -530,
      right: -900,
    },
    selected: {
      backgroundColor: '#DB4444',
    },
    formLabel: {
      color: '#333',
      fontSize: '18px',
      marginBottom: '8px',
      fontWeight: 'bold',
      position: 'relative',
      top: -530,
      right: -900,
    },
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" style={sizeStyles.formLabel}>Size:</FormLabel>
      <FormGroup>
        <Box sx={{ display: 'flex' }}>
          <div onClick={() => handleSizeChange('XS')} style={{ ...sizeStyles.box, ...(selectedSize === 'XS' ? sizeStyles.selected : null) }}>XS</div>
          <div onClick={() => handleSizeChange('S')} style={{ ...sizeStyles.box, ...(selectedSize === 'S' ? sizeStyles.selected : null) }}>S</div>
          <div onClick={() => handleSizeChange('M')} style={{ ...sizeStyles.box, ...(selectedSize === 'M' ? sizeStyles.selected : null) }}>M</div>
          <div onClick={() => handleSizeChange('L')} style={{ ...sizeStyles.box, ...(selectedSize === 'L' ? sizeStyles.selected : null) }}>L</div>
          <div onClick={() => handleSizeChange('XL')} style={{ ...sizeStyles.box, ...(selectedSize === 'XL' ? sizeStyles.selected : null) }}>XL</div>
        </Box>
      </FormGroup>
    </FormControl>
  );
};

export default SizePicker;
