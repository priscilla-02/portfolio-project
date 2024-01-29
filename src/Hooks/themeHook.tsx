import React, { useContext, useState } from 'react';

interface IContext {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
}

export function useTheme(): IContext {
  return useContext(ThemeContext);
}

export const ThemeContext = React.createContext<IContext>({} as IContext);

export const ThemeProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    setIsDarkMode(prevState => !prevState);
    const appElement = document.documentElement;
    appElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
