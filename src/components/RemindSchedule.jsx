import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RemindSchedule = () => {
  const [targetTime, setTargetTime] = useState("2023-09-20T17:21:00+06:00");
  const [targetDateIn, setTargetDateIn] = useState("");
  const [targetTimeIn, setTargetTimeIn] = useState("");
  const setReminder = () => {
    console.log(targetDateIn, targetTimeIn);
    setTargetTime(`${targetDateIn}T${targetTimeIn}+06:00`);
  };
  useEffect(() => {
    const notify = () => toast("Wow so easy!");
    const now = new Date();
    const target = new Date(targetTime);
    const delay = target.getTime() - now.getTime();

    if (delay > 0) {
      const timeoutId = setTimeout(notify, delay);

      // Cleanup function
      return () => clearTimeout(timeoutId);
    }
  }, [targetTime]);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div>
        <input
          type="date"
          onChange={(e) => {
            setTargetDateIn(e.target.value);
          }}
        />
        <input
          type="time"
          onChange={(e) => {
            setTargetTimeIn(e.target.value);
          }}
        />
        <button type="button" onClick={setReminder}>
          Set a reminder
        </button>
      </div>
      Reminder set for {targetTime}
    </div>
  );
};

export default RemindSchedule;
