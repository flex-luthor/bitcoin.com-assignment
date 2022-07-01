import styled from "styled-components";

export const StyledChartContainer: React.ElementType = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.black};
  .controller {
    position: absolute;
    right: 12px;
    top: 20px;
    z-index: 1;
    display: flex;
    gap: 10px;
  }
`;
