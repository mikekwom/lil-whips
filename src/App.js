import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Reservations from "./Components/Reservations";
import Locations from "./Components/Locations";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <h2>Lil Whips</h2>
          <h2>Creamery</h2>
        </div>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/reservations" className="nav-item">
          Make a Reservation
        </Link>
      </div>
      {/* <div>
          {data.map((item, index) => {
            return <Link to={`/menu/${index}`}>{item.name}</Link>;
          })}
        </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
