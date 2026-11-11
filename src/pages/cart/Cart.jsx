import ProductCard from "../../components/productCard/ProductCard";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cart(){
  const {cartCount, cart, removeFromCart} = useContext(CartContext);


    if (cartCount === 0) {
    return (
      <section className="mx-auto max-w-4xl p-10 text-center">
        <h1 className="text-3xl text-[#4C2304] font-bold">
          Your Cart is Empty
        </h1>

        <p className="mt-3 text-gray-500">
          You haven't added any products yet.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-3xl bg-[#4C2304] px-5 py-3 text-[#D3C6B1] hover:"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

    return(
        <div className="flex gap-10">
            {cart.map(item => <ProductCard product={item} />)}
        </div>
    )
}

export default Cart