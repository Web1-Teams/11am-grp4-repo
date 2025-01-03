import { createContext, useState } from "react";



export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const getItemQuantity = (id) =>
        cart.find((item) => item.id === id)?.quantity || 0;

    const increaseCartQuantity = (id) => {
        setCart((prev) => {
            const item = prev.find((item) => item.id === id);
            if (item) {
                return prev.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { id, quantity: 1 }];
            }
        });
    };

    const decreaseCartQuantity = (id) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) =>
        setCart((prev) => prev.filter((item) => item.id !== id));

    return (
        <ShoppingCartContext.Provider
            value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
