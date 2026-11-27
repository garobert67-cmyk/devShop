import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.tsx'
import CartProvider from './context/contex.tsx'
import { ThemeProvider } from './context/theme.tsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <CartProvider>
                <Toaster position="top-center" reverseOrder={false} />
                <RouterProvider router={router} />
            </CartProvider>
        </ThemeProvider>
    </StrictMode>,
);
