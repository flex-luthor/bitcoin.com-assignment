import { StyledHeader } from "../styles/Header.styled";
import BCHLogo from "../../assets/img/svg/bch.svg";
import dark from "../../assets/img/png/dark.png";
import light from "../../assets/img/png/light.png";
import { useSharedState } from "../../store";

function Header() {
  const [state, setState] = useSharedState();

  const handleDarkModeToggle = () => {
    setState((prev) => ({ ...prev, darkMode: !state.darkMode }));
  };

  return (
    <StyledHeader>
      <div>
        <div>
          <img src={BCHLogo} width={32} alt="bch-logo" />
          <h1>Assignment</h1>
        </div>
        <div className="dark-mode" onClick={handleDarkModeToggle}>
          <img
            src={state.darkMode ? dark : light}
            width={24}
            height={24}
            alt="bch-logo"
          />
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
