import { useEffect } from "react";
import { useSharedState } from "../../store";
import PriceBox from "./PriceBox";

function PriceContainer() {
  const [state, setState] = useSharedState();

  useEffect(() => {
    const getPriceData = async () => {
      const client = state.indexClient;
      const res = await client.get("/v0/cash/price/usd");
      setState((prev) => ({ ...prev, priceData: res.data }));
    };
    getPriceData();
  }, []);

  return (
    <>
      <PriceBox
        data={state.priceData}
        lastDayPrice={state.chartData[0] && state.chartData[0].value}
      />
    </>
  );
}

export default PriceContainer;
