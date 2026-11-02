import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"
import OurServicesPage from "./pages/OurServicesPage";
import OurWorkPage from "./pages/OurWorkPage";
import AboutUsPage from "./pages/AboutUsPage"
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/work" element={<OurWorkPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;