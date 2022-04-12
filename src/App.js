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
      <h1>App Component</h1>
      <Link to="/reservations">Reservations Page</Link>
      <Link to="/locations">Locations Page</Link>
      <div>
        {data.map((item, index) => {
          return <Link to={`/menu/${index}`}>{item.name}</Link>;
        })}
      </div>

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
