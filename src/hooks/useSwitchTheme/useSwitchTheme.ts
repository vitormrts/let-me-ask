import { useContext } from 'react';
import {
  ThemeContext,
  ThemeContextType
} from 'src/contexts/ThemeContext/ThemeContext';

const useSwitchTheme = (): ThemeContextType => useContext(ThemeContext);

export default useSwitchTheme;
