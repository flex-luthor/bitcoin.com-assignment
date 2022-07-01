import { StyledNewsBox } from "./styles/NewsBox.styled";
import BCHLogo from "../assets/img/svg/bch.svg";

interface NewsBoxProps {
  readonly data: any;
}
function NewsBox(props: NewsBoxProps) {
  return (
    <StyledNewsBox>
      <div>
        <img src={props.data.thumbnail} />
        <h2>{props.data.title}</h2>
        <div className="overlay" />
      </div>

      <p>{props.data.excerpt}</p>
    </StyledNewsBox>
  );
}

export default NewsBox;
