import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Services from "./routes/Services";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProtection from "./routes/DataProtection";
import Impressum from "./routes/Impressum";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/data-protection' element={<DataProtection />} />
        <Route path='/impressum' element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
