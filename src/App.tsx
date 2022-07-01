import Header from "./components/Header/Header";
import { SharedStateProvider, useSharedState } from "./store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container, Row, Col } from "./components/Containers";
import NewsContainer from "./components/NewsContainer";
import PriceContainer from "./components/PriceContainer";
import ChartContainer from "./components/ChartContainer";

const themes = {
  dark: {
    colors: {
      primary: "#00ADB5",
      secondary: "#CDBE78",
      black50: "#1B2430",
      black: "#131922",
      white: "#F2F2F2",
      white50: "#F2F2F288",
      transparent: "transparent",
    },
  },
  light: {
    colors: {
      primary: "#00ADB5",
      secondary: "#CDBE78",
      white50: "#1B2430",
      white: "#131922",
      black: "#F2F2F2",
      black50: "#FFF",
      transparent: "transparent",
    },
  },
};

type ThemeType = typeof themes.dark;

const App = () => {
  const [state, useState] = useSharedState();
  return (
    <ThemeProvider theme={state.darkMode ? themes.dark : themes.light}>
      <div>
        <GlobalStyles />
        <Header />
        <Container>
          <Row>
            <Col flex={1}>
              <ChartContainer />
            </Col>
          </Row>
          <Row>
            <Col flex={1}>
              <PriceContainer />
            </Col>
            <Col flex={2}>
              <NewsContainer />
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export type { ThemeType };

export default App;
