import { Navbar } from "./components/Navbar/Navbar";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Error } from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
