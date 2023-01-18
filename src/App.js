// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DubaiCard from "./components/searchComponents/DubaiCard";
import Florida from "./components/searchComponents/Florida";
import Manhattan from "./components/searchComponents/Manhattan";
import Hongkong from "./components/searchComponents/Hongkong";
import HomePage from "./components/homePage/HomePage";
import List from "./components/bookHotel/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/hotels" element={<List />} />
          <Route exact path="/dubai" element={<DubaiCard />} />
          <Route exact path="/manhattan" element={<Manhattan />} />
          <Route exact path="/florida" element={<Florida />} />
          <Route exact path="/hongkong" element={<Hongkong />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
