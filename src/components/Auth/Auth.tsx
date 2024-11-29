import React, { useContext, useState } from 'react';
import { UserContext, UserContextType } from '../../context/UserContext';
import { Button } from '../Button/Button';
import { Greet } from '../Greet';
import { Input } from '../Input/Input';

export const Auth = () => {
  //type assertion
  //  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  const usercontext = useContext<UserContextType | null>(UserContext);

  const handleAuth = () => {
    if (!name || !email) return alert('Please Login');

    usercontext?.setLoggedIn(!usercontext?.loggedIn);
    usercontext?.setUser({ name, email });
  };

  return (
    <>
      <Input label='Name' onChange={setName} />
      <Input label='E mail' onChange={setEmail} />
      <Button
        btnType='auth'
        onClick={() => handleAuth}
        btnName={!usercontext?.loggedIn ? 'Login' : 'Log Out'}
      ></Button>

      <Greet />
    </>
  );
};
