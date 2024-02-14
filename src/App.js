import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AddNew from "./components/AddNew";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddNew/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
