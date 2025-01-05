import { useEffect, useState } from "react";
const controller = new AbortController();
const signal = controller.signal;
function CurrentTime() {
  //   setInterval(CurrentT(), 1000);
  let [time, setTime] = useState("12 AM");
  useEffect(() => {
   const intervalID = setInterval(() => {
      let newTime = new Date().toLocaleTimeString();
      setTime(newTime);
      // console.log("Controlled The Interval");
      
    }, 1000);
    return () => {
      clearInterval(intervalID);
      console.log("Controlled The Interval");
    }

  }, []);

  return (
    <>
      <div className="clock">{time}</div>
    </>
  );
}

export default CurrentTime;
