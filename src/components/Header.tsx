import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import BCHLogo from "../assets/img/svg/bch.svg";

function Header() {
  return (
    <StyledHeader>
      <div>
        <img src={BCHLogo} width={32} />
        <h1>Assignment</h1>
      </div>
    </StyledHeader>
  );
}

export default Header;
