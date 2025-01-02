import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global.styles";
import { ResetStyles } from "./styles/reset.styles";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <GlobalStyle />
        hello world!
      </ThemeProvider>
    </>
  );
}

export default App;
