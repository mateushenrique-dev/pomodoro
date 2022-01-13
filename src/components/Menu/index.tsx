import './menu.scss'

const Menu = () => (
  <nav className="menu">
    <ul className="menuList">
      <li className="listItem active">pomodoro</li>
      <li className="listItem">short break</li>
      <li className="listItem">long break</li>
    </ul>
  </nav>
);

export default Menu;