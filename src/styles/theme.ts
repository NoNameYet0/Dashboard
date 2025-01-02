import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    "bg-primary": "#f9f9f9",
    "bg-secondary": "#1a1a1a",
    "font-primary": "#000000",
    "font-secondary": "#ffffff",
    "success-color": "#28a745",
    "fail-color": "#dc3545",
  },

  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
  },

  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      small: "12px", // Small font size
      medium: "16px", // Medium font size
      large: "20px", // Large font size
      xlarge: "24px", // Extra large font size
    },
    fontWeight: {
      light: "300", // Light font weight
      regular: "400", // Regular font weight
      bold: "700", // Bold font weight
    },
    lineHeight: {
      small: "1.4", // Line height for small text
      medium: "1.6", // Line height for medium text
      large: "1.8", // Line height for large text
    },
    letterSpacing: {
      normal: "0", // Default letter spacing
      wide: "0.05em", // Slightly wide spacing
      wider: "0.1em", // Wider spacing
    },
  },
};

export default theme;
