import { InputAdornment, Stack, TextField } from '@mui/material';

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={4}>
        <TextField
          label='name'
          variant='outlined'
          required
          helperText='Enter Name'
        />
        <TextField
          label='name'
          variant='filled'
          InputProps={{ readOnly: true }}
        />
        <TextField
          label='name'
          variant='standard'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction='row' spacing={4}>
        <TextField label='name' variant='outlined' />
        <TextField label='name' variant='filled' />
        <TextField label='name' variant='standard' />
      </Stack>
    </Stack>
  );
};
