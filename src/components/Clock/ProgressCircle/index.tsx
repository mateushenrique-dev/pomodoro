import { useEffect, useState } from "react";
import { Colors } from "../../../context/modal";

const ProgressCircle = ({ color }: { color: Colors }) => {
  const screenWidth = window.screen.width;
  const [progressProperty, setProgressProperty] = useState({
    width: 248,
    height: 248,
    strokeWidth: 5,
    cx: 125,
    cy: 125,
    r: 110,
  });

  useEffect(() => {
    console.log(screenWidth);
    if (screenWidth > 457) {
      setProgressProperty({
        width: 366,
        height: 366,
        strokeWidth: 15,
        cx: 183,
        cy: 185,
        r: 160,
      });
    }
  }, [screenWidth]);

  return (
    <svg
      className="progress"
      width={progressProperty.width}
      height={progressProperty.height}
    >
      <circle
        cx={progressProperty.cx}
        cy={progressProperty.cy}
        r={progressProperty.r}
        stroke={color}
        strokeWidth={progressProperty.strokeWidth}
        fill="transparent"
        style={{
          strokeDashoffset: 0,
        }}
      ></circle>
    </svg>
  );
};

export default ProgressCircle;
