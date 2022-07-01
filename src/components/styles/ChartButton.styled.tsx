import styled from "styled-components";

interface ChartProps {
  readonly isActive: boolean;
}

export const StyledChartButton: React.ElementType = styled.button<ChartProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
`;
