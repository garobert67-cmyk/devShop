import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProdutosProps } from "../pages/home";

interface CartContexData {
    cart: CartProps[];
    cartAmount: number;
    addItemcart: (newItem: ProdutosProps) => void;
    removeCartItem: (produto: CartProps) => void;
    total: string;
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContex = createContext({} as CartContexData);

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState('');

    function addItemCart(newItem: ProdutosProps) {
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if (indexItem !== -1) {
            let cartList = cart;
            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            setCart(cartList);
            TotalSoma(cartList);
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        };

        setCart(produtos => [...produtos, data]);
        TotalSoma([...cart, data]);
    }

    function removeCartItem(produto: CartProps) {
        const indexItem = cart.findIndex((item) => item.id === produto.id);

        if (cart[indexItem]?.amount > 1) {
            let cartlist = cart;
            cartlist[indexItem].amount = cartlist[indexItem].amount - 1;
            cartlist[indexItem].total = cartlist[indexItem].total - cartlist[indexItem].price;
            setCart(cartlist);
            TotalSoma(cartlist);
            return;
        }

        const removeItem = cart.filter((item) => item.id !== produto.id);
        setCart(removeItem);
        TotalSoma(removeItem);
    }

    function TotalSoma(items: CartProps[]) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0);
        const format = result.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        setTotal(format);
    }

    return (
        <CartContex.Provider
            value={{
                cart,
                cartAmount: cart.length,
                addItemcart: addItemCart,
                removeCartItem: removeCartItem,
                total
            }}>
            {children}
        </CartContex.Provider>
    );
}

export default CartProvider;
