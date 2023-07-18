import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/css/style.css";
import Layout from "./Layout";
import FetchImagesPage from "./pages/FetchImagesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FetchImagesPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
