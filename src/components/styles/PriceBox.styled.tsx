import styled from "styled-components";

export const StyledPriceBox = styled.div`
  padding: 12px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.primary};
    h2 {
      margin: 0;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-family: "Orbitron", sans-serif;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
