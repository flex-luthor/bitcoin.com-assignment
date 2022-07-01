import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import BCHLogo from "../assets/img/svg/bch.svg";
import { Row } from "./Containers";
import NewsBox from "./NewsBox";
import { useSharedState } from "../store";
import PriceBox from "./PriceBox";

function PriceContainer() {
  const [state, setState] = useSharedState();
  return (
    <>
      <PriceBox data={state.priceData} />
    </>
  );
}

export default PriceContainer;
