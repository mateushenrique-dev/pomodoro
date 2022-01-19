import { useContext } from "react";
import { ConfigContext } from "../../../context/config";
import Select from "./Select";
import { TimeBreak, Times, TimeWrapper, TitleBreak } from "./styles";

const Time = () => {
  const { timers } = useContext(ConfigContext);

  return (
    <TimeWrapper>
      <h4 className='timeTitle'>Time (Minutes)</h4>

      <Times>
        <TimeBreak>
          <TitleBreak>Pomodoro</TitleBreak>
          <Select
            initialValue={Math.floor((timers.pomodoro / 1000 / 60) << 0)}
            type="pomodoro"
          />
        </TimeBreak>
        <TimeBreak>
          <TitleBreak>Short Break</TitleBreak>
          <Select
            initialValue={Math.floor((timers.shortBreak / 1000 / 60) << 0)}
            type="shortBreak"
          />
        </TimeBreak>
        <TimeBreak>
          <TitleBreak>Long Break</TitleBreak>
          <Select
            initialValue={Math.floor((timers.longBreak / 1000 / 60) << 0)}
            type="longBreak"
          />
        </TimeBreak>
      </Times>
    </TimeWrapper>
  );
};

export default Time;
