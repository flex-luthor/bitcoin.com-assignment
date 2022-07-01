import styled from "styled-components";

export const StyledHeader = styled.header`
  overflow: auto;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.black50};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    width: 100%;

    div {
      display: flex;
      gap: 12px;
    }

    .dark-mode {
      background-color: #fff;
      border-radius: 50%;
      border: 4px solid ${({ theme }) => theme.colors.primary};
      padding: 4px;
      cursor: pointer;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;
