import { BsCartPlus } from "react-icons/bs"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useContext } from "react";
import { CartContex } from "../../context/contex";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProdutosProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() {
    const { addItemcart } = useContext(CartContex)
    const [produtos, setProdutos] = useState<ProdutosProps[]>([])

    useEffect(() => {
        async function getProdutos() {
            const response = await api.get('/products')
            setProdutos(response.data)
        }
        getProdutos()
    }, [])

    function handleAddCart(produto: ProdutosProps) {
        toast.success('Produto adicionado no carrinho', {
            style: {
                borderRadius: 10,
                backgroundColor: '#1a1a1a',
                color: '#e8e8e8',
                border: '1px solid #2a2a2a'
            }
        })
        addItemcart(produto)
    }

    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="bench-section-title text-center mb-8 mt-10 mx-auto">
                    Produtos em alta
                </h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {produtos.map((produto) => (
                        <section key={produto.id} className="w-full bench-card">
                            <Link to={`/products/${produto.id}`}>
                                <img
                                    className="w-full rounded-lg max-h-70 mb-2 cursor-pointer bench-card-img object-cover"
                                    src={produto.cover} alt={produto.title} />
                            </Link>
                            <p className="bench-card-title mt-2 mb-2 line-clamp-2">
                                {produto.title}
                            </p>
                            <div className="flex gap-3 items-center justify-between">
                                <span className="bench-card-price">
                                    {produto.price.toLocaleString('PT-BR', { style: 'currency', currency: 'BRL' })}
                                </span>
                                <button
                                    onClick={() => handleAddCart(produto)}
                                    className="cursor-pointer bench-btn-icon">
                                    <BsCartPlus size={20} />
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    )
}
