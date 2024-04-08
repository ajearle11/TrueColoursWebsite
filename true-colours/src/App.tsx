import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages";

const App = () => {
 

  return (
    <Routes>
      <>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </>
    </Routes>
  );
};

export default App;
