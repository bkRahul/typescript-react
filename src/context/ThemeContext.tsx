//Updating the context value from consumer components

import { createContext, useState } from 'react';

type ThemeType = {
  color: string;
};

type ThemeContextType = {
  theme: ThemeType | null;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType | null>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeType | null>(null);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
