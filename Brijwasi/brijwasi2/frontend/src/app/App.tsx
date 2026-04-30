import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Root from './components/Root';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If it's a deep link with a category, Menu.tsx handles its own specific scroll
    // Otherwise, we scroll to the top for every route change
    if (!pathname.includes('menu') || !search) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Root>
        <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
}