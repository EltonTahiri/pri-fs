import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import AboutUs from "./routes/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
