import styled from "styled-components";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const StyledChart = styled.div`
  margin-top: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black50};
  padding: 40px 40px 40px 20px;
  border-radius: 12px;
  /* color: ${({ theme }) => theme.colors.white}; */
`;
