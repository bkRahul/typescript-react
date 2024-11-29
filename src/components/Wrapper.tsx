type WrapperProps = { children: React.ReactNode; style?: React.CSSProperties };
export const Wrapper = (props: WrapperProps) => {
  return <div style={props.style}>{props.children}</div>;
};
