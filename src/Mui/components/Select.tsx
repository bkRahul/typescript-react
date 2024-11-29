import { Box, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

export const MuiSelect = () => {
  const [country, setCountry] = useState<string[] | []>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCountry(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <>
      <Box width='225px'>
        <TextField
          label='Select Country'
          select
          fullWidth
          value={country}
          onChange={handleChange}
          SelectProps={{ multiple: true }}
        >
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='JP'>Japan</MenuItem>
          <MenuItem value='CA'>Canada</MenuItem>
          <MenuItem value='USA'>America</MenuItem>
        </TextField>
      </Box>
      <Box width='225px'>
        <Select label='Select Country' fullWidth>
          <MenuItem value='IN'>India</MenuItem>
          <MenuItem value='JP'>Japan</MenuItem>
          <MenuItem value='CA'>Canada</MenuItem>
        </Select>
      </Box>
    </>
  );
};
