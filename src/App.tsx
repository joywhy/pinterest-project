import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Nav } from '@/components/common';

import Home from './views/Home';
import Bookmark from './views/Bookmark';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function CommonLayout() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
