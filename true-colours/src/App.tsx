import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  About,
  Contact,
  Homepage,
  Prices,
  PrivacyPolicy,
  Reviews,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </>
    </Routes>
  );
};

export default App;
