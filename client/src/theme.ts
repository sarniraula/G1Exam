// src/theme.ts

import { Dimensions, PixelRatio } from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Scale sizes based on screen dimensions
const scale = width / 375;  // Assuming the design is based on a 375px width screen

const normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Define the color palette
export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  background: '#ffffff',
  text: '#000000',
  muted: '#6c757d',
  link: '#007bff',
  // Add any additional colors you want to use
};

// Define font sizes
export const fontSizes = {
  small: normalize(12),
  medium: normalize(16),
  large: normalize(20),
  extraLarge: normalize(24),
};

// Define spacing (padding/margin)
export const spacing = {
  small: normalize(8),
  medium: normalize(16),
  large: normalize(24),
  extraLarge: normalize(32),
};

// Define border radius
export const borderRadius = {
  small: normalize(4),
  medium: normalize(8),
  large: normalize(12),
};

// Define a global theme object
export const theme = {
  colors,
  fontSizes,
  spacing,
  borderRadius,
  screen: {
    width,
    height,
  },
  normalize,
};
