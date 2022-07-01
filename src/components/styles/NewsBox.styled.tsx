import styled from "styled-components";

export const StyledNewsBox = styled.div`
  padding: 12px;
  max-width: calc(50% - 10px);
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }

  div {
    position: relative;
    img {
      width: 100%;
      border-radius: 8px;
    }

    a {
      h2 {
        margin: 0.75rem;
        position: absolute;
        bottom: 0;
        z-index: 10;
        font-size: 1.25rem;
        color: ${({ theme }) => theme.colors.white};

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .overlay {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        ${({ theme }) => theme.colors.black}
      );
    }
  }

  p {
    margin: 0.75rem;
    color: ${({ theme }) => theme.colors.white50};
    font-size: 0.85rem;
  }
`;
