import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Home from './pages/home/Home'
import SignUp from './pages/signInSignUp/SignUp'
import SignIn from './pages/signInSignUp/SignIn'
import ProductDetails from './pages/productDetails/ProductDetails'
import Cart from './pages/cart/Cart'

import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';


function App() {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart(prev => [...prev, product])
    }

     function removeFromCart(product) {
      setCart(prev => prev.filter(item => item.id !== product.id))
  }

    return (
        <Routes>
            <Route path="/" element={<Home cartLength={cart.length} addToCart={addToCart} />} />
            
            <Route
                path="/signup"
                element={
                    <SignUp cartLength={cart.length} />
                }
            />
            <Route
                path="/signin"
                element={<SignIn cartLength={cart.length} />}
            />
            <Route
                path="/dashboard"
                element={<DashboardLayout cartLength={cart.length}/>}
            >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/products/:productId" element={<ProductDetails onAddToCart={addToCart}/>} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
        </Routes>
    )
}

export default App