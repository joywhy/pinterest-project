import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '@/components/common';

import Home from './views/Home';
import Bookmark from './views/Bookmark';
import { Toaster } from '@/components/ui/toaster';

import { Outlet } from 'react-router-dom';
import { Provider } from 'jotai';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search/*" element={<Home />} />
            <Route path="/bookmark" element={<Bookmark />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}
function CommonLayout() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default App;
