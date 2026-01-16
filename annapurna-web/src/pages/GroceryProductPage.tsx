import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { groceryItems } from '../data/grocery';
import type { GroceryItem } from '../data/grocery';
import { useCart } from '../context/CartContext';

// Design Constants
const COLORS = {
    primaryAccent: '#F28B2E',
    primaryCTA: '#F0C56A',
    background: '#FFFFFF',
    imageBg: '#F1F1F1',
    border: '#E6E6E6',
    primaryText: '#111111',
    secondaryText: '#6B6B6B',
    mutedText: '#9A9A9A',
    star: '#F59E0B'
};

const GroceryProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Using state for item to handle potential async loading or not found logic
    const [product, setProduct] = useState<GroceryItem | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Standard'); // Mock variant for now

    // Mock Sizes/Variants based on category logic could go here
    const sizes = ['Standard', 'Large Pack', 'Bulk Case'];

    useEffect(() => {
        const found = groceryItems.find(item => item.id === id);
        if (found) {
            setProduct(found);
            window.scrollTo(0, 0);
        } else {
            // Handle not found
            navigate('/grocery');
        }
    }, [id, navigate]);

    if (!product) return null;

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    return (
        <div className="min-h-screen pt-28 pb-12 font-sans" style={{ backgroundColor: COLORS.background, color: COLORS.primaryText }}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate('/grocery')}
                    className="flex items-center gap-2 mb-8 text-sm font-medium hover:text-orange-500 transition-colors"
                    style={{ color: COLORS.secondaryText }}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Market
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Image */}
                    <div className="relative rounded-[32px] overflow-hidden aspect-square lg:aspect-[4/3] flex items-center justify-center p-12"
                        style={{ backgroundColor: COLORS.imageBg }}>

                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-full object-contain mix-blend-multiply ${!product.inStock ? 'grayscale opacity-50' : ''}`}
                        />

                        {!product.inStock && (
                            <div className="absolute top-8 right-8 bg-black/5 backdrop-blur-md px-4 py-2 rounded-full border border-black/10">
                                <span className="text-sm font-bold uppercase tracking-wider text-black">Out of Stock</span>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col justify-center">

                        {/* Title & Price */}
                        <div className="mb-6">
                            <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: COLORS.primaryAccent }}>
                                {product.category}
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ color: COLORS.primaryText }}>
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4">
                                <span className="text-3xl font-bold" style={{ color: COLORS.primaryText }}>
                                    {product.price || '$14.99'}
                                </span>
                                {product.price && <span className="text-xl line-through decoration-2" style={{ color: COLORS.mutedText }}>$18.50</span>}
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current"
                                        style={{ color: i < 4 ? COLORS.star : COLORS.border }} strokeWidth={0} />
                                ))}
                            </div>
                            <span className="text-sm font-medium pt-1" style={{ color: COLORS.secondaryText }}>124 Reviews</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-sm font-medium pt-1" style={{ color: COLORS.secondaryText }}>2.5k+ Sold</span>
                        </div>

                        <div className="w-full h-px mb-8" style={{ backgroundColor: COLORS.border }} />

                        {/* Variants */}
                        <div className="mb-8">
                            <span className="block text-sm font-bold mb-3" style={{ color: COLORS.primaryText }}>Select Size</span>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all border ${selectedSize === size
                                            ? 'shadow-sm'
                                            : 'hover:border-gray-400'
                                            }`}
                                        style={{
                                            borderColor: selectedSize === size ? COLORS.primaryAccent : COLORS.border,
                                            backgroundColor: selectedSize === size ? `${COLORS.primaryAccent}15` : 'transparent',
                                            color: selectedSize === size ? COLORS.primaryAccent : COLORS.primaryText
                                        }}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Quantity */}
                                <div className="inline-flex items-center justify-between bg-white border rounded-full px-4 h-14 w-full sm:w-40"
                                    style={{ borderColor: COLORS.border }}>
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="font-bold text-lg">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <button
                                    className="w-full h-14 rounded-full font-bold text-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                                    style={{ backgroundColor: COLORS.primaryCTA, color: '#000000' }}
                                    disabled={!product.inStock}
                                >
                                    {product.inStock ? 'Buy Now' : 'Out of Stock'}
                                </button>
                                <button
                                    className="w-full h-14 rounded-full font-bold text-lg border hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                                    style={{ borderColor: COLORS.primaryText, color: COLORS.primaryText }}
                                    disabled={!product.inStock}
                                    onClick={() => product.inStock && addToCart({ ...product, quantity } as any)}
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>

                        {/* Delivery Info */}
                        <div className="mt-8 flex items-center gap-2 text-sm" style={{ color: COLORS.secondaryText }}>
                            <Check className="w-4 h-4 text-green-600" />
                            <span>In stock and ready to ship</span>
                            <span className="mx-2 text-gray-300">|</span>
                            <span>Free shipping on orders over $50</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroceryProductPage;
