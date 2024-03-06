import { Navbar } from "./components/Navbar/Navbar";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Error } from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
