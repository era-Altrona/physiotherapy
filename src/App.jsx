import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import Footer from "./components/footer";
import Newsletter from "./components/Newsletter";
import Price from "./price/Price";
import "./css/background.css";

export default function App() {
  return (
    <Router>
      <div className="svgBackground">

        <main>
          <Routes>
            <Route path="/" element={
              <>  
                <Header />
                <Hero />
                <AboutUs />
                <Services />
                <Newsletter />
              </>
            } />

            <Route path="/price" element={<Price />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}