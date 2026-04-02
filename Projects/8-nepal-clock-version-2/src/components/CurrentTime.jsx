import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // console.log("Interval is begun");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      // console.log("cancel interval");
    };
  }, []);

  return (
    <p className="lead">
      This is the current Date & Time : {time.toLocaleDateString()} |{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
