import { useContext } from "react";
import { ConfigContext } from "../../context/config";
import "./menu.scss";

const Menu = () => {
  const { alterActualTime, actualTime, timers } = useContext(ConfigContext);

  return (
    <nav className="menu">
      <ul className="menuList">
        <li
          className={`listItem ${
            timers["pomodoro"] === actualTime && "active"
          }`}
          onClick={() => alterActualTime("pomodoro")}
        >
          pomodoro 
        </li>
        <li
          className={`listItem ${
            timers["shortBreak"] === actualTime && "active"
          }`}
          onClick={() => alterActualTime("shortBreak")}
        >
          short break
        </li>
        <li
          className={`listItem ${
            timers["longBreak"] === actualTime && "active"
          }`}
          onClick={() => alterActualTime("longBreak")}
        >
          long break
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
