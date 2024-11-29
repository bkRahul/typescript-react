import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      <Typography variant='h6' component='h1'>
        h6 with h1 component
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
        reprehenderit itaque numquam, sunt impedit laudantium iure. Eligendi
        ullam sed quis magnam voluptatem quisquam, iste, non libero quibusdam
        quam accusantium itaque!
      </Typography>
      <Typography variant='body2' gutterBottom>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
        reprehenderit itaque numquam, sunt impedit laudantium iure. Eligendi
        ullam sed quis magnam voluptatem quisquam, iste, non libero quibusdam
        quam accusantium itaque!
      </Typography>
    </>
  );
};
