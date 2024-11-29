import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Wrapper } from './Wrapper';

type GreetProps = {
  messageCount?: number;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  const usercontext = useContext(UserContext);

  return (
    <Wrapper style={{ margin: '20px', float: 'right' }}>
      {usercontext?.loggedIn
        ? `Greetings ${usercontext?.user?.name}, You have ${messageCount} messages`
        : 'Welcome Guest'}
    </Wrapper>
  );
};
