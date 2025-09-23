import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Exchange from "./pages/Exchange";
import Market from "./pages/Market";
import Blogs from "./pages/Blogs";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-stone-50 font-inter">
      <BrowserRouter>
        <Navbar />
        <div className="max-w-6xl mx-auto w-full">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Exchange />} path="/exchange" />
            <Route element={<Market />} path="/market" />
            <Route element={<Blogs />} path="/blogs" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
