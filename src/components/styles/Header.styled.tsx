import styled from "styled-components";

export const StyledHeader = styled.header`
  overflow: auto;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.black50};

  div {
    display: flex;
    gap: 12px;
  }
`;
