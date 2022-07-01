import { StyledChart } from "./styles/Chart.styled";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ReactPropTypes } from "react";
import { ThemeContext, useTheme } from "styled-components";
import { ThemeType } from "../App";
import { useSharedState } from "../store";

function Container() {
  const theme = useTheme() as ThemeType;
  const [state, useState] = useSharedState();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={state.chartData}>
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
        <XAxis dataKey="date" axisLine={false} tickLine={false} />
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

export default Container;
