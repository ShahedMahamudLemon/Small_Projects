import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BarCode from "./components/BarCode";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/assets/style.css"; 
import FramerMotion from "./components/FramerMotion";
import Reminder from "./components/Reminder";
import RemindSchedule from "./components/RemindSchedule";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/barcode" exact element={<BarCode />} />
        <Route path="/motion" exact element={<FramerMotion />} />
        <Route path="/reminder" exact element={<Reminder />} />
        <Route path="/remind-schedule" exact element={<RemindSchedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
