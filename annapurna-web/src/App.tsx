import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './index.css';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';

import Home from './pages/Home';
import Menu from './pages/Menu';
import CartPage from './pages/CartPage';
import Catering from './pages/Catering';
import Grocery from './pages/Grocery';
import GroceryProductPage from './pages/GroceryProductPage';
import About from './pages/About';

// Placeholder pages
// const Home = () => <div className="h-screen flex items-center justify-center text-3xl text-gray-400">Home Page Content</div>;
// const Menu = () => <div className="h-screen flex items-center justify-center text-3xl text-gray-400">Menu Page</div>;

function App() {
  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/grocery" element={<Grocery />} />
            <Route path="/grocery/:id" element={<GroceryProductPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <CartSidebar />
        </MainLayout>
      </CartProvider>
    </Router>
  );
}

export default App;
