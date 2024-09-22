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

// // Define the color palette
// export const lightTheme = {
//   colors: {
//     background: '#FFFFFF',       // Pure white background
//     backgroundLight: '#F7F8FA',  // Light gray background
//     backgroundDark: '#E4E7EB',   // Slightly darker gray for sections
//     text: '#1F2933',             // Dark gray text for good contrast
//     muted: '#9AA5B1',            // Light gray text for secondary info
//     primary: '#6E8EF7',          // Primary brand color (light blue)
//     secondary: '#67C0FF',        // Secondary brand color (blue)
//     danger: '#FF6B6B',           // Red for errors or warnings
//     link: '#3B82F6',             // Link blue
//     white: '#FFFFFF',            // White text for buttons or inverted sections
//   }
// };

// export const darkTheme = {
//   colors: {
//     background: '#1F2933',       // Dark background
//     backgroundLight: '#323F4B',  // Slightly lighter dark sections
//     backgroundDark: '#3E4C59',   // Even darker sections or dividers
//     text: '#E4E7EB',             // Light gray for text
//     muted: '#9AA5B1',            // Muted text for secondary info
//     primary: '#67C0FF',          // Primary brand color (blue)
//     secondary: '#6E8EF7',        // Secondary brand color (light blue)
//     danger: '#FF6B6B',           // Red for errors or warnings
//     link: '#67C0FF',             // Light blue for links
//     white: '#FFFFFF',            // White text for contrast on dark backgrounds
//   }
// };

export const colors = {
  background: '#FFFFFF',       // Pure white background
  backgroundLight: '#F7F8FA',  // Light gray background
  backgroundDark: '#E4E7EB',   // Slightly darker gray for sections
  text: '#1F2933',             // Dark gray text for good contrast
  muted: '#9AA5B1',            // Light gray text for secondary info
  primary: '#6E8EF7',          // Primary brand color (light blue)
  secondary: '#67C0FF',        // Secondary brand color (blue)
  danger: '#FF6B6B',           // Red for errors or warnings
  link: '#3B82F6',             // Link blue
  white: '#FFFFFF',            // White text for buttons or inverted sections
}

export const fontSizes = {
  small: normalize(12),
  medium: normalize(16),
  large: normalize(20),
  extraLarge: normalize(24),
};

export const spacing = {
  small: normalize(8),
  medium: normalize(16),
  large: normalize(24),
  extraLarge: normalize(32),
};

export const borderRadius = {
  small: normalize(4),
  medium: normalize(8),
  large: normalize(12),
};

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
