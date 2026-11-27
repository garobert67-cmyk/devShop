import { useContext, useState, useEffect } from "react";
import { CartContex } from "../../context/contex";
import type { ProdutosProps } from "../home";
import { api } from "../../services/api"
import toast from "react-hot-toast";
import { BsCartPlus } from "react-icons/bs"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Products() {
    const { id } = useParams();
    const [produto, setProduto] = useState<ProdutosProps>()
    const navigate = useNavigate()
    const { addItemcart } = useContext(CartContex)

    useEffect(() => {
        async function getProduto() {
            const item = await api.get(`/products/${id}`)
            setProduto(item.data)
        }
        getProduto()
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
        navigate('/cart')
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="bench-product-title text-center mb-8">{produto?.title}</h1>

            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={produto?.cover}
                        alt={produto?.title}
                        className="w-full max-w-sm object-contain bench-product-img"
                    />
                </div>
                <div className="w-full md:w-1/2 flex items-start">
                    <p className="bench-product-desc">{produto?.description}</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5">
                <span className="bench-product-price">
                    {produto?.price.toLocaleString('PT-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <button
                    onClick={() => produto && handleAddCart(produto)}
                    className="cursor-pointer bench-btn bench-btn-primary"
                >
                    <BsCartPlus size={22} />
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    );
}
