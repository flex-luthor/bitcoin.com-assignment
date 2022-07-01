import { StyledPriceBox } from "../styles/PriceBox.styled";
import BCHLogo from "../../assets/img/svg/bch.svg";

interface PriceBoxProps {
  readonly data: any;
  readonly lastDayPrice: number;
}

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function PriceBox(props: PriceBoxProps) {
  function getChange(): number {
    if (props.lastDayPrice === -1) return 0;
    return (props.data.price - props.lastDayPrice) / props.lastDayPrice;
  }

  return (
    <StyledPriceBox>
      <div>
        <img src={BCHLogo} width={20} />
        <h2>BCH</h2>
      </div>
      <div>
        <span>
          $ {props.data.price ? numberWithCommas(props.data.price) : 0}
        </span>
        ({getChange().toFixed(3)}%)
      </div>
    </StyledPriceBox>
  );
}

export default PriceBox;
