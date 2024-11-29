import { Typography } from '@mui/material';
import { theme } from '../context/theme';

type HeadingProps = {
  style?: React.CSSProperties;
  children: string | React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <Typography
      variant='h4'
      sx={{
        margin: 3,
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'underline',
        color: theme.primary.text,
      }}
    >
      {children}
    </Typography>
  );
};
