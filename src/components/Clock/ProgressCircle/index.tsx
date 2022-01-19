
import { Colors } from '../../../types';
import { Circle, Progress } from './styles';

const ProgressCircle = ({ color }: { color: Colors }) => {
  return (
    <Progress width={248} height={248} viewBox="0 0 250 250">
      <Circle
        cx={125}
        cy={125}
        r={110}
        stroke={color}
        strokeWidth={5}
        fill="transparent"
        style={{
          strokeDashoffset: 0,
        }}
      ></Circle>
    </Progress>
  );
};

export default ProgressCircle;
