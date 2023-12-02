import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/barcode")}>Barcode</button>
      <button onClick={() => navigate("/remind-schedule")}>
        Reminder Schedule
      </button>
    </div>
  );
};

export default HomePage;
