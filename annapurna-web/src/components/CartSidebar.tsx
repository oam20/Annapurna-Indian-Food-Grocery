import { useRef, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
    const { items, isCartOpen, toggleCart, updateQuantity, removeFromCart, updateSpecialRequest, cartTotal } = useCart();
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isCartOpen) {
                toggleCart();
            }
        };

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen, toggleCart]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 z-[90] backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[100] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <ShoppingBag className="w-6 h-6 text-orange-600" />
                                Your Order
                            </h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <ShoppingBag className="w-16 h-16 text-brand-divier" />
                                    <p className="text-brand-muted text-lg">Your cart is empty</p>
                                    <button
                                        onClick={toggleCart}
                                        className="text-brand-primary font-medium hover:underline"
                                    >
                                        Browse Menu
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-4 border border-brand-divider rounded-xl hover:border-brand-primary/30 transition-colors bg-white shadow-sm">
                                        <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-brand-cream/30">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-1">
                                                <h3 className="font-semibold text-brand-brown line-clamp-1 pr-2">{item.name}</h3>
                                                <span className="font-semibold text-brand-secondary whitespace-nowrap">
                                                    {(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-brand-muted mb-3">{item.category}</p>

                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-2 bg-brand-cream rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 hover:bg-white rounded shadow-sm transition-all"
                                                    >
                                                        <Minus className="w-3.5 h-3.5 text-brand-brown" />
                                                    </button>
                                                    <span className="font-medium text-brand-brown w-6 text-center text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-1 hover:bg-white rounded shadow-sm transition-all"
                                                    >
                                                        <Plus className="w-3.5 h-3.5 text-brand-brown" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-full transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Special Request Input */}
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                                                    <MessageSquare className="w-3 h-3" />
                                                    Special Request
                                                </div>
                                                <textarea
                                                    value={item.specialRequest || ''}
                                                    onChange={(e) => updateSpecialRequest(item.id, e.target.value)}
                                                    placeholder="e.g. Extra spicy, No onions..."
                                                    className="w-full text-sm bg-brand-cream border border-brand-divider rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-brand-primary resize-none placeholder-brand-muted"
                                                    rows={2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-brand-divider p-6 bg-brand-cream/30 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-brand-muted">
                                        <span>Subtotal</span>
                                        <span>{'$'}{cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-brand-secondary">
                                        <span>Total</span>
                                        <span>{'$'}{cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="grid gap-3">
                                    <Link
                                        to="/cart"
                                        onClick={toggleCart}
                                        className="w-full bg-brand-secondary text-white border border-brand-secondary py-4 rounded-xl font-bold text-lg hover:bg-brand-primary transition-all text-center shadow-md"
                                    >
                                        View Full Bag
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
