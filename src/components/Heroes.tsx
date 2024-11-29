import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Heading } from './Heading';
import { List } from './List';

export const Heroes = () => {
  // const heroes = [
  //   { id: 1, first: 'Bruce', last: 'Wayne' },
  //   { id: 2, first: 'Clark', last: 'Kent' },
  //   { id: 3, first: 'Arthur ', last: 'Curry' },
  //   { id: 4, first: 'Barry ', last: 'Allen' },
  // ];

  const heroes1 = ['Bruce Wayne', 'Clark Kent', 'Arthur Curry', 'Barry Allen'];

  const themeContext = useContext(ThemeContext);
  return (
    <>
      <Heading style={{ color: themeContext?.theme?.color }}>
        <div>Heroes</div>
      </Heading>
      <List items={heroes1} clickHandler={item => alert(item)} />
    </>
  );
};
