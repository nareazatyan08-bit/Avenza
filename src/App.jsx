import { Routes, Route } from 'react-router-dom'
import './App.css'
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
   
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            
            <Route
                path="/signup"
                element={
                    <SignUp />
                }
            />
            <Route
                path="/signin"
                element={<SignIn />}
            />
            <Route
                path="/dashboard"
                element={<DashboardLayout />}
            >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/products/:productId" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}

export default App