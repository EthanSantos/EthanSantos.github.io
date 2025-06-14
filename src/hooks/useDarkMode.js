import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Simplified hook that consumes ThemeContext
const useDarkMode = () => {
  return useContext(ThemeContext);
};

export default useDarkMode; 