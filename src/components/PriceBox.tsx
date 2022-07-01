import { StyledPriceBox } from "./styles/PriceBox.styled";
import BCHLogo from "../assets/img/svg/bch.svg";

interface PriceBoxProps {
  readonly data: any;
}

function PriceBox(props: PriceBoxProps) {
  return (
    <StyledPriceBox>
      <div>
        <img src={BCHLogo} width={20} />
        <h2>BCH</h2>
      </div>
      <div>
        <span>$ 50,123</span>(+6.3%)
      </div>
    </StyledPriceBox>
  );
}

export default PriceBox;
