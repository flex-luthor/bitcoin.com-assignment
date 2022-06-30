import {
  StyledContainer,
  StyledCol,
  StyledRow,
} from "./styles/Containers.styled";

function Container({ children }: { children: React.ReactNode }) {
  return <StyledContainer>{children}</StyledContainer>;
}

function Row({ children }: { children: React.ReactNode }) {
  return <StyledRow>{children}</StyledRow>;
}
function Col(props: { children?: React.ReactNode; flex?: number }) {
  return <StyledCol flex={props.flex}>{props.children}</StyledCol>;
}

export { Container, Row, Col };
