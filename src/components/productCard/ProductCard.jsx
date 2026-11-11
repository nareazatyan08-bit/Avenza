import {Link, useLocation} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function ProductCard({product}){
    const location = useLocation()
    const {addToCart, removeFromCart} = useContext(CartContext);
    const isCartPage = location.pathname === '/cart'


    return(
        <Link
            to={`/products/${product.id}`}
        >
        <div className={`bg-[#D3C6B1] w-86 h-108 shadow-md hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl  ${product.id == 1 ? 'rounded-tl-3xl' : product.id == 4 ? 'rounded-tr-3xl' : ''}`}>
            <img 
            src={product.img}
            className={`h-76 w-86 ${product.id == 1 ? 'rounded-tl-3xl' : product.id == 4 ? 'rounded-tr-3xl' : ''}`}
            />
            <div className="px-5 pb-7 ml-2 mt-2">
                <p className="text-xl font-bakbak text-[#4C2304]">{product.name}</p>
                <p className="font-baloo2 text-xl text-[#4C2304]">{product.price} AMD</p>
                { isCartPage ? ( <button 
                onClick={(e) => {
                    e.preventDefault()
                    removeFromCart(product)
                }}
                className='font-baloo2 rounded-3xl w-full bg-[#4C2304] text-[#D3C6B1] px-4 py-2 mt-2 h-9 cursor-pointer hover:scale-105 active:scale-85 transition-all duration-200'>Remove </button>
            ): 
                <button 
                 onClick={(e) => {
                    e.preventDefault()
                    addToCart(product)
                }}
                className="font-baloo2 rounded-3xl cursor-pointer mt-4 px-4 py-2 ml-30 bg-[#4C2304] text-white">Add to cart</button>
            }
            </div>
        </div>
        </Link>
    )
}

export default ProductCard