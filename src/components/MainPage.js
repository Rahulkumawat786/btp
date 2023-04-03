import { Routes, Route, useState } from "react-router-dom";
import NavBar from "./NavBar";
import DashBoard from "./DashBoard";
import Camera from "./Camera";
import GPS from "./GPS";
import Documentation from "./Documentation";
import Footer from "./Footer";
const MainPage = ({ setLogedIn }) => {
  return (
    <>
      <NavBar value={80} setLogedIn={setLogedIn} />
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/gps" element={<GPS />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </>
  );
};
export default MainPage;
