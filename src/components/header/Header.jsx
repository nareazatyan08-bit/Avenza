import {ShoppingCart} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Header({isSignUp, isSignIn}) {
    const { cartCount } = useContext(CartContext);
    const location = useLocation();
    
    const isAuthPage =
        isSignUp || isSignIn ||
        location.pathname === "/signup" ||
        location.pathname === "/signin";
    return(
        <header className="absolute top-0 left-0 w-full z-50">
            <div className={`flex justify-between items-center mx-auto px-5 py-5 text-lg ${isAuthPage ? "text-[#4C2304]" : "text-white"}`}>

                <div className="flex items-center ml-5">
                    <h1 className="text-3xl font-bold font-['Baloo',sans-serif]">
                        Avenza
                    </h1>
                </div>

                <nav className="flex gap-6">
                    <NavLink to="/" className="hover:underline">Home</NavLink>
                    <NavLink to="/menu" className="hover:underline">Menu</NavLink>

                    <a href="#about" className="hover:underline">About</a>
                    <NavLink
                        to="/dashboard"
                        className="hover:underline"
                        >
                        Dashboard
                    </NavLink>

                    <NavLink className="flex gap-2 cursor-pointer"
                         to="/cart"
                    >
                        <ShoppingCart /> {cartCount}
                    </NavLink>

                    <NavLink to="/signup" className="hover:underline">Sign up</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header