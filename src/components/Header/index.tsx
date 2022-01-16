import Menu from '../Menu';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <p className={styles.title}>pomodoro</p>
    <Menu />
  </header>
);

export default Header;