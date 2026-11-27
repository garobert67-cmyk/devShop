import { useContext } from "react";
import { CartContex } from "../../context/contex";
import { Link } from "react-router-dom";

export function Cart() {
    const { cart, total, addItemcart, removeCartItem } = useContext(CartContex)
    return (
        <div className="w-full max-w-7xl px-4 mx-auto py-4">
            <h1 className="bench-section-title text-center mb-8 mx-auto">
                Meu carrinho
            </h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-4 py-16">
                    <h2 className="bench-empty-state">Ops... seu carrinho está vazio</h2>
                    <Link to='/' className="bench-btn-link">
                        Acessar produtos
                    </Link>
                </div>
            )}

            <div className="flex flex-col gap-4">
                {cart.map((item) => (
                    <section key={item.id} className="flex items-center justify-between bench-cart-item">
                        <img
                            className="w-28 bench-cart-img"
                            src={item.cover}
                            alt=""
                        />
                        <span className="bench-cart-price">Preço: {item.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</span>

                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={() => removeCartItem(item)}
                                className="bench-btn-counter">
                                −
                            </button>
                            <span className="bench-cart-amount">
                                {item.amount}
                            </span>
                            <button
                                onClick={() => addItemcart(item)}
                                className="bench-btn-counter">
                                +
                            </button>
                        </div>

                        <span className="bench-cart-subtotal">
                            {item.total.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </span>
                    </section>
                ))}
            </div>

            {cart.length !== 0 && (
                <div className="bench-cart-total text-right">
                    Total: {total}
                </div>
            )}
        </div>
    );
}
