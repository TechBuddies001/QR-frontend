
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('tarkshya_cart');
            if (savedCart && savedCart !== "undefined") {
                return JSON.parse(savedCart);
            }
        } catch (err) {
            console.error("Failed to parse cart from localStorage", err);
            localStorage.removeItem('tarkshya_cart');
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('tarkshya_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.productId === product.id);
            if (existing) {
                return prev.map(item => 
                    item.productId === product.id 
                    ? { ...item, quantity: item.quantity + quantity } 
                    : item
                );
            }
            
            // Handle image extraction safely
            let image = null;
            if (product.photos) {
                if (Array.isArray(product.photos)) {
                    image = product.photos[0];
                } else if (typeof product.photos === 'string') {
                    try {
                        image = JSON.parse(product.photos)[0];
                    } catch (e) {
                        image = product.photos; // Fallback to raw string
                    }
                }
            }

            return [...prev, { 
                productId: product.id, 
                name: product.name, 
                price: product.mrp || 0, 
                image,
                quantity 
            }];
        });
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.productId !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(prev => prev.map(item => 
            item.productId === productId ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity, 
            clearCart, 
            cartTotal, 
            cartCount 
        }}>
            {children}
        </CartContext.Provider>
    );
};
