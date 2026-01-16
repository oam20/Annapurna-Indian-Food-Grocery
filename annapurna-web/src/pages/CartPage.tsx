import { Minus, Plus, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { items, updateQuantity, removeFromCart, updateSpecialRequest, cartTotal, deliveryNote, updateDeliveryNote } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-bold uppercase tracking-wider mb-6">Your Bag is Empty</h2>
                <Link
                    to="/menu"
                    className="group flex items-center gap-2 bg-black text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-gray-800 transition-colors"
                >
                    Continue Shopping
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16 text-brand-secondary font-serif">Shopping Bag</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left Column: Product List */}
                <div className="lg:col-span-8 space-y-12">
                    {/* Header Row (Hidden on mobile) */}
                    <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-brand-divider text-xs font-bold uppercase tracking-widest text-brand-muted">
                        <div className="col-span-6">Product</div>
                        <div className="col-span-3 text-center">Quantity</div>
                        <div className="col-span-3 text-right">Total</div>
                    </div>

                    {/* Items */}
                    <div className="space-y-12">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-start group"
                            >
                                {/* Product Info */}
                                <div className="md:col-span-6 flex gap-6">
                                    <div className="relative w-32 aspect-[3/4] md:w-40 bg-white/50 overflow-hidden flex-shrink-0 border border-brand-divider/30">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 py-1">
                                        <div className="flex justify-between md:block">
                                            <h3 className="text-lg font-bold uppercase tracking-wide mb-2 text-brand-secondary">{item.name}</h3>
                                            {/* Mobile Price */}
                                            <span className="md:hidden font-medium text-brand-brown">
                                                {'$'}{(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-brand-muted uppercase tracking-wider mb-4">{item.category}</p>

                                        {/* Special Request Input */}
                                        <div className="mt-4">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted mb-2 block">
                                                Special Instructions
                                            </label>
                                            <input
                                                type="text"
                                                value={item.specialRequest || ''}
                                                onChange={(e) => updateSpecialRequest(item.id, e.target.value)}
                                                placeholder="Add note..."
                                                className="w-full max-w-xs bg-transparent border-b border-brand-divider py-1 text-sm focus:border-brand-primary focus:outline-none transition-colors placeholder-brand-divider"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity Stepper */}
                                <div className="md:col-span-3 flex md:justify-center py-1">
                                    <div className="flex items-center border border-brand-divider h-10 w-32 md:w-full max-w-[120px]">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="w-10 h-full flex items-center justify-center hover:bg-brand-cream transition-colors text-brand-brown"
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="flex-1 text-center font-medium text-sm text-brand-brown">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-10 h-full flex items-center justify-center hover:bg-brand-cream transition-colors text-brand-brown"
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>

                                {/* Price & Remove */}
                                <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:items-end py-1 h-full">
                                    <span className="hidden md:block text-lg font-bold text-brand-brown">
                                        {'$'}{(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                    </span>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-red-600 transition-colors flex items-center gap-2 group/remove"
                                    >
                                        <span className="hidden md:inline">Remove</span>
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Summary */}
                <div className="lg:col-span-4">
                    <div className="sticky top-28 bg-white p-8 md:p-12 border border-brand-divider">
                        <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-brand-secondary font-serif">Order Summary</h2>

                        {/* Delivery Note Section */}
                        <div className="mb-8">
                            <label className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3 block">
                                Delivery Instructions
                            </label>
                            <textarea
                                value={deliveryNote}
                                onChange={(e) => updateDeliveryNote(e.target.value)}
                                placeholder="e.g. Leave outside front door, Gate code 1234..."
                                className="w-full bg-brand-cream border border-brand-divider p-4 text-sm focus:outline-none focus:border-brand-primary transition-colors resize-none mb-2"
                                rows={3}
                            />
                            <p className="text-[10px] text-brand-muted uppercase tracking-wider">
                                Optional Note for Driver
                            </p>
                        </div>

                        <div className="space-y-4 mb-8 text-sm">
                            <div className="flex justify-between text-brand-brown">
                                <span>Subtotal</span>
                                <span>{'$'}{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-brand-muted">
                                <span>Shipping</span>
                                <span>Calculated at next step</span>
                            </div>
                            <div className="flex justify-between text-brand-muted">
                                <span>Tax</span>
                                <span>Calculated at next step</span>
                            </div>

                            <div className="pt-6 mt-6 border-t border-brand-divider flex justify-between text-lg font-bold text-brand-secondary">
                                <span>Total</span>
                                <span>{'$'}{cartTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full bg-brand-secondary text-white py-5 uppercase tracking-widest font-bold text-sm hover:bg-brand-primary transition-colors mb-4 shadow-md">
                            Proceed to Checkout
                        </button>

                        <p className="text-xs text-brand-muted text-center leading-relaxed">
                            Secure Checkout. By proceeding, you agree to our Terms and Conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
