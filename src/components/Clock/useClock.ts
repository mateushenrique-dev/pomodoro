import { useEffect, useRef, useState } from "react";
import Swal from 'sweetalert2';

const useClock = (timeToCount: number) => {
  const [time, setTime] = useState(timeToCount);
  const [counting, setCounting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audio] = useState(
    new Audio(
      "https://soundbible.com/mp3/Electrical_Sweep-Sweeper-1760111493.mp3"
    )
  );

  const intervalRef = useRef<any>(null);

  let minutes = Math.floor((time / 1000 / 60) << 0);
  let seconds = Math.floor((time / 1000) % 60);

  useEffect(() => {
    setTime(timeToCount)
    setProgress(0)
    clearInterval(intervalRef.current);
    setCounting(false)
  }, [timeToCount]);

  function count() {
    setTime((time) => {
      
      if ((time - 1000) < 0) {
        setProgress(1000)

        return 0
      }
      
      return time - 1000
    });
    
    setProgress((progress) => progress + 5);
  }

  useEffect(() => {
    if (time === 0) {
      audio.play();
      Swal.fire({
        title: 'Seu tempo acabou!',
      }).then(result => {
        if (result.isConfirmed) {
          audio.pause()
        }
      });
    }
  }, [time, audio])

  useEffect(() => {
    if (counting) {
      intervalRef.current = setInterval(count, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counting]);

  function pauseCount() {
    setCounting(false);
  }

  function startCount() {
    setCounting(true);
  }

  return {
    startCount,
    pauseCount,
    counting,
    minutes,
    seconds,
    progress, 
  };
};

export default useClock;
