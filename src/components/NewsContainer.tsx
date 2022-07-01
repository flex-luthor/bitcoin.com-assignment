import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import BCHLogo from "../assets/img/svg/bch.svg";
import { Row } from "./Containers";
import NewsBox from "./NewsBox";
import { useSharedState } from "../store";

function NewsContainer() {
  const [state, setState] = useSharedState();
  return (
    <Row>
      {state.newsData.map((data) => (
        <NewsBox data={data} />
      ))}
    </Row>
  );
}

export default NewsContainer;
