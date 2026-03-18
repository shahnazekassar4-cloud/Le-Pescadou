import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import KarimKassar from "./pages/KarimKassar";
import { Video } from "./pages/Video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/karimkassar" element={<KarimKassar />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

export default App;
