import { ThemeProvider } from "styled-components";

import OnBoarding from "components/Onboarding";

import { Container, theme } from "styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <OnBoarding />
      </Container>
    </ThemeProvider>
  );
};

export default App;
