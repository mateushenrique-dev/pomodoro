import { ReactComponent as ArrowUp } from "../../../../assets/arrow_up.svg";
import { ReactComponent as ArrowDown } from "../../../../assets/arrow_down.svg";
import useSelect from './useSelect';
import { Arrow, Arrows, SelectWrapper } from './styles';
import { Timers } from '../../../../types';

interface ISelectProps {
  initialValue: number;
  type: Timers;
}

const Select = ({ initialValue, type }: ISelectProps) => {
  const { increment, decrement, value } = useSelect(initialValue, type);

  return (
    <SelectWrapper>
      <div>
        <p>{value}</p>
      </div>
      <Arrows>
        <Arrow
          title="increment"
          onClick={increment}
        >
          <ArrowUp />
        </Arrow>
        <Arrow
          title="decrement"
          onClick={decrement}
        >
          <ArrowDown />
        </Arrow>
      </Arrows>
    </SelectWrapper>
  );
};

export default Select;
