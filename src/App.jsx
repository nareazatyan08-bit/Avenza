import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Home from './pages/home/Home'
import SignUp from './pages/signInSignUp/SignUp'
import SignIn from './pages/signInSignUp/SignIn'

import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from './pages/Dashboard';
import Profile from './pages/Pofile';
import Settings from './pages/Settings';


function App() {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart(prev => [...prev, product])
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
            {/* <Route
                path="/dashboard"
                element={<DashboardLayout cart={cart.length} />}
            >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route> */}
        </Routes>
    )
}

export default App