import Header from "./components/Header";
import { SharedStateProvider, useSharedState } from "./store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container, Row, Col } from "./components/Containers";
import Chart from "./components/Chart";
import PriceBox from "./components/PriceBox";
import NewsBox from "./components/NewsBox";
import NewsContainer from "./components/NewsContainer";
import PriceContainer from "./components/PriceContainer";

const theme = {
  colors: {
    primary: "#00ADB5",
    secondary: "#CDBE78",
    black50: "#1B2430",
    black: "#131922",
    white: "#F2F2F2",
    white50: "#F2F2F288",
  },
};

type ThemeType = typeof theme;

const App = () => {
  return (
    <SharedStateProvider>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          <Header />
          <Container>
            <Row>
              <Col flex={1}>
                <Chart />
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
    </SharedStateProvider>
  );
};

export type { ThemeType };

export default App;
