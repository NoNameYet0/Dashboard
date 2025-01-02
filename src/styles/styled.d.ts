import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "bg-primary": string;
      "bg-secondary": string;
      "font-primary": string;
      "font-secondary": string;
      "success-color": string;
      "fail-color": string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    typography: {
      fontFamily: string; // Default font family
      fontSize: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      fontWeight: {
        light: string;
        regular: string;
        bold: string;
      };
      lineHeight: {
        small: string;
        medium: string;
        large: string;
      };
      letterSpacing: {
        normal: string;
        wide: string;
        wider: string;
      };
    };
  }
}
