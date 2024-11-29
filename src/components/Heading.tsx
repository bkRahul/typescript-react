import { Heading as HeadingProps } from '../Mui/Heading';

export const Heading = (props: React.ComponentProps<typeof HeadingProps>) => {
  return <h1 style={props.style}>{props.children}</h1>;
};
