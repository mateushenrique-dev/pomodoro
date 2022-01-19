import Menu from '../Menu';
import { HeaderTitle, HeaderWrapper } from "./styles";

const Header = () => (
  <HeaderWrapper>
    <HeaderTitle>pomodoro</HeaderTitle>
    <Menu />
  </HeaderWrapper>
);

export default Header;