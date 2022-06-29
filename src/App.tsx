import Header from "./components/Header";
import { SharedStateProvider, useSharedState } from "./store";
import GlobalStyles from "./components/styles/Global";

const App = () => {
  return (
    <SharedStateProvider>
      <div>
        <GlobalStyles />
        <Header />
      </div>
    </SharedStateProvider>
  );
};

export default App;
