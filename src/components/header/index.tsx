import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContex } from '../../context/contex'
import { useTheme } from '../../context/theme'

export function Header() {
    const { cartAmount } = useContext(CartContex)
    const { theme, toggleTheme } = useTheme()

    return (
        <header className='w-full px-1 bench-header sticky top-0 z-50'>
            <nav className='flex w-full max-w-7xl h-16 items-center justify-between px-5 mx-auto'>
                <Link className='bench-logo' to='/'>
                    DevShop
                </Link>

                <div className='flex items-center gap-4'>
                    <button
                        onClick={toggleTheme}
                        className='bench-theme-toggle'
                        aria-label='Alternar tema'
                        title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
                    >
                        <div className='bench-theme-toggle-knob'>
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </div>
                    </button>

                    <Link to='/cart' className='relative bench-icon-cart'>
                        <FiShoppingCart size={24} />
                        {cartAmount > 0 && (
                            <span className='absolute -right-3 -top-3 px-2.5 bench-badge rounded-full w-6 h-6 flex items-center justify-center text-xs'>
                                {cartAmount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    )
}
