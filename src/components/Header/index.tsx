import Menu from '../Menu';
import './header.scss';

const Header = () => (
  <header className='header'>
    <p className='title'>pomodoro</p>
    <Menu />
  </header>
);

export default Header;