import type { ThemeDefinition } from 'vuetify';

// Light Theme Configuration
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    secondary: '#03DAC6',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

// Dark Theme Configuration
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#BB86FC',
    secondary: '#03DAC6',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

// Export the theme configurations
export default {
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
