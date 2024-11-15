import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Bookmark from './views/Bookmark';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
