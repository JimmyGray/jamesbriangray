import React, { useState } from 'react';
import { darkTheme } from '../../../theme/dark/dark';
import { lightTheme } from '../../../theme/light/light';
import { Theme } from '../../../theme/template/theme';

export interface AppThemeProviderProps {
  children: JSX.Element;
}

export const AppThemeContext = React.createContext({
  theme: darkTheme,
  onChange: () => {},
  dark: true
});

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [dark, setDark] = useState<boolean>(true);
  const onChange = () => setDark(!dark);
  const theme: Theme = dark ? darkTheme : lightTheme;
  return (
      <AppThemeContext.Provider value={ { theme, onChange, dark } }>
        { children }
      </AppThemeContext.Provider>
  );
};