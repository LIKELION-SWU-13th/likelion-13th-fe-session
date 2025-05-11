import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Detail from './pages/Detail';
import { DiaryProvider } from './context/DiaryContext';

function App() {
  return (
    <DiaryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </DiaryProvider>
  );
}

export default App;
