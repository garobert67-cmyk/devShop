import { Home } from './pages/home'
import { Cart } from './pages/CART'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'
import { Products } from './pages/products/products'

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/products/:id',
                element: <Products />
            }
        ]
    }
])

export { router };
