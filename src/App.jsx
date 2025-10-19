import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Amenities from "./pages/Amenities";
import About from "./pages/About/About";
// import AmenityDetails from "./pages/AmenityDetails";
import AmenityDetail from "./pages/AmenityDetail";

import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/amenities/:id" element={<AmenityDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
