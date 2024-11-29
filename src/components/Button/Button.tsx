import './Button.css';

// type ButtonProps = {
//   handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   btnName: string;
//   type?: string;
// };

type ButtonProps = {
  btnType?: string;
  btnName: string;
} & React.ComponentProps<'button'>;

export const Button = ({ btnType, btnName, ...rest }: ButtonProps) => {
  return (
    <button className={btnType} {...rest}>
      {btnName}
    </button>
  );
};
