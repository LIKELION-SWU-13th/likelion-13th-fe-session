import Home from "./pages/Home";
import Series from "./pages/Series";
import Movie from "./pages/Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
