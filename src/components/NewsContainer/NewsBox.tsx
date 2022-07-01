import { StyledNewsBox } from "../styles/NewsBox.styled";

interface NewsBoxProps {
  readonly data: any;
}
function NewsBox(props: NewsBoxProps) {
  return (
    <StyledNewsBox>
      <div>
        <img src={props.data.thumbnail} />
        <a href={props.data.href} target="_blank">
          <h2>{props.data.title}</h2>
        </a>
        <div className="overlay" />
      </div>

      <p>{props.data.excerpt}</p>
    </StyledNewsBox>
  );
}

export default NewsBox;
