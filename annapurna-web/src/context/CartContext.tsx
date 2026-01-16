import { createContext, useContext, useState, type ReactNode } from 'react';
import type { MenuItem } from '../data/menu';

export interface CartItem extends MenuItem {
    quantity: number;
    specialRequest?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, delta: number) => void;
    updateSpecialRequest: (itemId: string, request: string) => void;
    clearCart: () => void;
    isCartOpen: boolean;
    toggleCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product: MenuItem) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === product.id);
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentItems, { ...product, quantity: 1, specialRequest: '' }];
        });
        setIsCartOpen(true); // Auto open cart on add
    };

    const removeFromCart = (itemId: string) => {
        setItems(currentItems => currentItems.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId: string, delta: number) => {
        setItems(currentItems => {
            return currentItems.map(item => {
                if (item.id === itemId) {
                    const newQuantity = Math.max(0, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(item => item.quantity > 0);
        });
    };

    const updateSpecialRequest = (itemId: string, request: string) => {
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === itemId ? { ...item, specialRequest: request } : item
            )
        );
    };

    const clearCart = () => setItems([]);
    const toggleCart = () => setIsCartOpen(prev => !prev);

    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

    // Parse price string "$17.99" -> 17.99
    const cartTotal = items.reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + (price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            updateSpecialRequest,
            clearCart,
            isCartOpen,
            toggleCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
