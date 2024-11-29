type ListProps<T> = { items: T[]; clickHandler: (item: T) => void };

// export const List = <T extends string | number>({
export const List = <T extends {}>({ items, clickHandler }: ListProps<T>) => {
  return (
    <>
      {items.map((item, i) => (
        <h4 key={i} onClick={() => clickHandler(item)}>
          {item}
        </h4>
      ))}
    </>
  );
};
