import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "styled-components";
import { ThemeType } from "../../App";
import { useSharedState } from "../../store";
import { format, parseISO } from "date-fns";

function Chart() {
  const theme = useTheme() as ThemeType;
  const [state] = useSharedState();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={state.chartData.slice(0, state.chartDuration).reverse()}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={theme.colors.primary}
              stopOpacity="0.4"
            />
            <stop
              offset="75%"
              stopColor={theme.colors.primary}
              stopOpacity="0.05"
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="value"
          stroke={theme.colors.primary}
          fill="url(#color)"
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            const interval = state.chartDuration === 30 ? 7 : 1;
            if (date.getDate() % interval === 0) {
              return format(date, "MMM d");
            }
            return "";
          }}
        />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickFormatter={(number) => `$${number}`}
          domain={[
            (dataMin: number) => 1000 * Math.floor((dataMin - 1000) / 1000),
            (dataMax: number) => 1000 * Math.ceil((dataMax + 1000) / 1000),
          ]}
        />
        <Tooltip />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
