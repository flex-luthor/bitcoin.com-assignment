import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;

interface ColProps {
  readonly flex: number;
}

export const StyledCol: React.ElementType = styled.div<ColProps>`
  margin-top: 20px;
  flex: ${(props) => props.flex || 1};
  background-color: ${({ theme }) => theme.colors.black50};
  padding: 40px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
