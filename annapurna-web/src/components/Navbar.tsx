import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import OnlineOrderModal from './OnlineOrderModal';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Catering', path: '/catering' },
        { name: 'Grocery', path: '/grocery' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24 items-center">
                        {/* Logo Section */}
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Link to="/" className="flex items-center gap-2">
                                {/* Using the logo URL found in source */}
                                <img
                                    src="https://static.wixstatic.com/media/6cbac1_dab37de4ecdb476487d381932347c176~mv2.gif"
                                    alt="Annapurna Logo"
                                    className="h-16 w-auto object-contain"
                                />
                                <div className="hidden md:block">
                                    <h1 className="text-2xl font-bold text-orange-600 leading-none">Annapurna</h1>
                                    <span className="text-sm text-gray-600 font-medium tracking-wider">Indian Food & Grocery</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-gray-700 hover:text-orange-600 font-medium text-lg transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                to="/reservations"
                                className="text-orange-600 border-2 border-orange-600 px-4 py-2 rounded-full font-medium hover:bg-orange-600 hover:text-white transition-colors"
                            >
                                Reservations
                            </Link>
                            <button
                                onClick={() => setIsOrderModalOpen(true)}
                                className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Order Online
                            </button>
                            <button
                                onClick={toggleCart}
                                className="text-gray-700 hover:text-orange-600 p-2 relative"
                            >
                                <ShoppingCart className="h-6 w-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in fade-in zoom-in">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t"
                        >
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="mt-4 space-y-3">
                                    <Link
                                        to="/reservations"
                                        className="block w-full text-center text-orange-600 border-2 border-orange-600 px-4 py-2 rounded-full font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Reservations
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsOrderModalOpen(true);
                                        }}
                                        className="block w-full text-center bg-orange-600 text-white px-6 py-2 rounded-full font-medium"
                                    >
                                        Order Online
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <OnlineOrderModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
            />
        </>
    );
};


export default Navbar;
