import { StyledChartContainer } from "../styles/ChartContainer.styled";
import { useEffect } from "react";
import { useSharedState } from "../../store";
import Chart from "./Chart";
import { StyledChartButton } from "../styles/ChartButton.styled";

function ChartContainer() {
  const [state, setState] = useSharedState();

  useEffect(() => {
    const getChartData = async () => {
      const client = state.indexClient;
      const res = await client.get("/v0/cash/history");

      const data = res.data.map((el: [string, number]) => {
        const date = el[0].substring(0, 10);
        const value = el[1];
        return { date, value };
      });
      setState((prev) => ({ ...prev, chartData: data }));
    };
    getChartData();
  });

  const handleDuration = (i: number) => {
    console.log(i);
    setState((prev) => ({ ...prev, chartDuration: i }));
  };

  const getLabel = (i: number): string => {
    switch (i) {
      case 1:
        return "1D";
      case 7:
        return "7D";
      case 30:
        return "1M";
      default:
        return "";
    }
  };

  return (
    <StyledChartContainer>
      <div className="controller">
        {[1, 7, 30].map((el) => (
          <StyledChartButton
            key={el}
            onClick={() => handleDuration(el)}
            isActive={el === state.chartDuration}
          >
            {getLabel(el)}
          </StyledChartButton>
        ))}
      </div>
      <Chart />
    </StyledChartContainer>
  );
}

export default ChartContainer;
